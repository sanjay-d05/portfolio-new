'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Input, Textarea } from './ui/Input';
import Button from './ui/Button';
import { Send, CheckCircle2, AlertCircle, X } from 'lucide-react';

export default function ContactModal({ isOpen, onClose }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [status, setStatus] = useState('idle');
    const [errorMessage, setErrorMessage] = useState('');
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (data.success) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
                setShowSuccessModal(true);
                setTimeout(() => {
                    setStatus('idle');
                    onClose();
                    setShowSuccessModal(false);
                }, 2000);
            } else {
                setStatus('error');
                setErrorMessage(data.error || 'Something went wrong');
            }
        } catch (err) {
            setStatus('error');
            setErrorMessage('Failed to send message');
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                        className="relative bg-gradient-to-b from-gray-900 to-black border border-purple-500/30 rounded-2xl p-8 max-w-md w-full shadow-2xl shadow-purple-500/20 max-h-[90vh] overflow-y-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={onClose}
                            className="absolute cursor-pointer top-4 right-4 text-gray-400 hover:text-white transition-colors z-10"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <div className="mb-6">
                            <h2 className="text-3xl font-bold font-display mb-2">Let's Talk</h2>
                            <p className="text-gray-400">
                                Have a project in mind? I'd love to hear from you.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="modal-name" className="block text-sm font-medium text-gray-400 mb-2">
                                    Name
                                </label>
                                <Input
                                    id="modal-name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label htmlFor="modal-email" className="block text-sm font-medium text-gray-400 mb-2">
                                    Email
                                </label>
                                <Input
                                    id="modal-email"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="modal-message" className="block text-sm font-medium text-gray-400 mb-2">
                                    Message
                                </label>
                                <Textarea
                                    id="modal-message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    placeholder="Tell me about your project..."
                                />
                            </div>

                            <Button
                                type="submit"
                                className="w-full"
                                disabled={status === 'loading'}
                            >
                                {status === 'loading' ? (
                                    'Sending...'
                                ) : (
                                    <>
                                        Send Message <Send className="w-4 h-4 ml-2" />
                                    </>
                                )}
                            </Button>

                            {status === 'error' && (
                                <div className="flex items-center gap-2 text-red-400 text-sm justify-center">
                                    <AlertCircle className="w-4 h-4" />
                                    {errorMessage}
                                </div>
                            )}
                        </form>

                        {/* Success overlay */}
                        <AnimatePresence>
                            {showSuccessModal && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="absolute inset-0 bg-black/90 backdrop-blur-sm rounded-2xl flex items-center justify-center"
                                >
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ type: 'spring', damping: 15 }}
                                        className="text-center"
                                    >
                                        <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                                            <CheckCircle2 className="w-10 h-10 text-white" />
                                        </div>
                                        <h3 className="text-2xl font-bold font-display mb-2 text-white">
                                            Message Sent!
                                        </h3>
                                        <p className="text-gray-400">
                                            I'll get back to you shortly!
                                        </p>
                                    </motion.div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
