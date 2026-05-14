'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const faqs = [
  {
    question: "What is a free Convert Case Tool?",
    answer: "A free Convert Case Tool is an online utility that allows you to transform text into different letter cases like uppercase, lowercase, sentence case, and title case instantly. It helps writers, developers, and designers format their content quickly without manual editing."
  },
  {
    question: "How does a Convert Case Tool work?",
    answer: "Our tool uses JavaScript to process your text input. When you click a button (like 'UPPERCASE'), it applies a transformation algorithm to each character in the text and returns the formatted result in the same textarea."
  },
  {
    question: "Is GoWebpy's Convert Case Tool free?",
    answer: "Yes, 100% free! You can use GoWebpy's text conversion tools as many times as you like without any cost, hidden fees, or subscriptions."
  },
  {
    question: "Can I use it on mobile?",
    answer: "Absolutely! GoWebpy is fully responsive and optimized for mobile, tablet, and desktop devices. It works perfectly in any mobile browser."
  },
  {
    question: "Why use uppercase/lowercase conversion?",
    answer: "Text conversion is essential for fixing titles, cleaning up pasted content, preparing professional emails, or ensuring consistent styling in coding and documentation. It saves time and prevents repetitive typing."
  },
  {
    question: "Is my data secure on GoWebpy?",
    answer: "Yes. All text conversions happen locally in your browser using JavaScript. We do not store or transmit your text to our servers, ensuring total privacy."
  },
  {
    question: "What is 'Toggle Case' used for?",
    answer: "Toggle Case flips the casing of each character—uppercase becomes lowercase and vice-versa. It's often used for creative styling or correcting text typed with Caps Lock accidentally on."
  },
  {
    question: "Can I copy the results directly?",
    answer: "Yes, our tool includes a 'Copy Text' button that instantly saves the transformed text to your clipboard with a single click."
  }
];

const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div 
          key={index} 
          className="glass-red rounded-2xl overflow-hidden border border-brand-red/10 hover:border-brand-red/30 transition-all"
        >
          <button
            onClick={() => setActiveIndex(activeIndex === index ? null : index)}
            className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
          >
            <span className="text-base md:text-lg font-bold text-white pr-4">
              {faq.question}
            </span>
            <ChevronDown 
              className={`w-5 h-5 text-brand-red transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`} 
            />
          </button>
          <AnimatePresence>
            {activeIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6 text-gray-400 leading-relaxed text-sm md:text-base">
                  {faq.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
