import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quotes } from 'phosphor-react';

const testimonials = [
  {
    name: 'Sarah M.',
    role: '3 months of use',
    avatar: 'https://i.pravatar.cc/100?img=5',
    rating: 5,
    text: "I tried everything—mints, mouthwash, even expensive toothpaste. BreathSense helped me discover my issue was actually silent reflux. The 7-day protocol changed everything.",
    highlight: 'silent reflux',
  },
  {
    name: 'James K.',
    role: '6 weeks of use',
    avatar: 'https://i.pravatar.cc/100?img=12',
    rating: 5,
    text: "The privacy aspect sold me. Nobody wants to broadcast they're working on breath issues. Everything stays on my phone, and the AI coach feels like having a personal consultant.",
    highlight: 'privacy aspect',
  },
  {
    name: 'Maria L.',
    role: '2 months of use',
    avatar: 'https://i.pravatar.cc/100?img=9',
    rating: 5,
    text: "Within 5 days of the oral protocol, my morning breath improved dramatically. The tongue scraping habit alone made a huge difference. I wish I'd found this sooner.",
    highlight: '5 days',
  },
  {
    name: 'David R.',
    role: '4 months of use',
    avatar: 'https://i.pravatar.cc/100?img=15',
    rating: 5,
    text: "The assessment pinpointed sinus issues I didn't even know I had. The nasal irrigation protocol cleared things up and my confidence is back. Science-backed and it works.",
    highlight: 'sinus issues',
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="w-full max-w-7xl mx-auto px-6 py-24">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-14 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 bg-yellow-50 px-4 py-2 rounded-full mb-4">
            <Star weight="fill" className="w-4 h-4 text-yellow-500" />
            <span className="text-sm font-bold text-yellow-700">Testimonials</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            Real People,<br />
            <span className="text-slate-400">Real Results</span>
          </h2>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-right">
            <div className="text-5xl font-bold text-slate-900">92.5%</div>
            <p className="text-sm text-slate-500 mt-1">report improved<br />breath confidence</p>
          </div>
        </div>
      </div>

      {/* Testimonial Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-[28px] p-8 border border-slate-100 shadow-sm hover:shadow-lg transition-shadow group"
          >
            {/* Quote icon */}
            <Quotes weight="fill" className="w-8 h-8 text-slate-200 mb-4 group-hover:text-[#D35400]/30 transition-colors" />

            {/* Text */}
            <p className="text-slate-600 leading-relaxed mb-6 text-[15px]">
              "{testimonial.text}"
            </p>

            {/* Rating */}
            <div className="flex gap-1 mb-5">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <Star key={i} weight="fill" className="w-4 h-4 text-yellow-400" />
              ))}
            </div>

            {/* Author */}
            <div className="flex items-center gap-3 pt-5 border-t border-slate-100">
              <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-slate-100">
                <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">{testimonial.name}</h4>
                <p className="text-xs text-slate-400">{testimonial.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
