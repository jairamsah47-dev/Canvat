import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Mail, MessageSquare, Globe, ArrowRight } from 'lucide-react';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-brand-dark">
      <Header />
      
      {/* Header Spacer */}
      <div className="h-20 md:h-32"></div>

      {/* Hero Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight">
              Get in <span className="text-brand-red">Touch</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed font-sans">
              Have questions or feedback? We'd love to hear from you. Our team is here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Info Side */}
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-display font-bold uppercase tracking-widest text-brand-red">Contact Us</h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                Whether you have a technical question or want to suggest a new feature for our <strong>Convert Case Tool</strong>, we're always listening.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { icon: <Mail className="w-6 h-6" />, title: 'Email Us', info: 'support@gowebpy.com' },
                { icon: <MessageSquare className="w-6 h-6" />, title: 'Live Chat', info: 'Available 9am - 6pm' },
                { icon: <Globe className="w-6 h-6" />, title: 'Website', info: 'www.gowebpy.com' },
              ].map((item, i) => (
                <div key={i} className="glass p-8 rounded-3xl space-y-4 border border-white/5 hover:border-brand-red/30 transition-all">
                  <div className="w-12 h-12 bg-brand-red/10 rounded-2xl flex items-center justify-center text-brand-red">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <p className="text-gray-400 font-mono text-sm">{item.info}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Form Side */}
          <div className="glass-red p-8 md:p-12 rounded-[40px] border border-brand-red/10">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-brand-red/50 transition-all font-sans"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-brand-red/50 transition-all font-sans"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Subject</label>
                <input 
                  type="text" 
                  placeholder="How can we help?"
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-brand-red/50 transition-all font-sans"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Message</label>
                <textarea 
                  placeholder="Tell us more about your inquiry..."
                  rows={6}
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-brand-red/50 transition-all font-sans resize-none"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-brand-red hover:bg-red-600 text-white py-5 rounded-xl font-bold text-lg transition-all shadow-xl shadow-brand-red/20 flex items-center justify-center gap-2"
              >
                Send Message <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
