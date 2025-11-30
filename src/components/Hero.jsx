'use client';

import { motion } from 'framer-motion';
import Button from './ui/Button';
import { ArrowRight, Download } from 'lucide-react';

export default function Hero() {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse delay-1000" />
            </div>

            <div className="container mx-auto px-6 text-center relative z-10 py-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-blue-400 mb-6">
                        Available for freelance work
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-4xl md:text-7xl font-bold font-display mb-6 tracking-tight"
                >
                    Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Digital</span>
                    <br />
                    Experiences That Matter
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-md md:text-xl text-gray-400 max-w-2xl mx-auto mb-10"
                >
                    I'm a full-stack developer specializing in building exceptional digital experiences.
                    Currently focused on building accessible, human-centered products.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Button size="lg" className="group cursor-pointer" onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>
                        View Projects
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <a href="/Sanjay_D_Resume.pdf" download="Sanjay_D_Resume.pdf" className="cursor-pointer">
                        <Button variant="secondary" size="lg">
                            Download CV
                            <Download className="w-4 h-4 ml-2" />
                        </Button>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
