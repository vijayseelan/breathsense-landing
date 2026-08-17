import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Smiley, Fire, Wind, Bug, ArrowRight, MagnifyingGlass } from 'phosphor-react';
import ProtocolModal from './ProtocolModal';

const rootCauses = [
  {
    id: 'oral',
    icon: <Smiley weight="fill" className="w-8 h-8" />,
    title: 'Oral',
    prevalence: '85-90%',
    description: 'Volatile Sulfur Compounds from tongue bacteria and poor oral hygiene',
    color: 'bg-blue-500',
    lightColor: 'bg-blue-50',
    textColor: 'text-blue-600',
    stat: '75% reduction in VSCs with proper tongue cleaning',
  },
  {
    id: 'reflux',
    icon: <Fire weight="fill" className="w-8 h-8" />,
    title: 'Reflux / Digestive',
    prevalence: '5-8%',
    description: 'Silent reflux (LPR) sends stomach acids to the throat without heartburn',
    color: 'bg-orange-500',
    lightColor: 'bg-orange-50',
    textColor: 'text-orange-600',
    stat: '57% of LPR cases occur without heartburn',
  },
  {
    id: 'sinus',
    icon: <Wind weight="fill" className="w-8 h-8" />,
    title: 'Sinus / Nasal',
    prevalence: '3-5%',
    description: 'Post-nasal drip feeds bacteria while mouth breathing dries the mouth',
    color: 'bg-teal-500',
    lightColor: 'bg-teal-50',
    textColor: 'text-teal-600',
    stat: 'Mouth breathing increases bacteria by 400%',
  },
  {
    id: 'gut',
    icon: <Bug weight="fill" className="w-8 h-8" />,
    title: 'Gut / Systemic',
    prevalence: '1-2%',
    description: 'Gut microbiome imbalances and metabolic conditions affect breath',
    color: 'bg-purple-500',
    lightColor: 'bg-purple-50',
    textColor: 'text-purple-600',
    stat: 'Gut-breath connection often overlooked',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const RootCauseSection: React.FC = () => {
  const [selectedProtocol, setSelectedProtocol] = useState<string | null>(null);

  return (
    <section id="features" className="w-full max-w-7xl mx-auto px-6 py-24">
      {/* Section Header */}
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-6">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-[#D35400] flex items-center justify-center text-white">
              <MagnifyingGlass weight="bold" className="w-5 h-5" />
            </div>
            <span className="text-sm font-bold text-[#D35400] uppercase tracking-wider">Root Cause Analysis</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            Mints only mask it.<br />
            <span className="text-slate-400">We find the real cause.</span>
          </h2>
        </div>
        <p className="text-lg text-slate-500 max-w-md leading-relaxed">
          Our comprehensive assessment identifies whether your breath issues stem from oral, digestive, sinus, or gut-related causes.
        </p>
      </div>

      {/* Root Cause Cards */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {rootCauses.map((cause, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            onClick={() => setSelectedProtocol(cause.id)}
            className="group relative bg-white rounded-[24px] p-7 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 cursor-pointer overflow-hidden"
          >
            {/* Hover gradient overlay */}
            <div className={`absolute inset-0 ${cause.lightColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[24px]`}></div>

            <div className="relative z-10">
              {/* Icon */}
              <div className={`w-14 h-14 ${cause.lightColor} ${cause.textColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {cause.icon}
              </div>

              {/* Prevalence Badge */}
              <div className="inline-flex items-center gap-1.5 bg-slate-100 group-hover:bg-white px-3 py-1 rounded-full mb-4 transition-colors">
                <span className="text-xs font-bold text-slate-900">{cause.prevalence}</span>
                <span className="text-xs text-slate-500">of cases</span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-slate-900 mb-3">{cause.title}</h3>

              {/* Description */}
              <p className="text-sm text-slate-500 leading-relaxed mb-6">{cause.description}</p>

              {/* Stat */}
              <div className="pt-4 border-t border-slate-100 group-hover:border-slate-200 transition-colors">
                <p className="text-xs font-semibold text-slate-700">{cause.stat}</p>
              </div>

              {/* Arrow */}
              <div className="mt-4 flex items-center gap-1 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className={cause.textColor}>Learn more</span>
                <ArrowRight weight="bold" className={`w-4 h-4 ${cause.textColor}`} />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Problem Statement Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mt-16 bg-[#1C1C1C] rounded-[32px] p-10 md:p-14 text-white relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#D35400]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="relative z-10 max-w-3xl">
          <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
            85% of bad breath comes from the mouth. But the other 15%?
          </h3>
          <p className="text-lg text-white/70 leading-relaxed mb-8">
            It could be silent reflux, sinus issues, or gut health. Without knowing YOUR cause, you're just guessing. BreathSense uses a comprehensive assessment to identify your specific root cause.
          </p>
          <a
            href="https://apps.apple.com/my/app/breathsense-beat-bad-breath/id6758406211"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#D35400] text-white px-8 py-3.5 rounded-full font-bold hover:bg-[#E67E22] transition-colors shadow-lg shadow-[#D35400]/30"
          >
            Start Your Assessment
          </a>
        </div>
      </motion.div>

      {/* Protocol Detail Modal */}
      <ProtocolModal
        isOpen={selectedProtocol !== null}
        onClose={() => setSelectedProtocol(null)}
        protocolId={selectedProtocol}
      />
    </section>
  );
};

export default RootCauseSection;
