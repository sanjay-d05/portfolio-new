import dbConnect from '@/lib/db';
import Contact from '@/models/Contact';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { generateEmailTemplate } from '@/lib/emailTemplate';

export async function POST(request) {
    try {
        await dbConnect();
        const body = await request.json();
        const contact = await Contact.create(body);

        // Email Notification Logic
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        const mailOptions = {
            from: `"Portfolio Contact Form" <${process.env.SMTP_USER}>`,
            to: process.env.MY_EMAIL,
            subject: 'New Contact Form Submission - Portfolio',
            html: generateEmailTemplate(contact),
        };

        try {
            await transporter.sendMail(mailOptions);
        } catch (emailError) {
            console.error('Error sending email:', emailError);
            // We don't want to fail the request if email fails, but maybe we should log it.
            // Continuing execution.
        }

        return NextResponse.json({ success: true, data: contact }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ success: false, error: error.message }, { status: 400 });
    }
}
