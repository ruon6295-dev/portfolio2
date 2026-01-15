
import React from 'react';
import { Feature } from '../types';

const FEATURES: Feature[] = [
  {
    id: '1',
    title: 'Instant Hot Module Replacement',
    description: 'Lightning fast development feedback loop that stays fast regardless of app size.',
    icon: 'fa-bolt',
    color: 'text-yellow-400'
  },
  {
    id: '2',
    title: 'Native ESM Support',
    description: 'Leverage the power of modern browsers with no bundle step during development.',
    icon: 'fa-box',
    color: 'text-blue-400'
  },
  {
    id: '3',
    title: 'AI Native Architecture',
    description: 'Built-in hooks and components for seamless Gemini API integration.',
    icon: 'fa-brain',
    color: 'text-purple-400'
  },
  {
    id: '4',
    title: 'Optimized Builds',
    description: 'Pre-configured Rollup build with multi-page and library mode support.',
    icon: 'fa-rocket',
    color: 'text-red-400'
  },
  {
    id: '5',
    title: 'Universal Deployment',
    description: 'One-click deploy to Vercel, Netlify, or any modern edge hosting provider.',
    icon: 'fa-cloud-arrow-up',
    color: 'text-green-400'
  },
  {
    id: '6',
    title: 'TypeScript Ready',
    description: 'First-class support for .ts and .tsx files with zero configuration required.',
    icon: 'fa-code',
    color: 'text-indigo-400'
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-[#080a0f]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">Why Choose <span className="text-blue-500">ViteNext</span>?</h2>
          <p className="text-gray-400 max-w-xl mx-auto">Everything you need to build production-grade web applications in record time.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature) => (
            <div key={feature.id} className="glass-card p-8 rounded-2xl hover:bg-white/10 transition-all group">
              <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${feature.color}`}>
                <i className={`fa-solid ${feature.icon} text-xl`}></i>
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
