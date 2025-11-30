'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from './ui/Card';
import { Code, Database, Layout, Smartphone } from 'lucide-react';

const skills = [
    {
        icon: <Layout className="w-6 h-6 text-blue-400" />,
        title: 'Frontend Development',
        description: 'Building responsive and interactive UIs with React, Next.js, and Tailwind CSS.',
    },
    {
        icon: <Database className="w-6 h-6 text-purple-400" />,
        title: 'Backend Development',
        description: 'Creating robust APIs and server-side logic with Node.js, Express, and MongoDB.',
    },
    {
        icon: <Code className="w-6 h-6 text-green-400" />,
        title: 'Full Stack Development',
        description: 'End-to-end application development combining frontend and backend expertise.',
    },
    {
        icon: <Smartphone className="w-6 h-6 text-pink-400" />,
        title: 'Mobile First',
        description: 'Ensuring seamless experiences across all devices and screen sizes.',
    },
];

export default function About() {
    return (
        <section id="about" className="py-24 bg-black/50">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
                        About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">Me</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Passionate about technology and design, I create solutions that solve real-world problems.
                        Here's a glimpse into what I do.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="h-full hover:bg-white/5 transition-colors">
                                <CardContent className="pt-6">
                                    <div className="mb-4 p-3 bg-white/5 rounded-lg w-fit">
                                        {skill.icon}
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">{skill.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        {skill.description}
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
