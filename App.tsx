
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import AIConsultant from './components/AIConsultant';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0b0e14]">
      <Header />
      <main>
        <Hero />
        <Features />
        
        {/* Interactive AI Section */}
        <AIConsultant />
        
        {/* Newsletter / Call to Action */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-600/5 blur-[120px] pointer-events-none"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="glass-card rounded-[2.5rem] p-12 text-center border-white/10 shadow-2xl">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-600/20 mb-8 border border-blue-500/20">
                <i className="fa-solid fa-rocket text-2xl text-blue-400"></i>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Ready to ship faster?</h2>
              <p className="text-gray-400 max-w-lg mx-auto mb-10 text-lg leading-relaxed">
                Experience the raw speed of Vite combined with the creative power of Gemini AI. Join thousands of developers today.
              </p>
              <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
                <input 
                  type="email" 
                  placeholder="name@company.com" 
                  className="flex-1 bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm"
                />
                <button className="bg-white hover:bg-gray-100 text-black font-bold py-4 px-8 rounded-xl transition-all shadow-lg shadow-white/10 active:scale-95 whitespace-nowrap">
                  Get Started Free
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
