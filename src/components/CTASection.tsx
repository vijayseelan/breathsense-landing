import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, AppleLogo, GooglePlayLogo } from 'phosphor-react';

const CTASection: React.FC = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative bg-gradient-to-br from-[#D35400] to-[#E67E22] rounded-[40px] p-12 md:p-20 text-center overflow-hidden"
      >
        {/* Background decorations */}
        <div className="absolute top-0 left-0 w-80 h-80 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-black/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

        <div className="relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Stop Masking.<br />Start Solving.
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Find your root cause. Fix it for good. Download BreathSense and start your personalized 7-day protocol today—completely free.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <button className="flex items-center gap-3 bg-white text-slate-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-50 transition-colors shadow-xl shadow-black/20 group">
              <AppleLogo weight="fill" className="w-6 h-6" />
              Download for iOS
              <ArrowRight weight="bold" className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="flex items-center gap-3 bg-white/20 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/30 transition-colors border border-white/30 backdrop-blur-sm">
              <GooglePlayLogo weight="fill" className="w-6 h-6" />
              Get on Android
            </button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-white/60 text-sm">
            <span>✓ Free to download</span>
            <span>✓ No account needed</span>
            <span>✓ 100% private</span>
            <span>✓ Science-backed</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CTASection;
