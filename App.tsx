
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import AIConsultant from './components/AIConsultant';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <AIConsultant />
        
        {/* Simple Newsletter Section */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="glass-card rounded-[2rem] p-12 text-center border-white/10 overflow-hidden relative">
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-600/20 rounded-full blur-[100px]"></div>
              <div className="relative z-10">
                <h2 className="text-4xl font-bold mb-6">Ready to scale your next idea?</h2>
                <p className="text-gray-400 max-w-lg mx-auto mb-10">
                  Join 10,000+ developers building faster and smarter with ViteNext AI.
                </p>
                <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-3">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="flex-1 bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-blue-500 transition-all"
                  />
                  <button className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg shadow-blue-500/20">
                    Get Started
                  </button>
                </div>
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
