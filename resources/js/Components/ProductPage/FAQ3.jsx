import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function FAQ3() {
    const faqs = [
        {
            question: "What flex options are available for the Pro Series Driver X1?",
            answer: "The Pro Series Driver X1 is available in Regular, Stiff, and Extra Stiff flex options to suit different swing speeds and player preferences."
        },
        {
            question: "How does the adjustable weighting system work?",
            answer: "The driver features adjustable weights that can be positioned in different locations on the club head to optimize ball flight. This allows you to adjust for draw, fade, or neutral bias."
        },
        {
            question: "What is the warranty period?",
            answer: "The Pro Series Driver X1 comes with a 2-year manufacturer's warranty covering defects in materials and workmanship."
        },
        {
            question: "Can I customize the loft settings?",
            answer: "Yes, the driver features a 16-position hosel adjustment system that allows you to fine-tune the loft and face angle to your preferences."
        },
        {
            question: "Is this club suitable for high handicap players?",
            answer: "While designed for performance, the Pro Series Driver X1 incorporates forgiveness features that make it suitable for a wide range of skill levels."
        }
    ];

    return (
        <section className="py-16 bg-gray">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-2xl font-bold text-black mb-8 text-center">
                        Frequently Asked Questions
                    </h2>
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <FAQItem key={index} question={faq.question} answer={faq.answer} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div 
            className="bg-white rounded-lg overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
        >
            <button
                className="w-full px-6 py-4 flex items-center justify-between text-left"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="font-semibold text-black">{question}</span>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                >
                    <ChevronDown className="w-5 h-5 text-chaugreen" />
                </motion.div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                    >
                        <div className="px-6 pb-4 text-chaugreen">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};
