import React from 'react';
import { motion } from 'framer-motion';
import { Play, Drop, CheckCircle } from 'phosphor-react';

const HeroSection = () => {
  return (
    <section className="w-full max-w-7xl mx-auto pt-6 px-6">
      {/* Main Hero Container with Image Background */}
      <div className="relative w-full h-[550px] rounded-[32px] overflow-hidden">
        {/* Background Image - Using the new custom image */}
        <div className="absolute inset-0 bg-[#e6ebdf]">
          <img 
            src="/hero-image.webp" 
            alt="Confident couple laughing"
            className="w-full h-full object-cover mix-blend-multiply"
          />
        </div>

        {/* Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent"></div>

        {/* Navigation Bar */}
        <nav className="absolute top-0 w-full px-8 py-6 flex justify-between items-center z-20">
          <div className="flex items-center gap-2">
            <img 
              src="/icon.webp" 
              alt="BreathSense" 
              className="w-8 h-8 rounded-full object-cover"
            />
            <span className="text-white font-bold text-xl tracking-tight">BreathSense</span>
          </div>
          
          <div className="hidden md:flex gap-8 text-white font-medium">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
              <span>Home</span>
            </div>
            <a href="#features" className="hover:text-white/80 transition-colors">Features</a>
            <a href="#testimonials" className="hover:text-white/80 transition-colors">Testimonials</a>
            <a href="#insight" className="hover:text-white/80 transition-colors">Insight</a>
          </div>

          <a
            href="https://apps.apple.com/my/app/breathsense-beat-bad-breath/id6758406211"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-slate-900 px-6 py-2.5 rounded-full font-bold shadow-sm hover:shadow-md transition-shadow inline-block"
          >
            Download App
          </a>
        </nav>

        {/* Hero Content */}
        <div className="absolute bottom-20 left-10 md:left-16 z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-semibold text-white leading-[1.1] tracking-tight"
          >
            Understand Your<br />
            Breath Health
          </motion.h1>
        </div>

        {/* Floating Stats Card - Right Side */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute bottom-16 right-8 md:right-16 bg-white p-6 rounded-[24px] shadow-2xl flex flex-col gap-3 min-w-[200px]"
        >
          <div className="text-[#D35400] text-3xl font-bold">
            700<span className="text-2xl">+</span>
          </div>
          <div className="text-sm font-medium text-slate-500">Active users</div>
          
          <div className="flex items-center gap-1.5 mt-1">
            <div className="flex items-center gap-1 px-2 py-1 bg-slate-100 rounded-full">
              <div className="w-1.5 h-1.5 bg-slate-400 rounded-full"></div>
              <span className="text-xs text-slate-500 font-medium">Private</span>
            </div>
            <div className="flex items-center gap-1 px-2 py-1 bg-slate-100 rounded-full">
              <div className="w-1.5 h-1.5 bg-slate-400 rounded-full"></div>
              <span className="text-xs text-slate-500 font-medium">Anonymous</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Stats and Info Section Below Hero */}
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 px-2">
        {/* Dark Dashboard Card */}
        <div className="bg-[#1C1C1C] rounded-[32px] p-8 text-white shadow-xl relative overflow-hidden">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-12 bg-[#8BC34A]/20 rounded-[16px] flex items-center justify-center text-[#8BC34A]">
              <Drop weight="fill" className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold text-xl">Daily Score</h3>
              <p className="text-white/50 text-sm mt-1">Today, 2:30 PM</p>
            </div>
          </div>

          <div className="flex justify-between items-end mb-8">
            <div className="text-6xl font-bold tracking-tight">
              92<span className="text-3xl text-white/50">/100</span>
            </div>
            
            {/* Visual Icons representing score/metrics */}
            <div className="flex flex-wrap gap-2 justify-end max-w-[120px]">
              {[1,2,3,4,5,6,7,8,9,10].map((i) => (
                <Drop key={i} weight="fill" className={`w-6 h-6 ${i <= 8 ? 'text-white' : 'text-white/20'}`} />
              ))}
            </div>
          </div>
          
          <div className="inline-flex items-center gap-2 bg-[#D35400] text-white px-4 py-2 rounded-full text-sm font-semibold mb-8 shadow-lg">
            Excellent progress <span className="text-base">👍</span>
          </div>
          
          <div className="pt-6 border-t border-white/10 text-sm">
            <span className="text-[#D35400] font-bold">97%</span> <span className="text-white/70">of users see improvement with personalized protocols.</span>
          </div>
        </div>

        {/* Right Content Area */}
        <div className="flex flex-col justify-center py-6 lg:pl-8">
          <h2 className="text-3xl md:text-[40px] font-medium text-slate-900 mb-8 leading-[1.2] max-w-xl">
            Track your breath health easily and reach your wellness goals with smart protocols and insights.
          </h2>
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-auto gap-8 sm:gap-4">
            <div className="flex flex-col gap-6">
              {/* Feature Icons Row */}
              <div className="flex gap-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-[#8BC34A] flex items-center justify-center text-white shadow-md">
                    <CheckCircle weight="fill" className="w-5 h-5" />
                  </div>
                ))}
              </div>
              
              <button className="flex items-center gap-3 bg-white border border-slate-200 shadow-sm px-5 py-2.5 rounded-full font-semibold hover:bg-slate-50 transition-colors w-max">
                <div className="w-7 h-7 rounded-full bg-[#D35400] flex items-center justify-center text-white shadow-sm">
                  <Play weight="fill" className="w-3 h-3 ml-0.5" />
                </div>
                How It Works
              </button>
            </div>
            
            <div className="text-right self-end sm:self-center">
              <div className="text-[64px] font-bold text-slate-900 leading-none tracking-tighter mb-2">
                92.5<span className="text-[#D35400] text-5xl">%</span>
              </div>
              <div className="text-sm text-slate-500 font-medium leading-snug">
                Users report <span className="text-slate-900 font-bold">improved</span><br />
                confidence & health
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
