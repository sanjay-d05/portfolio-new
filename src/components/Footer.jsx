import { Github, Linkedin } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-black border-t border-white/10 py-12">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <h3 className="text-xl font-bold font-display mb-2">Sanjay D</h3>
                        <p className="text-gray-400 text-sm">
                            Building digital experiences with passion and precision.
                        </p>
                    </div>

                    <div className="flex items-center gap-6">
                        <a href="https://github.com/sanjay-d05" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
                            <Github className="w-5 h-5" />
                        </a>
                        <a href="https://www.linkedin.com/in/sanjayd05/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                            <Linkedin className="w-5 h-5" />
                        </a>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-white/5 text-center text-gray-500 text-sm">
                    © {new Date().getFullYear()} Sanjay D. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
