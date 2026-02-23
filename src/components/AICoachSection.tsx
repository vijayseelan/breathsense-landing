import React from 'react';
import { motion } from 'framer-motion';
import { Lightning, ChatTeardropDots, Brain, ChartLineUp, ShieldCheck } from 'phosphor-react';

const suggestedQuestions = [
  "What foods should I avoid for better breath?",
  "How can I improve my morning breath?",
  "Why does stress affect my breath?",
  "What's the connection between digestion and breath?",
];

const AICoachSection: React.FC = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left - Content */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center text-white">
              <Lightning weight="fill" className="w-5 h-5" />
            </div>
            <span className="text-sm font-bold text-yellow-600 uppercase tracking-wider">AI-Powered</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">
            Your Personal<br />
            <span className="text-[#D35400]">Breath Coach</span>
          </h2>

          <p className="text-lg text-slate-500 leading-relaxed mb-10 max-w-lg">
            Powered by GPT-4o, your AI coach analyzes your tracking data, identifies patterns in triggers and symptoms, and provides personalized guidance for lasting results.
          </p>

          {/* Capabilities */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {[
              { icon: <ChatTeardropDots weight="fill" className="w-5 h-5" />, title: 'Personalized Answers', desc: 'Breath health questions answered with your data' },
              { icon: <ChartLineUp weight="fill" className="w-5 h-5" />, title: 'Pattern Detection', desc: 'Identifies trigger and symptom patterns' },
              { icon: <Brain weight="fill" className="w-5 h-5" />, title: 'Smart Insights', desc: 'Protocol-specific tips and motivation' },
              { icon: <ShieldCheck weight="fill" className="w-5 h-5" />, title: 'Topic Focused', desc: 'Strictly focused on breath health only' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
                <div className="w-10 h-10 bg-yellow-50 text-yellow-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{item.title}</h4>
                  <p className="text-xs text-slate-500 mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right - Chat Mockup */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="bg-[#1C1C1C] rounded-[32px] p-6 shadow-2xl relative overflow-hidden">
            {/* Glow effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl"></div>

            {/* Chat Header */}
            <div className="relative z-10 flex items-center gap-3 pb-5 border-b border-white/10 mb-5">
              <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                <Lightning weight="fill" className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="text-white font-bold">BreathSense AI</h4>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-xs text-white/50">Online</span>
                </div>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="relative z-10 space-y-4 mb-6">
              {/* User message */}
              <div className="flex justify-end">
                <div className="bg-[#D35400] text-white px-4 py-3 rounded-2xl rounded-br-md max-w-[80%] text-sm">
                  Why does my breath smell worse in the morning?
                </div>
              </div>

              {/* AI response */}
              <div className="flex justify-start">
                <div className="bg-white/10 text-white px-4 py-3 rounded-2xl rounded-bl-md max-w-[85%] text-sm leading-relaxed">
                  <p className="mb-2">Great question! Morning breath happens because saliva production drops significantly during sleep. Saliva is your mouth's natural cleanser — it washes away bacteria and food particles.</p>
                  <p className="text-white/60">Based on your data, I'd recommend tongue scraping right when you wake up. This alone can reduce VSCs by up to 75%.</p>
                </div>
              </div>

              {/* Data card */}
              <div className="flex justify-start">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-4 max-w-[85%]">
                  <div className="text-xs text-white/40 font-bold uppercase tracking-wider mb-3">Your Protocol Progress</div>
                  <div className="flex items-center gap-4">
                    <div>
                      <div className="text-2xl font-bold text-white">Day 3</div>
                      <div className="text-xs text-white/50">of 7</div>
                    </div>
                    <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full" style={{ width: '43%' }}></div>
                    </div>
                    <div className="text-sm font-bold text-yellow-400">43%</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Suggested Questions */}
            <div className="relative z-10 flex flex-wrap gap-2 mb-5">
              {suggestedQuestions.slice(0, 2).map((q, i) => (
                <div key={i} className="bg-white/5 border border-white/10 text-white/70 px-3 py-2 rounded-full text-xs hover:bg-white/10 cursor-pointer transition-colors">
                  {q}
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="relative z-10 flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-4 py-3">
              <input
                type="text"
                placeholder="Ask about your breath health..."
                className="flex-1 bg-transparent text-white text-sm placeholder:text-white/30 outline-none"
                readOnly
              />
              <div className="w-8 h-8 bg-[#D35400] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#E67E22] transition-colors">
                <Lightning weight="fill" className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AICoachSection;
