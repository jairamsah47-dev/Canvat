import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen bg-brand-dark">
      <Header />
      
      {/* Header Spacer */}
      <div className="h-20 md:h-32"></div>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto glass p-8 md:p-16 rounded-[40px]">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-10 text-center">
            Legal <span className="text-brand-red">Disclaimer</span>
          </h1>
          
          <div className="space-y-10 text-gray-400 leading-relaxed font-sans">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white uppercase tracking-widest text-[14px]">General Information</h2>
              <p>
                The information provided by GoWebpy ("we," "us," or "our") on this website is for general informational purposes only. All information on the site is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the site.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white uppercase tracking-widest text-[14px]">Tool Performance</h2>
              <p>
                GoWebpy's <strong>Convert Case Tool</strong> and other utilities are provided "as is." While we strive for 100% accuracy in text transformations, we are not responsible for any data loss, formatting errors, or accidental modifications that may occur during the use of our tools.
              </p>
              <p>
                Users are encouraged to verify the output of transformed text before using it in critical, legal, or professional documents.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white uppercase tracking-widest text-[14px]">External Links</h2>
              <p>
                The Site may contain (or you may be sent through the Site) links to other websites or content belonging to or originating from third parties. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white uppercase tracking-widest text-[14px]">Professional Accuracy</h2>
              <p>
                Our tools do not provide professional, legal, or linguistic advice. The use or reliance of any information contained on this site is solely at your own risk.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white uppercase tracking-widest text-[14px]">Limitation of Liability</h2>
              <p>
                In no event shall GoWebpy, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
              </p>
            </div>

            <div className="pt-10 border-t border-white/5">
              <p className="text-sm italic">
                By using our website, you hereby consent to our disclaimer and agree to its terms.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
