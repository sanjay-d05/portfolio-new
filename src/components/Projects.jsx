'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';

const projects = [
    {
        title: 'Encryption and Decryption',
        description: 'Encryption and Decryption is shown in real time',
        imageUrl: '/projects/encrypt.webp',
        githubUrl: 'https://github.com/sanjay-d05/encryption-decryption',
        demoUrl: 'https://sanjay-d05.github.io/encryption-decryption/',
        tags: ['Cryptography', 'Real-time', 'JavaScript']
    },
    {
        title: 'Live Weather App',
        description: 'It Generates real time weathers and weather changes using weather APIs.',
        imageUrl: '/projects/weather.webp',
        githubUrl: 'https://github.com/sanjay-d05/live-weather-app',
        demoUrl: 'https://live-weather-app-eta.vercel.app/',
        tags: ['React', 'API', 'Weather']
    },
    {
        title: 'Trendy Tales',
        description: 'It showcases the front-end and UI/UX of an e-commerce application',
        imageUrl: '/projects/trendy_tales.webp',
        githubUrl: 'https://github.com/sanjay-d05/trendy-tales',
        demoUrl: 'https://trendy-tales.vercel.app/',
        tags: ['E-commerce', 'UI/UX', 'Frontend']
    },
    {
        title: 'Todo Task Manager',
        description: 'Helps you keep track of your daily tasks',
        imageUrl: '/projects/todo.webp',
        githubUrl: 'https://github.com/sanjay-d05/todo-list',
        demoUrl: 'https://todo-list-drab-mu-82.vercel.app/',
        tags: ['Productivity', 'React', 'Task Manager']
    },
    {
        title: 'GPT3',
        description: 'Its an static app which showcases Css skills',
        imageUrl: '/projects/gpt3.webp',
        githubUrl: 'https://github.com/sanjay-d05/static-gpt-3',
        demoUrl: 'https://static-gpt-3.vercel.app/',
        tags: ['CSS', 'Static', 'Design']
    },
    {
        title: 'Mind Sprint',
        description: 'A Quiz app to test your basic programming knowledge and skills',
        imageUrl: '/projects/mind_sprint.webp',
        githubUrl: 'https://github.com/sanjay-d05/mind-sprint',
        demoUrl: 'https://mind-sprint.vercel.app/',
        tags: ['Quiz', 'Education', 'React']
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'spring',
            stiffness: 100,
            damping: 12
        }
    }
};

export default function Projects() {
    return (
        <section id="projects" className="py-32 bg-black relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 -left-64 w-96 h-96 bg-purple-600/20 rounded-full blur-[128px]" />
                <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-blue-600/20 rounded-full blur-[128px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-display mb-6 tracking-tight">
                        Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">Projects</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Exploring the boundaries of technology through creative coding and engineering.
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            className="group relative h-full"
                        >
                            <ProjectCard project={project} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

// Extracted ProjectCard component for reusability
function ProjectCard({ project }) {
    return (
        <>
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-75 transition duration-500 blur-lg group-hover:blur-xl" />

            <div className="relative h-auto md:h-full bg-gray-900 rounded-2xl overflow-hidden border border-white/10 flex flex-col">
                {/* Image Container */}
                <div className="relative aspect-video md:aspect-[4/3] overflow-hidden">
                    <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    {/* Hover overlay for desktop only */}
                    <div className="hidden lg:flex absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 items-center justify-center gap-4 backdrop-blur-sm">
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-110"
                            title="View Code"
                        >
                            <Github className="w-6 h-6" />
                        </a>
                        <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-110"
                            title="View Demo"
                        >
                            <ExternalLink className="w-6 h-6" />
                        </a>
                    </div>
                </div>

                {/* Content */}
                <div className="p-4 md:p-6 flex flex-col flex-grow bg-gradient-to-b from-gray-900 to-black">
                    <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-bold font-display group-hover:text-purple-400 transition-colors duration-300">
                            {project.title}
                        </h3>
                        <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-purple-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                    </div>

                    <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag) => (
                            <span
                                key={tag}
                                className="px-3 py-1 text-xs font-medium bg-white/5 text-gray-300 rounded-full border border-white/5 group-hover:border-purple-500/30 transition-colors duration-300"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Buttons for mobile/tablet (below lg) */}
                    <div className="flex gap-3 lg:hidden mt-auto">
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-purple-500/50 text-white hover:bg-purple-900/30 transition-colors text-sm font-medium"
                        >
                            <Github className="w-4 h-4" /> GitHub
                        </a>
                        <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-purple-500/50 text-white hover:bg-purple-900/30 transition-colors text-sm font-medium"
                        >
                            <ExternalLink className="w-4 h-4" /> Demo
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
