import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'phosphor-react';

const FooterSection: React.FC = () => {
  return (
    <footer className="w-full max-w-7xl mx-auto px-6 pb-12">
      <div className="border-t border-slate-200 pt-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-slate-900 rounded-full"></div>
            <span className="font-bold text-lg text-slate-900 tracking-tight">BreathSense</span>
          </div>

          {/* Links */}
          <div className="flex gap-8 text-sm text-slate-500 font-medium">
            <a href="#features" className="hover:text-slate-900 transition-colors">Features</a>
            <a href="#protocols" className="hover:text-slate-900 transition-colors">Protocols</a>
            <a href="#testimonials" className="hover:text-slate-900 transition-colors">Testimonials</a>
            <Link to="/privacy" className="hover:text-slate-900 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-slate-900 transition-colors">Terms of Use</Link>
          </div>

          {/* Copyright */}
          <div className="flex items-center gap-1 text-sm text-slate-400">
            <span>Made with</span>
            <Heart weight="fill" className="w-4 h-4 text-red-400" />
            <span>for better breath</span>
          </div>
        </div>

        <div className="mt-8 text-center text-xs text-slate-400">
          <p>© 2025 BreathSense Tracker. All rights reserved. Health & Fitness.</p>
          <p className="mt-1">Based on peer-reviewed research. Not a substitute for professional medical advice.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
