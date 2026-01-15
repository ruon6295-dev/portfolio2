
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-52 lg:pb-32 overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-purple-600/10 rounded-full blur-[150px]"></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold mb-10 text-blue-400 tracking-wide uppercase">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Next-Gen AI Platform
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 leading-[1.1]">
          Build at the speed <br />
          <span className="gradient-text">of thought.</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 mb-12 font-medium leading-relaxed">
          The instant dev experience of Vite meets the unparalleled intelligence of Gemini. 
          The modern toolkit for high-performance AI applications.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <a href="#ai-consultant" className="w-full sm:w-auto px-10 py-4 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-500 transition-all transform hover:-translate-y-1 shadow-xl shadow-blue-500/25 flex items-center justify-center gap-2">
            <i className="fa-solid fa-sparkles"></i> Try Assistant
          </a>
          <a href="#features" className="w-full sm:w-auto px-10 py-4 rounded-xl glass-card text-white font-bold hover:bg-white/10 transition-all border-white/5">
            Documentation
          </a>
        </div>

        <div className="mt-12 glass-card rounded-3xl p-2 max-w-5xl mx-auto border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] transform -rotate-1 transition-transform hover:rotate-0 duration-700">
          <div className="bg-[#1a1d23] rounded-[1.4rem] overflow-hidden">
             <div className="flex items-center gap-1.5 p-4 bg-[#0b0e14]/50 border-b border-white/5">
                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                <div className="ml-4 text-[10px] text-gray-500 font-mono">vitenext-dashboard.app</div>
             </div>
             <img 
               src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=2000" 
               alt="ViteNext Dashboard" 
               className="w-full h-auto grayscale-[0.3] hover:grayscale-0 transition-all duration-1000"
             />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
