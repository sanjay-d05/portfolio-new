'use client';

import { motion } from 'framer-motion';
import {
    DiHtml5,
    DiCss3,
    DiJavascript1,
    DiReact,
    DiBootstrap,
    DiNodejs,
    DiMongodb,
    DiMysql,
    DiPhp,
    DiPython,
    DiGit,
    DiJava
} from 'react-icons/di';
import {
    SiTailwindcss,
    SiNextdotjs,
    SiExpress,
    SiCplusplus,
    SiFirebase
} from 'react-icons/si';

const techStack = [
    {
        icon: <DiHtml5 className="w-12 h-12" />,
        title: 'HTML5',
        color: 'text-orange-500'
    },
    {
        icon: <DiCss3 className="w-12 h-12" />,
        title: 'CSS3',
        color: 'text-blue-500'
    },
    {
        icon: <DiJavascript1 className="w-12 h-12" />,
        title: 'JavaScript',
        color: 'text-yellow-400'
    },
    {
        icon: <DiReact className="w-12 h-12" />,
        title: 'React JS',
        color: 'text-cyan-400'
    },
    {
        icon: <SiNextdotjs className="w-12 h-12" />,
        title: 'Next.js',
        color: 'text-white'
    },
    {
        icon: <DiBootstrap className="w-12 h-12" />,
        title: 'Bootstrap',
        color: 'text-purple-500'
    },
    {
        icon: <SiTailwindcss className="w-12 h-12" />,
        title: 'Tailwind CSS',
        color: 'text-teal-400'
    },
    {
        icon: <DiNodejs className="w-12 h-12" />,
        title: 'Node JS',
        color: 'text-green-500'
    },
    {
        icon: <SiExpress className="w-12 h-12" />,
        title: 'Express.js',
        color: 'text-gray-400'
    },
    {
        icon: <SiCplusplus className="w-12 h-12" />,
        title: 'C++',
        color: 'text-blue-400'
    },
    {
        icon: <DiMongodb className="w-12 h-12" />,
        title: 'MongoDB',
        color: 'text-green-600'
    },
    {
        icon: <DiMysql className="w-12 h-12" />,
        title: 'MySQL',
        color: 'text-blue-600'
    },
    {
        icon: <DiPhp className="w-12 h-12" />,
        title: 'PHP',
        color: 'text-indigo-400'
    },
    {
        icon: <DiPython className="w-12 h-12" />,
        title: 'Python',
        color: 'text-yellow-300'
    },
    {
        icon: <DiJava className="w-12 h-12" />,
        title: 'Java',
        color: 'text-red-500'
    },
    {
        icon: <DiGit className="w-12 h-12" />,
        title: 'Git',
        color: 'text-orange-600'
    },
    {
        icon: <SiFirebase className="w-12 h-12" />,
        title: 'Firebase',
        color: 'text-amber-500'
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'spring',
            stiffness: 100,
            damping: 10
        }
    }
};

export default function TechStack() {
    return (
        <section id="techstack" className="py-24 bg-black relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/3 -right-64 w-96 h-96 bg-purple-600/10 rounded-full blur-[128px]" />
                <div className="absolute bottom-1/3 -left-64 w-96 h-96 bg-blue-600/10 rounded-full blur-[128px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-display mb-6 tracking-tight">
                        Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">Stack</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Technologies and tools I use to bring ideas to life.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6"
                >
                    {techStack.map((tech, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="group relative"
                        >
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl opacity-0 group-hover:opacity-75 transition duration-300 blur" />

                            <div className="relative bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-white/10 group-hover:border-purple-500/50 transition-all duration-300 flex flex-col items-center justify-center gap-3 h-full">
                                <div className={`${tech.color} transition-transform duration-300 group-hover:scale-110`}>
                                    {tech.icon}
                                </div>
                                <h3 className="text-sm font-semibold text-gray-300 group-hover:text-white transition-colors text-center">
                                    {tech.title}
                                </h3>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
