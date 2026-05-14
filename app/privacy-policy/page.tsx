import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-brand-dark">
      <Header />
      
      {/* Header Spacer */}
      <div className="h-20 md:h-32"></div>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto glass p-8 md:p-16 rounded-[40px]">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-10 text-center">
            Privacy <span className="text-brand-red">Policy</span>
          </h1>
          
          <div className="space-y-10 text-gray-400 leading-relaxed font-sans">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white uppercase tracking-widest text-[14px]">Introduction</h2>
              <p>
                Welcome to GoWebpy. Your privacy is important to us. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website and use our <strong>free Convert Case Tool</strong>.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white uppercase tracking-widest text-[14px]">Information Collection</h2>
              <p>
                As a privacy-focused utility provider, GoWebpy does not collect personal data from users of our online tools. The text you enter into our Convert Case Tool is processed locally within your web browser using client-side JavaScript. 
              </p>
              <p>
                We do not transmit, store, or view the content of the text you convert.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white uppercase tracking-widest text-[14px]">Log Data</h2>
              <p>
                Like most website operators, we collect information that your browser sends whenever you visit our site ("Log Data"). This Log Data may include information such as your computer's Internet Protocol ("IP") address, browser type, browser version, the pages of our site that you visit, the time and date of your visit, and other statistics.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white uppercase tracking-widest text-[14px]">Cookies</h2>
              <p>
                Cookies are files with a small amount of data, which may include an anonymous unique identifier. Cookies are sent to your browser from a web site and stored on your computer's hard drive. We use cookies purely for functional purposes to improve the user experience of our platform.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white uppercase tracking-widest text-[14px]">Third-Party Services</h2>
              <p>
                We may use third-party tools such as Google Analytics to monitor and analyze the use of our service. These third parties have their own privacy policies addressing how they use such information.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white uppercase tracking-widest text-[14px]">Changes to This Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
              </p>
            </div>

            <div className="pt-10 border-t border-white/5">
              <p className="text-sm italic">
                Last updated: May 14, 2026. If you have any questions about this Privacy Policy, please contact us at support@gowebpy.com.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
