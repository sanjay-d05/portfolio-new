export const generateEmailTemplate = (contact) => {
    const submissionTime = new Date().toLocaleString('en-US', {
        dateStyle: 'full',
        timeStyle: 'short'
    });
    
    return `
        <div style="max-width: 600px; margin: 0 auto; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
            <!-- Header -->
            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 30px; border-radius: 12px 12px 0 0;">
                <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 600; letter-spacing: -0.5px;">
                    New Contact Message
                </h1>
                <p style="color: #e0e7ff; margin: 8px 0 0 0; font-size: 14px;">
                    ${submissionTime}
                </p>
            </div>
            
            <!-- Content -->
            <div style="background-color: #ffffff; padding: 40px 30px; border-left: 1px solid #e5e7eb; border-right: 1px solid #e5e7eb;">
                <!-- Contact Info -->
                <div style="margin-bottom: 30px;">
                    <div style="margin-bottom: 20px;">
                        <p style="color: #6b7280; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin: 0 0 6px 0;">
                            From
                        </p>
                        <p style="color: #111827; font-size: 16px; font-weight: 600; margin: 0;">
                            ${contact.name}
                        </p>
                    </div>
                    
                    <div>
                        <p style="color: #6b7280; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin: 0 0 6px 0;">
                            Reply To
                        </p>
                        <p style="margin: 0;">
                            <a href="mailto:${contact.email}" style="color: #667eea; text-decoration: none; font-size: 16px; font-weight: 500;">
                                ${contact.email}
                            </a>
                        </p>
                    </div>
                </div>
                
                <!-- Message -->
                <div>
                    <p style="color: #6b7280; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin: 0 0 12px 0;">
                        Message
                    </p>
                    <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; border-left: 4px solid #667eea;">
                        <p style="color: #374151; font-size: 15px; line-height: 1.6; white-space: pre-wrap; margin: 0;">
                            ${contact.message}
                        </p>
                    </div>
                </div>
                
                <!-- Reply Button -->
                <div style="margin-top: 30px; text-align: center;">
                    <a href="mailto:${contact.email}" style="display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #ffffff; padding: 14px 32px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 15px; box-shadow: 0 4px 6px rgba(102, 126, 234, 0.25);">
                        Reply to ${contact.name.split(' ')[0]}
                    </a>
                </div>
            </div>
            
            <!-- Footer -->
            <div style="background-color: #f9fafb; padding: 20px 30px; border-radius: 0 0 12px 12px; border: 1px solid #e5e7eb; border-top: none;">
                <p style="color: #9ca3af; font-size: 13px; margin: 0; text-align: center;">
                    Sent from your portfolio contact form
                </p>
            </div>
        </div>
    `;
};