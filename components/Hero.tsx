
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-0 -left-20 w-72 h-72 bg-blue-600/20 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 -right-20 w-96 h-96 bg-purple-600/10 rounded-full blur-[150px]"></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold mb-8 text-blue-400">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
          Now Powered by Gemini 3.0
        </div>
        
        <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight mb-8">
          The Next Generation of <br />
          <span className="gradient-text">Intelligent Web Apps</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg text-gray-400 mb-12">
          Harness the speed of Vite with the intelligence of Google Gemini. Build high-performance, AI-integrated user experiences that scale effortlessly.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#ai-consultant" className="w-full sm:w-auto px-8 py-4 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-500 transition-all transform hover:scale-105 shadow-lg shadow-blue-500/20">
            Talk to AI
          </a>
          <a href="#features" className="w-full sm:w-auto px-8 py-4 rounded-xl glass-card text-white font-bold hover:bg-white/10 transition-all">
            View Features
          </a>
        </div>

        <div className="mt-20 glass-card rounded-2xl p-4 max-w-4xl mx-auto border-white/5 shadow-2xl animate-float">
          <img 
            src="https://picsum.photos/seed/tech/1200/600" 
            alt="Dashboard Preview" 
            className="rounded-xl grayscale-[0.2] hover:grayscale-0 transition-all duration-500"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
