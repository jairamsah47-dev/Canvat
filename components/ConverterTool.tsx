'use client';

import React, { useState, useEffect } from 'react';
import { Copy, Trash2, CheckCircle2, Type, RefreshCw } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const ConverterTool = () => {
  const [inputText, setInputText] = useState('');
  const [stats, setStats] = useState({ words: 0, characters: 0 });
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const words = inputText.trim() ? inputText.trim().split(/\s+/).length : 0;
    const characters = inputText.length;
    setStats({ words, characters });
  }, [inputText]);

  const handleCopy = () => {
    if (!inputText) return;
    navigator.clipboard.writeText(inputText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleClear = () => {
    setInputText('');
  };

  const toUpperCase = () => setInputText(inputText.toUpperCase());
  const toLowerCase = () => setInputText(inputText.toLowerCase());
  
  const toSentenceCase = () => {
    const text = inputText.toLowerCase();
    const result = text.replace(/(^\s*\w|[.!?]\s*\w)/g, (c) => c.toUpperCase());
    setInputText(result);
  };

  const toTitleCase = () => {
    const result = inputText.toLowerCase().split(' ').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
    setInputText(result);
  };

  const toCapitalizedCase = () => {
    const result = inputText.split(' ').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    ).join(' ');
    setInputText(result);
  };

  const toToggleCase = () => {
    let result = '';
    for (let i = 0; i < inputText.length; i++) {
      const char = inputText[i];
      if (char === char.toUpperCase()) {
        result += char.toLowerCase();
      } else {
        result += char.toUpperCase();
      }
    }
    setInputText(result);
  };

  const toAlternatingCase = () => {
    let result = '';
    for (let i = 0; i < inputText.length; i++) {
        result += i % 2 === 0 ? inputText[i].toLowerCase() : inputText[i].toUpperCase();
    }
    setInputText(result);
  };

  const buttons = [
    { label: 'UPPERCASE', action: toUpperCase },
    { label: 'lowercase', action: toLowerCase },
    { label: 'Sentence case', action: toSentenceCase },
    { label: 'Title Case', action: toTitleCase },
    { label: 'Capitalized Case', action: toCapitalizedCase },
    { label: 'tOGGLE cASE', action: toToggleCase },
    { label: 'aLtErNaTiNg cAsE', action: toAlternatingCase },
  ];

  return (
    <section className="py-20 relative px-4" id="tool">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-red p-6 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden"
        >
          {/* Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Type className="text-brand-red" />
              Text Converter
            </h2>
            <div className="flex items-center gap-6 text-sm font-medium">
              <div className="flex flex-col items-center">
                <span className="text-brand-red text-lg">{stats.words}</span>
                <span className="text-gray-500 uppercase text-[10px] tracking-widest font-bold">Words</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-brand-red text-lg">{stats.characters}</span>
                <span className="text-gray-500 uppercase text-[10px] tracking-widest font-bold">Characters</span>
              </div>
            </div>
          </div>

          {/* Text Area */}
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Type or paste your text here..."
            className="w-full h-64 md:h-80 bg-brand-dark/50 border-2 border-brand-red/10 rounded-2xl p-6 text-lg text-white focus:outline-none focus:border-brand-red/50 transition-all resize-none placeholder:text-gray-600 font-sans"
          ></textarea>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8">
            {buttons.map((btn) => (
              <button
                key={btn.label}
                onClick={btn.action}
                className="py-3 px-4 bg-brand-dark hover:bg-brand-red border border-brand-red/20 text-xs md:text-sm font-bold uppercase tracking-wider rounded-xl transition-all hover:scale-[1.02] active:scale-95 glow-hover"
              >
                {btn.label}
              </button>
            ))}
          </div>

          {/* Footer Actions */}
          <div className="flex items-center justify-end gap-4 mt-8 pt-6 border-t border-brand-red/10">
            <button
              onClick={handleClear}
              className="flex items-center gap-2 px-6 py-3 text-gray-400 hover:text-white transition-all font-bold uppercase text-xs tracking-widest"
            >
              <Trash2 className="w-4 h-4" />
              Clear
            </button>
            <button
              onClick={handleCopy}
              className="flex items-center gap-2 px-8 py-3 bg-white text-black hover:bg-brand-red hover:text-white rounded-full font-bold transition-all uppercase text-xs tracking-widest shadow-xl shadow-white/5 active:scale-95"
            >
              {copied ? (
                <>
                  <CheckCircle2 className="w-4 h-4" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  Copy Text
                </>
              )}
            </button>
          </div>
        </motion.div>
      </div>

      {/* Copy Prompt Animation */}
      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] bg-brand-red text-white px-8 py-4 rounded-full font-bold shadow-2xl shadow-brand-red/40 flex items-center gap-3"
          >
            <CheckCircle2 className="w-5 h-5" />
            Copied to Clipboard!
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ConverterTool;
