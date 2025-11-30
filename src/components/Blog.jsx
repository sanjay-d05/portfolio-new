'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Clock, ArrowRight } from 'lucide-react';

const blogs = [
    {
        title: 'React.js for Beginners: A Complete Guide',
        desc: 'React.js is a popular JavaScript library used for building user interfaces, especially for single-page applications (SPAs).',
        blogUrl: 'https://sanjayblogstechandprogramming.blogspot.com/2025/02/reactjs-for-beginners-complete-guide-to.html',
        technology: 'React',
        duration: 4
    },
    {
        title: 'Getting Started with Node.js: A Beginners Guide',
        desc: 'Node.js is a JavaScript runtime environment used to run code outside the browser, ideal for building scalable backend services.',
        blogUrl: 'https://sanjayblogstechandprogramming.blogspot.com/2025/02/getting-started-with-nodejs-beginners.html',
        technology: 'Node',
        duration: 5
    },
    {
        title: 'Getting Started with Express.js',
        desc: 'Express.js is a minimal and flexible framework for Node.js used to build web apps and APIs with a robust set of features.',
        blogUrl: 'https://sanjayblogstechandprogramming.blogspot.com/2025/02/getting-started-with-expressjs.html',
        technology: 'Express',
        duration: 3
    },
    {
        title: 'MongoDB: A Beginner\'s Guide to NoSQL Databases',
        desc: 'MongoDB is a popular NoSQL database used for storing data in a flexible, JSON-like format, commonly used in modern web applications.',
        blogUrl: 'https://sanjayblogstechandprogramming.blogspot.com/2025/02/mongodb-beginners-guide-to-nosql.html',
        technology: 'MongoDB',
        duration: 5
    },
    {
        title: 'Getting Started with the MERN Stack',
        desc: 'The MERN stack is a popular JavaScript-based technology stack used for building full-stack web applications.',
        blogUrl: 'https://sanjayblogstechandprogramming.blogspot.com/2025/02/getting-started-with-mern-stack.html',
        technology: 'MERN',
        duration: 8
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
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

export default function Blog() {
    return (
        <section id="blog" className="py-24 bg-black/50 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 -left-64 w-96 h-96 bg-blue-600/10 rounded-full blur-[128px]" />
                <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-purple-600/10 rounded-full blur-[128px]" />
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
                        Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">Blogs</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Sharing knowledge and insights about web development and programming.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                >
                    {blogs.map((blog, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            className="group relative h-full"
                        >
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-75 transition duration-500 blur-lg" />

                            <div className="relative h-full bg-gray-900 rounded-2xl overflow-hidden border border-white/10 flex flex-col">
                                {/* Header with Technology Badge */}
                                <div className="p-6 pb-4">
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="px-3 py-1 text-xs font-semibold bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-300 rounded-full border border-purple-500/30">
                                            {blog.technology}
                                        </span>
                                        <div className="flex items-center gap-1 text-gray-400 text-sm">
                                            <Clock className="w-4 h-4" />
                                            <span>{blog.duration} min read</span>
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold font-display mb-3 group-hover:text-purple-400 transition-colors duration-300 line-clamp-2">
                                        {blog.title}
                                    </h3>

                                    <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 mb-4">
                                        {blog.desc}
                                    </p>
                                </div>

                                {/* Footer with Read More Link */}
                                <div className="mt-auto p-6 pt-0">
                                    <a
                                        href={blog.blogUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-sm font-semibold text-purple-400 hover:text-purple-300 transition-colors group/link"
                                    >
                                        Read Article
                                        <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                                    </a>
                                </div>

                                {/* External Link Icon */}
                                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <ExternalLink className="w-5 h-5 text-purple-400" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
