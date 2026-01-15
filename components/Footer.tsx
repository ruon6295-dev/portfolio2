
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-white/5 bg-[#0b0e14]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center transform rotate-12">
              <i className="fa-solid fa-bolt text-white text-xs"></i>
            </div>
            <span className="text-lg font-bold tracking-tighter">VITE<span className="text-blue-500">NEXT</span></span>
          </div>
          
          <div className="flex gap-8 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">GitHub</a>
            <a href="#" className="hover:text-white transition-colors">Discord</a>
            <a href="#" className="hover:text-white transition-colors">Docs</a>
          </div>
          
          <div className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} ViteNext AI. Built with Gemini.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
