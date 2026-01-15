
import React, { useState, useRef, useEffect } from 'react';
import { geminiService } from '../services/geminiService';
import { ChatMessage } from '../types';

const AIConsultant: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Hey there! I am your ViteNext AI guide. Want to know how to deploy in 30 seconds or how we handle Hot Module Replacement?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const response = await geminiService.askAssistant(
      userMsg, 
      "ViteNext is a next-generation web application platform using React 19, Tailwind CSS, and Google Gemini 3.0. It focuses on developer experience, speed, and AI integration."
    );
    
    setMessages(prev => [...prev, { role: 'model', text: response }]);
    setIsLoading(false);
  };

  return (
    <section id="ai-consultant" className="py-24 bg-[#080a0f] relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4 tracking-tight">Interactive <span className="text-blue-500">Assistance</span></h2>
          <p className="text-gray-400 max-w-xl mx-auto">Skip the documentation. Ask our AI anything about building with ViteNext.</p>
        </div>

        <div className="max-w-5xl mx-auto glass-card rounded-[2rem] overflow-hidden border-white/10 shadow-3xl flex flex-col md:flex-row h-[600px]">
          {/* Chat Sidebar */}
          <div className="hidden md:flex md:w-1/3 bg-blue-600 p-10 flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-6 shadow-lg backdrop-blur-sm">
                <i className="fa-solid fa-wand-magic-sparkles text-white text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Smart Brain</h3>
              <p className="text-blue-100 text-sm leading-relaxed opacity-80">
                Experience real-time technical consulting. Our AI is trained on the latest Vite architecture and React 19 features.
              </p>
            </div>
            <div className="relative z-10 space-y-4">
               <div className="flex items-center gap-3 text-white/60 text-xs font-mono uppercase tracking-widest">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  System Online
               </div>
            </div>
          </div>
          
          {/* Main Chat Area */}
          <div className="flex-1 flex flex-col bg-[#0b0e14]/50 backdrop-blur-xl">
            <div ref={scrollRef} className="flex-1 p-8 overflow-y-auto space-y-6 scrollbar-hide">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-2 duration-300`}>
                  <div className={`max-w-[85%] p-5 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-blue-600 text-white rounded-tr-none shadow-lg shadow-blue-500/10' 
                      : 'bg-white/5 text-gray-200 rounded-tl-none border border-white/5'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white/5 p-5 rounded-2xl rounded-tl-none border border-white/5 flex gap-2">
                    <span className="w-2 h-2 bg-blue-500/50 rounded-full animate-bounce"></span>
                    <span className="w-2 h-2 bg-blue-500/50 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                    <span className="w-2 h-2 bg-blue-500/50 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                  </div>
                </div>
              )}
            </div>
            
            <div className="p-6 border-t border-white/5 bg-white/2">
              <form onSubmit={handleSubmit} className="relative group">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about Vite configurations or React tips..."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all pr-14 placeholder:text-gray-600"
                />
                <button 
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-blue-600 text-white rounded-xl hover:bg-blue-500 transition-all disabled:opacity-30 disabled:grayscale active:scale-95"
                >
                  <i className="fa-solid fa-arrow-up"></i>
                </button>
              </form>
              <p className="text-[10px] text-center mt-4 text-gray-600 uppercase tracking-tighter">
                Press Enter to send &bull; Powered by Gemini Flash
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIConsultant;
