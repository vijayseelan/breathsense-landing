import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChartLineUp, TrendUp, TrendDown, Drop, Fire, Clock, CalendarCheck, Trophy, Target, Heartbeat, Eye } from 'phosphor-react';

/* ── mock chart data ── */
const severityData = [6.2, 5.8, 5.1, 4.3, 3.9, 3.2, 2.8];
const adherenceData = [60, 72, 85, 88, 92, 95, 98];
const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const triggers = [
  { name: 'Coffee', pct: 78, color: 'bg-orange-500' },
  { name: 'Dairy', pct: 65, color: 'bg-yellow-500' },
  { name: 'Late Meals', pct: 52, color: 'bg-red-500' },
  { name: 'Stress', pct: 44, color: 'bg-purple-500' },
  { name: 'Alcohol', pct: 31, color: 'bg-blue-500' },
];

const symptoms = [
  { name: 'Dry Mouth', count: 18, trend: 'down' as const },
  { name: 'Post-Nasal Drip', count: 12, trend: 'down' as const },
  { name: 'Sour Taste', count: 8, trend: 'down' as const },
  { name: 'Tongue Coating', count: 5, trend: 'down' as const },
];

const widgetInsights = [
  { icon: <Drop weight="fill" className="w-5 h-5" />, label: 'Avg Water', value: '2.4L', sub: '/day', color: 'text-blue-500', bg: 'bg-blue-50' },
  { icon: <Clock weight="fill" className="w-5 h-5" />, label: 'Meal Gap', value: '3.2h', sub: 'avg', color: 'text-orange-500', bg: 'bg-orange-50' },
  { icon: <Heartbeat weight="fill" className="w-5 h-5" />, label: 'Breath Score', value: '8.4', sub: '/10', color: 'text-green-500', bg: 'bg-green-50' },
  { icon: <CalendarCheck weight="fill" className="w-5 h-5" />, label: 'Streak', value: '12', sub: 'days', color: 'text-purple-500', bg: 'bg-purple-50' },
];

const tabs = ['Overview', 'Protocol', 'Correlations'] as const;
type Tab = typeof tabs[number];

/* ── mini sparkline ── */
const Sparkline: React.FC<{ data: number[]; color: string; height?: number }> = ({ data, color, height = 48 }) => {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const w = 100 / (data.length - 1);
  const points = data.map((v, i) => `${i * w},${100 - ((v - min) / range) * 100}`).join(' ');
  return (
    <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full" style={{ height }}>
      <defs>
        <linearGradient id={`grad-${color}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.3" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <polyline fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" points={points} />
      <polygon fill={`url(#grad-${color})`} points={`0,100 ${points} 100,100`} />
    </svg>
  );
};

/* ── bar chart ── */
const BarChart: React.FC<{ data: number[]; labels: string[]; color: string; maxVal?: number }> = ({ data, labels, color, maxVal }) => {
  const mx = maxVal || Math.max(...data);
  return (
    <div className="flex items-end gap-2 h-32">
      {data.map((v, i) => (
        <div key={i} className="flex-1 flex flex-col items-center gap-1">
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: `${(v / mx) * 100}%` }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className="w-full rounded-t-md"
            style={{ backgroundColor: color, minHeight: 4 }}
          />
          <span className="text-[10px] text-slate-400 font-medium">{labels[i]}</span>
        </div>
      ))}
    </div>
  );
};

/* ── main component ── */
const InsightsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('Overview');

  return (
    <section id="insight" className="w-full max-w-7xl mx-auto px-6 py-24">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-14 gap-6">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center text-white">
              <Eye weight="fill" className="w-5 h-5" />
            </div>
            <span className="text-sm font-bold text-indigo-600 uppercase tracking-wider">Progress & Insights</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            Easily Monitor Your<br />
            <span className="text-slate-400">Breath Health</span>
          </h2>
        </div>
        <p className="text-lg text-slate-500 max-w-md leading-relaxed">
          Discover deep insights & trends, track protocol adherence, and uncover trigger-to-severity correlations — all in one beautiful dashboard.
        </p>
      </div>

      {/* Widget Insight Cards Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        {widgetInsights.map((w, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="bg-white rounded-[20px] p-5 border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className={`w-10 h-10 ${w.bg} ${w.color} rounded-xl flex items-center justify-center mb-3`}>
              {w.icon}
            </div>
            <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-1">{w.label}</p>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-bold text-slate-900">{w.value}</span>
              <span className="text-sm text-slate-400 font-medium">{w.sub}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
              activeTab === tab
                ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/30'
                : 'bg-white text-slate-500 border border-slate-200 hover:border-slate-300'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <AnimatePresence mode="wait">
        {activeTab === 'Overview' && (
          <motion.div key="overview" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.35 }}>
            <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-6">
              {/* Left — Severity Trend + Adherence */}
              <div className="space-y-6">
                {/* Severity Trend */}
                <div className="bg-white rounded-[28px] p-8 border border-slate-100 shadow-sm">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">Breath Severity Trend</h3>
                      <p className="text-sm text-slate-400 mt-0.5">7-day rolling average</p>
                    </div>
                    <div className="flex items-center gap-2 bg-green-50 text-green-600 px-3 py-1.5 rounded-full text-sm font-semibold">
                      <TrendDown weight="bold" className="w-4 h-4" />
                      -55%
                    </div>
                  </div>
                  <div className="flex items-end gap-6 mb-4">
                    <div>
                      <span className="text-4xl font-bold text-slate-900">2.8</span>
                      <span className="text-lg text-slate-400 ml-1">/10</span>
                    </div>
                    <p className="text-xs text-slate-400 pb-1">Down from 6.2 on Day 1</p>
                  </div>
                  <Sparkline data={severityData} color="#6366f1" height={80} />
                  <div className="flex justify-between mt-2">
                    {days.map((d) => (
                      <span key={d} className="text-[10px] text-slate-400 font-medium">{d}</span>
                    ))}
                  </div>
                </div>

                {/* Adherence */}
                <div className="bg-white rounded-[28px] p-8 border border-slate-100 shadow-sm">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">Protocol Adherence</h3>
                      <p className="text-sm text-slate-400 mt-0.5">Task completion rate</p>
                    </div>
                    <div className="flex items-center gap-2 bg-green-50 text-green-600 px-3 py-1.5 rounded-full text-sm font-semibold">
                      <TrendUp weight="bold" className="w-4 h-4" />
                      +38%
                    </div>
                  </div>
                  <BarChart data={adherenceData} labels={days} color="#6366f1" maxVal={100} />
                </div>
              </div>

              {/* Right — Top Triggers + Symptoms */}
              <div className="space-y-6">
                {/* Top Triggers */}
                <div className="bg-white rounded-[28px] p-8 border border-slate-100 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-1">Top Triggers</h3>
                  <p className="text-sm text-slate-400 mb-6">Correlation with severity spikes</p>
                  <div className="space-y-4">
                    {triggers.map((t, i) => (
                      <div key={i}>
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-sm font-semibold text-slate-700">{t.name}</span>
                          <span className="text-sm font-bold text-slate-900">{t.pct}%</span>
                        </div>
                        <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${t.pct}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: i * 0.1 }}
                            className={`h-full rounded-full ${t.color}`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Symptoms */}
                <div className="bg-white rounded-[28px] p-8 border border-slate-100 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-1">Symptom Patterns</h3>
                  <p className="text-sm text-slate-400 mb-6">Frequency this week</p>
                  <div className="space-y-3">
                    {symptoms.map((s, i) => (
                      <div key={i} className="flex items-center justify-between py-2 border-b border-slate-50 last:border-0">
                        <span className="text-sm font-medium text-slate-700">{s.name}</span>
                        <div className="flex items-center gap-3">
                          <span className="text-sm font-bold text-slate-900">{s.count}×</span>
                          <div className="flex items-center gap-1 text-green-500">
                            <TrendDown weight="bold" className="w-3.5 h-3.5" />
                            <span className="text-xs font-semibold">↓</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'Protocol' && (
          <motion.div key="protocol" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.35 }}>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-6">
              {/* Day-by-day breakdown */}
              <div className="bg-white rounded-[28px] p-8 border border-slate-100 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 mb-1">Day-by-Day Completion</h3>
                <p className="text-sm text-slate-400 mb-8">Oral Optimization Protocol</p>
                <div className="space-y-4">
                  {[
                    { day: 1, title: 'Foundation', pct: 100, tasks: '6/6' },
                    { day: 2, title: 'Foundation', pct: 100, tasks: '6/6' },
                    { day: 3, title: 'Optimized Brushing', pct: 92, tasks: '11/12' },
                    { day: 4, title: 'Optimized Brushing', pct: 85, tasks: '10/12' },
                    { day: 5, title: 'Interdental', pct: 88, tasks: '7/8' },
                    { day: 6, title: 'Interdental', pct: 0, tasks: '—' },
                    { day: 7, title: 'Complete Routine', pct: 0, tasks: '—' },
                  ].map((d, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center text-sm font-bold flex-shrink-0 ${
                        d.pct === 100 ? 'bg-green-500 text-white' : d.pct > 0 ? 'bg-indigo-500 text-white' : 'bg-slate-100 text-slate-400'
                      }`}>
                        {d.day}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-semibold text-slate-700 truncate">{d.title}</span>
                          <span className="text-xs font-bold text-slate-500 ml-2">{d.tasks}</span>
                        </div>
                        <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${d.pct}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.06 }}
                            className={`h-full rounded-full ${d.pct === 100 ? 'bg-green-500' : 'bg-indigo-500'}`}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right column — timing + metrics */}
              <div className="space-y-6">
                {/* Task completion by timing */}
                <div className="bg-white rounded-[28px] p-8 border border-slate-100 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-1">Completion by Timing</h3>
                  <p className="text-sm text-slate-400 mb-6">Morning / Meal / Evening tasks</p>
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { label: 'Morning', pct: 96, icon: '🌅' },
                      { label: 'Meal', pct: 82, icon: '🍽️' },
                      { label: 'Evening', pct: 91, icon: '🌙' },
                    ].map((t, i) => (
                      <div key={i} className="text-center">
                        <div className="relative w-20 h-20 mx-auto mb-3">
                          <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                            <circle cx="18" cy="18" r="15.9" fill="none" stroke="#f1f5f9" strokeWidth="3" />
                            <motion.circle
                              cx="18" cy="18" r="15.9" fill="none" stroke="#6366f1" strokeWidth="3"
                              strokeDasharray={`${t.pct} ${100 - t.pct}`}
                              strokeLinecap="round"
                              initial={{ strokeDasharray: '0 100' }}
                              whileInView={{ strokeDasharray: `${t.pct} ${100 - t.pct}` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, delay: i * 0.15 }}
                            />
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-lg">{t.icon}</span>
                          </div>
                        </div>
                        <p className="text-sm font-bold text-slate-900">{t.pct}%</p>
                        <p className="text-xs text-slate-400">{t.label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Streak & Stats */}
                <div className="bg-[#1C1C1C] rounded-[28px] p-8 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl"></div>
                  <div className="relative z-10">
                    <h3 className="text-lg font-bold mb-6">Your Stats</h3>
                    <div className="grid grid-cols-2 gap-6">
                      {[
                        { icon: <Fire weight="fill" className="w-5 h-5 text-orange-400" />, label: 'Current Streak', value: '12 days' },
                        { icon: <Trophy weight="fill" className="w-5 h-5 text-yellow-400" />, label: 'Best Streak', value: '12 days' },
                        { icon: <Target weight="fill" className="w-5 h-5 text-green-400" />, label: 'Adherence', value: '93%' },
                        { icon: <ChartLineUp weight="fill" className="w-5 h-5 text-indigo-400" />, label: 'Improvement', value: '-55%' },
                      ].map((s, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                            {s.icon}
                          </div>
                          <div>
                            <p className="text-xs text-white/50 font-medium">{s.label}</p>
                            <p className="text-lg font-bold">{s.value}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'Correlations' && (
          <motion.div key="correlations" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.35 }}>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-6">
              {/* Trigger-to-Severity */}
              <div className="bg-white rounded-[28px] p-8 border border-slate-100 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 mb-1">Trigger → Severity</h3>
                <p className="text-sm text-slate-400 mb-6">How triggers correlate with breath severity spikes</p>
                <div className="space-y-5">
                  {[
                    { trigger: 'Coffee + Dairy', severity: 8.2, delta: '+3.4', risk: 'High' },
                    { trigger: 'Late Meal (after 9pm)', severity: 7.1, delta: '+2.3', risk: 'High' },
                    { trigger: 'Alcohol', severity: 6.5, delta: '+1.7', risk: 'Medium' },
                    { trigger: 'Spicy Food', severity: 5.8, delta: '+1.0', risk: 'Medium' },
                    { trigger: 'Stress', severity: 5.2, delta: '+0.4', risk: 'Low' },
                  ].map((c, i) => (
                    <div key={i} className="flex items-center gap-4 p-3 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-colors">
                      <div className={`w-3 h-3 rounded-full flex-shrink-0 ${
                        c.risk === 'High' ? 'bg-red-500' : c.risk === 'Medium' ? 'bg-yellow-500' : 'bg-green-500'
                      }`} />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-slate-800 truncate">{c.trigger}</p>
                        <p className="text-xs text-slate-400">Avg severity: {c.severity}/10</p>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <span className="text-sm font-bold text-red-500">{c.delta}</span>
                        <p className="text-[10px] text-slate-400 uppercase font-bold">{c.risk}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right — Widget Insights + Pattern */}
              <div className="space-y-6">
                {/* Water vs Severity */}
                <div className="bg-white rounded-[28px] p-8 border border-slate-100 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-1">Water Intake vs Severity</h3>
                  <p className="text-sm text-slate-400 mb-6">Higher water intake correlates with lower severity</p>
                  <div className="flex gap-6">
                    <div className="flex-1">
                      <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-2">Water Intake</p>
                      <Sparkline data={[1.2, 1.8, 2.1, 2.4, 2.6, 2.8, 3.0]} color="#3b82f6" height={60} />
                      <div className="flex justify-between mt-1">
                        {days.map((d) => <span key={d} className="text-[9px] text-slate-300">{d}</span>)}
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-2">Severity</p>
                      <Sparkline data={severityData} color="#ef4444" height={60} />
                      <div className="flex justify-between mt-1">
                        {days.map((d) => <span key={d} className="text-[9px] text-slate-300">{d}</span>)}
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 p-3 bg-blue-50 rounded-xl">
                    <p className="text-xs text-blue-700 font-semibold">
                      💡 Insight: Days with 2.5L+ water intake show 42% lower severity scores on average.
                    </p>
                  </div>
                </div>

                {/* Food Journal Analysis */}
                <div className="bg-white rounded-[28px] p-8 border border-slate-100 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-1">Food Journal Analysis</h3>
                  <p className="text-sm text-slate-400 mb-6">Trigger food frequency & impact</p>
                  <div className="space-y-3">
                    {[
                      { food: '☕ Coffee', freq: '6/7 days', impact: 'High', color: 'text-red-500 bg-red-50' },
                      { food: '🧀 Dairy', freq: '4/7 days', impact: 'Medium', color: 'text-yellow-600 bg-yellow-50' },
                      { food: '🌶️ Spicy', freq: '2/7 days', impact: 'Medium', color: 'text-yellow-600 bg-yellow-50' },
                      { food: '🍷 Alcohol', freq: '1/7 days', impact: 'Low', color: 'text-green-600 bg-green-50' },
                    ].map((f, i) => (
                      <div key={i} className="flex items-center justify-between py-2.5 border-b border-slate-50 last:border-0">
                        <span className="text-sm font-medium text-slate-700">{f.food}</span>
                        <div className="flex items-center gap-3">
                          <span className="text-xs text-slate-400">{f.freq}</span>
                          <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${f.color}`}>{f.impact}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 p-3 bg-orange-50 rounded-xl">
                    <p className="text-xs text-orange-700 font-semibold">
                      💡 Insight: Reducing coffee to 1 cup/day could lower your average severity by 1.8 points.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default InsightsSection;
