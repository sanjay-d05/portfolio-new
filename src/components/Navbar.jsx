'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code2 } from 'lucide-react';
import { clsx } from 'clsx';
import ContactModal from './ContactModal';

const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Tech Stack', href: '#techstack' },
    { name: 'Projects', href: '#projects' },
    { name: 'Blog', href: '#blog' },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Track active section based on scroll position
    useEffect(() => {
        const sections = navItems.map(item => ({
            id: item.href.substring(1), // Remove the '#'
            element: document.getElementById(item.href.substring(1))
        }));

        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -80% 0px',
            threshold: 0
        };

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        sections.forEach(({ element }) => {
            if (element) observer.observe(element);
        });

        return () => {
            sections.forEach(({ element }) => {
                if (element) observer.unobserve(element);
            });
        };
    }, []);

    return (
        <>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={clsx(
                    'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
                    isScrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'
                )}
            >
                <div className="container mx-auto px-6 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="p-2 bg-blue-600 rounded-lg group-hover:rotate-12 transition-transform duration-300">
                            <Code2 className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-xl font-bold font-display tracking-tight group-hover:text-blue-400 transition-colors">
                            SANJAY D
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => {
                            const isActive = activeSection === item.href.substring(1);
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={clsx(
                                        "text-sm font-medium transition-colors relative group",
                                        isActive ? "text-blue-400" : "text-gray-300 hover:text-blue-400"
                                    )}
                                >
                                    {item.name}
                                    <span className={clsx(
                                        "absolute -bottom-1 left-0 h-0.5 bg-blue-600 transition-all duration-300",
                                        isActive ? "w-full" : "w-0 group-hover:w-full"
                                    )} />
                                </Link>
                            );
                        })}
                        <button
                            onClick={() => setIsContactModalOpen(true)}
                            className="px-5 py-2 cursor-pointer bg-white text-black rounded-full text-sm font-semibold hover:bg-blue-50 transition-colors"
                        >
                            Let's Talk
                        </button>
                    </nav>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden p-2 cursor-pointer text-gray-300 hover:text-white"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden bg-black/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
                        >
                            <nav className="flex flex-col p-6 gap-4">
                                {navItems.map((item) => {
                                    const isActive = activeSection === item.href.substring(1);
                                    return (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className={clsx(
                                                "text-lg font-medium transition-colors",
                                                isActive ? "text-blue-400" : "text-gray-300 hover:text-blue-400"
                                            )}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            {item.name}
                                        </Link>
                                    );
                                })}
                                <button
                                    onClick={() => {
                                        setIsContactModalOpen(true);
                                        setIsMobileMenuOpen(false);
                                    }}
                                    className="px-5 py-2 cursor-pointer bg-white text-black rounded-full text-sm font-semibold hover:bg-blue-50 transition-colors text-center"
                                >
                                    Let's Talk
                                </button>
                            </nav>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.header>

            <ContactModal
                isOpen={isContactModalOpen}
                onClose={() => setIsContactModalOpen(false)}
            />
        </>
    );
}
