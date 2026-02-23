import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Eye, CloudSlash, UserCircle, Trash, Lock } from 'phosphor-react';

const privacyFeatures = [
  {
    icon: <Lock weight="fill" className="w-6 h-6" />,
    title: '100% Local Storage',
    description: 'All data stored on your device using secure local storage. Nothing leaves your phone.',
  },
  {
    icon: <UserCircle weight="fill" className="w-6 h-6" />,
    title: 'No Accounts Required',
    description: 'No sign-up, no login, no email. Start using the app instantly.',
  },
  {
    icon: <CloudSlash weight="fill" className="w-6 h-6" />,
    title: 'No Cloud Sync',
    description: 'Your data never touches any server. Zero cloud storage, zero risk.',
  },
  {
    icon: <Eye weight="fill" className="w-6 h-6" />,
    title: 'No Analytics',
    description: 'No tracking, no data collection, no third-party analytics. Period.',
  },
  {
    icon: <Trash weight="fill" className="w-6 h-6" />,
    title: 'Full Data Control',
    description: 'Reset and clear all your data anytime with a single tap.',
  },
  {
    icon: <ShieldCheck weight="fill" className="w-6 h-6" />,
    title: 'Your Secret Is Safe',
    description: 'Nobody will ever know you\'re working on this—except you.',
  },
];

const PrivacySection: React.FC = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-24">
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-[40px] p-10 md:p-16 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}></div>

        <div className="relative z-10">
          {/* Header */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 px-4 py-2 rounded-full mb-6">
              <ShieldCheck weight="fill" className="w-4 h-4 text-green-400" />
              <span className="text-sm font-bold text-green-400">Privacy First</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Your Secret Stays Safe
            </h2>
            <p className="text-lg text-white/50 max-w-2xl mx-auto">
              Everything stays on YOUR device. No accounts, no cloud, no data sharing. Nobody will ever know you're working on this—except you, when you see the results.
            </p>
          </div>

          {/* Privacy Features Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } },
            }}
          >
            {privacyFeatures.map((feature, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
                className="bg-white/5 border border-white/10 rounded-[24px] p-6 hover:bg-white/10 transition-colors group"
              >
                <div className="w-12 h-12 bg-green-500/10 text-green-400 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Trust badge */}
          <div className="mt-12 text-center">
            <p className="text-white/30 text-sm">
              Based on research from the Journal of Clinical Periodontology, American Journal of Gastroenterology, and more.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacySection;
