import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Smiley, Fire, Wind, Bug, CheckCircle, Clock, Flask, ArrowRight } from 'phosphor-react';

interface Protocol {
  id: string;
  icon: React.ReactNode;
  emoji: string;
  title: string;
  focus: string;
  color: string;
  bgColor: string;
  phases: { days: string; title: string; description: string }[];
  outcomes: string[];
}

const protocols: Protocol[] = [
  {
    id: 'oral',
    icon: <Smiley weight="fill" className="w-6 h-6" />,
    emoji: '🦷',
    title: 'Oral Optimization',
    focus: 'Build a complete oral hygiene routine progressively',
    color: 'text-blue-600',
    bgColor: 'bg-blue-500',
    phases: [
      { days: 'Days 1-2', title: 'Foundation', description: 'Tongue scraping morning & evening, hydration baseline' },
      { days: 'Days 3-4', title: 'Optimized Brushing', description: '2-minute timed brushing with gumline focus' },
      { days: 'Days 5-6', title: 'Interdental Cleaning', description: 'Evening flossing, xylitol gum after meals' },
      { days: 'Day 7', title: 'Complete Routine', description: 'Alcohol-free mouthwash, breath self-assessment' },
    ],
    outcomes: ['50-75% reduction in tongue coating', 'Noticeable improvement in 3-5 days', 'Reduced gum bleeding'],
  },
  {
    id: 'reflux',
    icon: <Fire weight="fill" className="w-6 h-6" />,
    emoji: '🔥',
    title: 'Reflux Relief',
    focus: 'Progressive lifestyle changes for silent reflux (LPR)',
    color: 'text-orange-600',
    bgColor: 'bg-orange-500',
    phases: [
      { days: 'Days 1-2', title: 'Meal Timing', description: '3-hour meal cutoff before bed, meal timer tracking' },
      { days: 'Days 3-4', title: 'Sleep Position', description: 'Bed elevation 6-8 inches, left-side sleeping' },
      { days: 'Days 5-6', title: 'Trigger Management', description: 'Avoid common triggers, smaller portions, food journal' },
      { days: 'Day 7', title: 'Complete Protocol', description: 'Alkaline foods, pre-meal breathing, pattern review' },
    ],
    outcomes: ['Reduced throat clearing', 'Less morning sour taste', 'Improved sleep quality'],
  },
  {
    id: 'sinus',
    icon: <Wind weight="fill" className="w-6 h-6" />,
    emoji: '💨',
    title: 'Sinus Clear',
    focus: 'Progressive nasal hygiene for post-nasal drip',
    color: 'text-teal-600',
    bgColor: 'bg-teal-500',
    phases: [
      { days: 'Days 1-2', title: 'Nasal Irrigation', description: 'Morning & evening saline rinse, mucus tracking' },
      { days: 'Days 3-4', title: 'Environment', description: 'Bedroom humidifier, weekly bedding wash, steam inhalation' },
      { days: 'Days 5-6', title: 'Breathing', description: 'Nasal breathing exercises, mouth taping at night' },
      { days: 'Day 7', title: 'Complete Protocol', description: 'Air quality assessment, allergen reduction' },
    ],
    outcomes: ['Clearer nasal passages', 'Reduced post-nasal drip', 'Better sleep from nasal breathing'],
  },
  {
    id: 'gut',
    icon: <Bug weight="fill" className="w-6 h-6" />,
    emoji: '🦠',
    title: 'Gut Health',
    focus: 'Microbiome optimization and digestive health',
    color: 'text-purple-600',
    bgColor: 'bg-purple-500',
    phases: [
      { days: 'Days 1-2', title: 'Assessment', description: 'Identify gut-disrupting foods and current habits' },
      { days: 'Days 3-4', title: 'Probiotics', description: 'Progressive introduction of probiotics and prebiotics' },
      { days: 'Days 5-6', title: 'Elimination', description: 'Remove gut-disrupting foods, digestive enzyme support' },
      { days: 'Day 7', title: 'Integration', description: 'Gut-breath connection awareness, sustainable plan' },
    ],
    outcomes: ['Improved digestion', 'Reduced bloating', 'Better gut-breath balance'],
  },
];

const ProtocolsSection: React.FC = () => {
  const [activeProtocol, setActiveProtocol] = useState(0);
  const current = protocols[activeProtocol];

  return (
    <section id="protocols" className="w-full max-w-7xl mx-auto px-6 py-24">
      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-full mb-6">
          <Flask weight="fill" className="w-4 h-4 text-[#D35400]" />
          <span className="text-sm font-bold text-slate-700">Science-Backed Protocols</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
          7 Days to Better Breath
        </h2>
        <p className="text-lg text-slate-500 max-w-2xl mx-auto">
          Each protocol is designed with progressive habit-building phases. Complete 80%+ of daily tasks to advance.
        </p>
      </div>

      {/* Protocol Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {protocols.map((protocol, index) => (
          <button
            key={protocol.id}
            onClick={() => setActiveProtocol(index)}
            className={`flex items-center gap-2.5 px-5 py-3 rounded-full font-semibold transition-all duration-300 ${
              activeProtocol === index
                ? `${protocol.bgColor} text-white shadow-lg`
                : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:bg-slate-50'
            }`}
          >
            <span className="text-lg">{protocol.emoji}</span>
            <span className="text-sm">{protocol.title}</span>
          </button>
        ))}
      </div>

      {/* Active Protocol Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-10"
        >
          {/* Left - Protocol Info Card */}
          <div className="bg-[#1C1C1C] rounded-[32px] p-10 text-white relative overflow-hidden">
            <div className={`absolute top-0 right-0 w-64 h-64 ${current.bgColor} opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2`}></div>

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-14 h-14 ${current.bgColor} rounded-2xl flex items-center justify-center text-white`}>
                  {current.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{current.title}</h3>
                  <p className="text-white/50 text-sm mt-1">{current.focus}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 mb-8">
                <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full">
                  <Clock weight="bold" className="w-4 h-4 text-white/70" />
                  <span className="text-sm font-medium">7 Days</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full">
                  <CheckCircle weight="fill" className="w-4 h-4 text-green-400" />
                  <span className="text-sm font-medium">80%+ to advance</span>
                </div>
              </div>

              <h4 className="text-sm font-bold text-white/40 uppercase tracking-wider mb-4">Expected Outcomes</h4>
              <div className="space-y-3">
                {current.outcomes.map((outcome, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle weight="fill" className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-white/80 text-sm">{outcome}</span>
                  </div>
                ))}
              </div>

              <button className="mt-10 w-full bg-white text-slate-900 py-3.5 rounded-full font-bold hover:bg-slate-100 transition-colors flex items-center justify-center gap-2">
                Start This Protocol
                <ArrowRight weight="bold" className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right - Phases Timeline */}
          <div className="flex flex-col gap-4">
            {current.phases.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-[24px] p-7 border border-slate-100 shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="flex items-start gap-5">
                  {/* Day indicator */}
                  <div className="flex flex-col items-center">
                    <div className={`w-12 h-12 ${current.bgColor} rounded-2xl flex items-center justify-center text-white font-bold text-sm shadow-md`}>
                      {index + 1}
                    </div>
                    {index < current.phases.length - 1 && (
                      <div className="w-0.5 h-8 bg-slate-200 mt-2"></div>
                    )}
                  </div>

                  <div className="flex-1 pt-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{phase.days}</span>
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 mb-1">{phase.title}</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">{phase.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default ProtocolsSection;
