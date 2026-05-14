import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
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
              About <span className="text-brand-red">GoWebpy</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed font-sans">
              Simplifying text conversion and online utilities for creators, developers, and professionals worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto glass p-8 md:p-16 rounded-[40px] space-y-12">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold flex items-center gap-3">
              <span className="w-8 h-1 bg-brand-red rounded-full"></span>
              Our Mission
            </h2>
            <p className="text-gray-400 leading-relaxed">
              At GoWebpy, our mission is to provide high-quality, lightweight, and accessible online tools that help people work smarter, not harder. We believe that professional utilities shouldn't be gated behind paywalls or complex sign-up processes.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Our <strong>free Convert Case Tool</strong> is designed to handle everyday formatting tasks with ease, ensuring that your text is always structured exactly how you need it for your professional or personal projects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-red p-8 rounded-3xl space-y-3">
              <h3 className="text-xl font-bold text-brand-red">Fast & Reliable</h3>
              <p className="text-sm text-gray-400">Experience lightning-fast text processing directly in your browser. No server delays, just instant results.</p>
            </div>
            <div className="glass-red p-8 rounded-3xl space-y-3">
              <h3 className="text-xl font-bold text-brand-red">Privacy First</h3>
              <p className="text-sm text-gray-400">Your data never leaves your device. Local processing ensures your sensitive information remains private.</p>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold flex items-center gap-3">
              <span className="w-8 h-1 bg-brand-red rounded-full"></span>
              Why We Exist
            </h2>
            <p className="text-gray-400 leading-relaxed">
              GoWebpy was founded by a team of digital enthusiasts who were tired of navigating through ad-cluttered and slow utility sites. We wanted to build a premium space with a sleek interface where efficiency meets design.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Every pixel of our platform is designed with the user in mind—from the subtle red gradients to the smooth transitions. We are committed to maintaining a clean, professional, and free environment for all our users.
            </p>
          </div>

          <div className="pt-10 flex justify-center">
            <Link 
              href="/"
              className="bg-brand-red hover:bg-red-600 text-white px-10 py-5 rounded-full font-bold text-xl transition-all shadow-2xl shadow-brand-red/30 flex items-center"
            >
              Try Our Free Tool <ChevronRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
