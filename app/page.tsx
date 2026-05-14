import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Cube3D from '@/components/Cube3D';
import ConverterTool from '@/components/ConverterTool';
import FAQAccordion from '@/components/FAQAccordion';
import { Zap, Shield, Sparkles, Smartphone, MousePointer2, Lock, Globe, Gauge } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-brand-dark">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-red/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
            {/* Left Side: Content */}
            <div className="flex-1 text-center lg:text-left space-y-8 animate-in fade-in slide-in-from-left duration-1000">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-red/10 border border-brand-red/20 text-brand-red text-xs font-bold uppercase tracking-widest">
                <Sparkles className="w-3 h-3" />
                Premium Online Tool
              </div>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight leading-[0.95]">
                Free <span className="text-brand-red text-glow-red">Convert Case</span> Tool Online
              </h1>
              
              <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-sans">
                Instantly transform your text into uppercase, lowercase, title case, sentence case, and more. Fast, secure, and SEO-optimized for professionals.
              </p>
              
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <Link 
                  href="#tool"
                  className="bg-brand-red hover:bg-red-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-xl shadow-brand-red/20"
                >
                  Start Converting
                </Link>
                <Link 
                  href="/about"
                  className="glass px-8 py-4 rounded-full font-bold text-lg transition-all hover:bg-white/10"
                >
                  Learn More
                </Link>
              </div>
              
              <div className="grid grid-cols-3 gap-6 pt-8 max-w-md mx-auto lg:mx-0 border-t border-white/5">
                {[
                  { label: 'Instant', icon: <Zap className="w-4 h-4 text-brand-red" /> },
                  { label: 'Secure', icon: <Shield className="w-4 h-4 text-brand-red" /> },
                  { label: 'No Signup', icon: <Lock className="w-4 h-4 text-brand-red" /> },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-500">
                    {item.icon}
                    {item.label}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side: 3D Cube */}
            <div className="flex-1 animate-in fade-in zoom-in duration-1000 delay-200">
              <Cube3D />
            </div>
          </div>
        </div>
      </section>

      {/* Tool Section */}
      <div id="tool">
        <ConverterTool />
      </div>

      {/* Features Grid */}
      <section className="py-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-20">
            <h2 className="text-3xl md:text-5xl font-display font-bold">Premium <span className="text-brand-red">Features</span></h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Discover why GoWebpy is the preferred choice for text conversion tools globally.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Instant Conversion', desc: 'Real-time text transformation with a single click.', Icon: Zap },
              { title: 'Free to Use', desc: 'No subscriptions, no hidden fees, ever.', Icon: Globe },
              { title: 'SEO Optimized', desc: 'Perfectly formatted text for your SEO content.', Icon: Sparkles },
              { title: 'High Performance', desc: 'Lightning fast results even with large text.', Icon: Gauge },
              { title: 'Mobile Ready', desc: 'Optimized for all your devices and screens.', Icon: Smartphone },
              { title: 'Total Privacy', desc: 'Processing happens entirely in your browser.', Icon: Lock },
              { title: 'User Friendly', desc: 'Clean, modern, and intuitive interface.', Icon: MousePointer2 },
              { title: 'Secure App', desc: 'Safe and secure environment for your data.', Icon: Shield },
            ].map((feature, i) => (
              <div 
                key={i}
                className="glass p-8 rounded-3xl border border-white/5 hover:border-brand-red/30 transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-brand-red mb-6 group-hover:bg-brand-red group-hover:text-white transition-all duration-300">
                  <feature.Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-24 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight">
                Why use a <span className="text-brand-red">Free Convert Case Tool</span> online?
              </h2>
              <div className="space-y-6 text-gray-400 leading-relaxed">
                <p>
                  In the digital world, consistency is key. Whether you're a developer writing code, a content creator crafting social media posts, or a professional drafting a formal email, text formatting can be a tedious task. Manually fixing titles or retyping capitalized words takes away valuable time.
                </p>
                <p>
                  GoWebpy's <strong>free Convert Case Tool</strong> solves this by offering a set of powerful algorithms that handle these transformations instantly. From fixing "ACCIDENTAL CAPS LOCK" using Toggle Case to ensuring your blog titles look professional with Title Case, our tools provide a seamless workflow.
                </p>
                <p>
                  Our tool is designed for speed and SEO. Properly formatted text is not just for aesthetics—it's for readability and search engine optimization. Search engines prefer consistent capitalization and well-structured headings, making this tool a must-have for webmasters and SEO experts.
                </p>
              </div>
              <ul className="space-y-4">
                {[
                  'Sentence Case for natural readability',
                  'UPPERCASE for emphasis and headers',
                  'lowercase for clean data formatting',
                  'Title Case for professional headlines',
                  'Toggle Case for creative accents'
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 font-bold text-sm uppercase tracking-wider text-gray-300">
                    <span className="w-2 h-2 bg-brand-red rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="glass-red p-10 md:p-16 rounded-[40px] relative">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-red/20 rounded-full blur-[80px]"></div>
              <h3 className="text-3xl font-display font-bold mb-8">How It Works</h3>
              <div className="space-y-10">
                {[
                  { step: '01', title: 'Paste Your Text', desc: 'Copy the text you want to convert and paste it into our stylish textarea input.' },
                  { step: '02', title: 'Choose Your Case', desc: 'Select any of the 7 conversion modes provided to transform your text instantly.' },
                  { step: '03', title: 'Copy & Use', desc: 'One click on "Copy Text" and your formatted content is ready to be used anywhere.' },
                ].map((step, i) => (
                  <div key={i} className="flex gap-6">
                    <span className="text-4xl font-display font-black text-brand-red/20 group-hover:text-brand-red transition-all">{step.step}</span>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-[#050505]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-display font-bold">Frequently Asked <span className="text-brand-red">Questions</span></h2>
            <p className="text-gray-500">Everything you need to know about our Convert Case Tool.</p>
          </div>
          <FAQAccordion />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="glass-red p-12 md:p-20 rounded-[50px] text-center space-y-8 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-brand-red/5 to-transparent skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-1000"></div>
            <h2 className="text-4xl md:text-6xl font-display font-bold">Ready to <span className="text-brand-red text-glow-red">Transform</span> your text?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
              Experience the fastest and most secure online text conversion tool. No signup required—just paste and convert.
            </p>
            <div className="pt-4 flex flex-wrap justify-center gap-6 relative z-10">
              <Link 
                href="#tool"
                className="bg-brand-red hover:bg-red-600 text-white px-10 py-5 rounded-full font-bold text-xl transition-all shadow-2xl shadow-brand-red/30 hover:scale-105 active:scale-95"
              >
                Go To Tool
              </Link>
              <Link 
                href="/contact"
                className="glass px-10 py-5 rounded-full font-bold text-xl transition-all hover:bg-white/10"
              >
                Get Support
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
