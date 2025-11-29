'use client';

import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { Code2, Terminal, Cpu } from 'lucide-react';

export default function Introduction() {
    return (
        <section className="py-32 bg-black relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px] animate-pulse" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-pink-600/10 rounded-full blur-[100px] animate-pulse delay-1000" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="space-y-12"
                    >
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
                                Let Me <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">Introduce</span> Myself
                            </h2>
                            <p className="text-gray-400 max-w-2xl mx-auto">
                                A passionate junior developer eager to learn and grow in the tech industry.
                            </p>
                        </div>

                        <div className="space-y-8 text-lg md:text-xl text-gray-300 leading-relaxed backdrop-blur-sm bg-white/5 p-8 md:p-12 rounded-3xl border border-white/10 hover:border-pink-500/30 transition-colors duration-500 text-left max-w-3xl mx-auto">
                            <p className="flex items-start gap-6">
                                <Terminal className="w-8 h-8 text-pink-500 mt-1 flex-shrink-0" />
                                <span>
                                    I'm a junior software developer with a growing passion for creating innovative solutions. I'm constantly learning and excited to tackle new challenges in the tech world. 🚀
                                </span>
                            </p>

                            <p className="flex items-start gap-6">
                                <Code2 className="w-8 h-8 text-purple-500 mt-1 flex-shrink-0" />
                                <span>
                                    I'm building my foundation in programming languages like <span className="text-pink-400 font-semibold">JavaScript</span>, <span className="text-purple-400 font-semibold">Python</span>, and modern web technologies.
                                </span>
                            </p>

                            <p className="flex items-start gap-6">
                                <Cpu className="w-8 h-8 text-blue-500 mt-1 flex-shrink-0" />
                                <span>
                                    My interests include <span className="text-blue-400 font-semibold">Web Development</span>, <span className="text-blue-400 font-semibold">Full-Stack Applications</span>, and exploring new frameworks and tools.
                                </span>
                            </p>

                            <p className="pl-14 text-gray-400 italic border-l-2 border-pink-500/30">
                                I'm actively working with <span className="text-white font-medium">React.js</span>, <span className="text-white font-medium">Node.js</span>, and <span className="text-white font-medium">Next.js</span> to build modern, responsive web applications while continuously expanding my skill set.
                            </p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
