import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Warning, Heart, Briefcase, Users, Brain, CheckCircle, ArrowRight, AppleLogo, GooglePlayLogo } from 'phosphor-react';

export interface ProtocolData {
  id: string;
  emoji: string;
  title: string;
  subtitle: string;
  color: string;
  bgColor: string;
  lightBg: string;
  textColor: string;
  problemStatement: string;
  hiddenDangers: string[];
  impactAreas: { icon: React.ReactNode; title: string; description: string }[];
  alarmingStats: { value: string; label: string }[];
  whyItMatters: string;
  howWeHelp: string[];
  researchCitations: { title: string; source: string; year: string }[];
}

export const protocolsData: Record<string, ProtocolData> = {
  oral: {
    id: 'oral',
    emoji: '🦷',
    title: 'Oral-Related Halitosis',
    subtitle: 'The #1 cause of bad breath — and it\'s not what you think',
    color: 'bg-blue-500',
    bgColor: 'bg-blue-600',
    lightBg: 'bg-blue-50',
    textColor: 'text-blue-600',
    problemStatement: 'Your tongue is harboring a hidden ecosystem of bacteria that produces foul-smelling gases every second of every day. Brushing your teeth alone doesn\'t address this — 80-90% of oral bacteria live on your tongue, not your teeth.',
    hiddenDangers: [
      'Volatile Sulfur Compounds (VSCs) are constantly being produced by anaerobic bacteria',
      'Regular mouthwash often makes it worse by killing good bacteria and drying your mouth',
      'Gum disease affects 47% of adults over 30 and is a major contributor to chronic bad breath',
      'Most people can\'t smell their own breath due to olfactory fatigue',
    ],
    impactAreas: [
      { icon: <Heart weight="fill" className="w-6 h-6" />, title: 'Relationships', description: 'Partners may pull away from intimacy without telling you why' },
      { icon: <Briefcase weight="fill" className="w-6 h-6" />, title: 'Career', description: 'Colleagues and clients form negative impressions in close conversations' },
      { icon: <Users weight="fill" className="w-6 h-6" />, title: 'Social Life', description: 'Friends may avoid close contact, leading to isolation' },
      { icon: <Brain weight="fill" className="w-6 h-6" />, title: 'Mental Health', description: 'Constant anxiety and self-consciousness in social situations' },
    ],
    alarmingStats: [
      { value: '80-90%', label: 'of bad breath originates from the tongue' },
      { value: '47%', label: 'of adults over 30 have gum disease' },
      { value: '1 in 4', label: 'people suffer from chronic halitosis' },
    ],
    whyItMatters: 'Left untreated, oral-related halitosis doesn\'t just affect your breath — it\'s linked to cardiovascular disease, diabetes complications, and respiratory infections. The bacteria causing your bad breath are the same ones destroying your gums and potentially entering your bloodstream.',
    howWeHelp: [
      'Personalized 7-day protocol designed for YOUR specific oral health profile',
      'Daily habit tracking with smart reminders at optimal times',
      'AI coach that analyzes your progress and adjusts recommendations',
      'Science-backed techniques proven to reduce VSCs by up to 75%',
      'Private tracking — no one will ever know you\'re working on this',
    ],
    researchCitations: [
      { title: 'Tongue coating and tongue brushing: a literature review', source: 'International Journal of Dental Hygiene', year: '2019' },
      { title: 'The role of volatile sulfur compounds in periodontal disease', source: 'Journal of Periodontology', year: '2012' },
    ],
  },
  reflux: {
    id: 'reflux',
    emoji: '🔥',
    title: 'Silent Reflux (LPR)',
    subtitle: 'The hidden cause your doctor might be missing',
    color: 'bg-orange-500',
    bgColor: 'bg-orange-600',
    lightBg: 'bg-orange-50',
    textColor: 'text-orange-600',
    problemStatement: 'You might have acid reaching your throat every night without knowing it. Unlike typical heartburn, Laryngopharyngeal Reflux (LPR) happens silently — 57% of cases occur without any burning sensation. The acid creates a breeding ground for odor-causing bacteria.',
    hiddenDangers: [
      'Silent reflux damages your throat and vocal cords without obvious symptoms',
      'Late-night eating increases reflux episodes by 300%',
      'Many people are misdiagnosed or told "it\'s just stress"',
      'Over-the-counter antacids often mask the problem without solving it',
    ],
    impactAreas: [
      { icon: <Heart weight="fill" className="w-6 h-6" />, title: 'Relationships', description: 'Morning breath becomes unbearable, affecting intimacy' },
      { icon: <Briefcase weight="fill" className="w-6 h-6" />, title: 'Career', description: 'Constant throat clearing and hoarseness in meetings' },
      { icon: <Users weight="fill" className="w-6 h-6" />, title: 'Social Life', description: 'Sour/bitter taste makes you self-conscious about speaking' },
      { icon: <Brain weight="fill" className="w-6 h-6" />, title: 'Sleep Quality', description: 'Poor sleep from nighttime reflux affects everything' },
    ],
    alarmingStats: [
      { value: '57%', label: 'of LPR cases have NO heartburn' },
      { value: '300%', label: 'increase in reflux from late meals' },
      { value: '50M+', label: 'Americans affected by acid reflux' },
    ],
    whyItMatters: 'Chronic silent reflux doesn\'t just cause bad breath — it can lead to esophageal damage, chronic cough, asthma-like symptoms, and even increases the risk of throat cancer. The longer it goes unaddressed, the more damage accumulates.',
    howWeHelp: [
      'Identify YOUR specific reflux triggers with our smart food journal',
      'Meal timer ensures you stop eating at the right time before bed',
      'Sleep position guidance backed by clinical research',
      'Track symptom patterns to understand your unique triggers',
      'AI coach provides personalized lifestyle adjustments',
    ],
    researchCitations: [
      { title: 'Laryngopharyngeal reflux: diagnosis, treatment, and latest research', source: 'American Journal of Gastroenterology', year: '2018' },
      { title: 'Effect of bed head elevation on nocturnal reflux', source: 'Archives of Internal Medicine', year: '2006' },
    ],
  },
  sinus: {
    id: 'sinus',
    emoji: '💨',
    title: 'Sinus & Nasal Issues',
    subtitle: 'When the problem starts above your mouth',
    color: 'bg-teal-500',
    bgColor: 'bg-teal-600',
    lightBg: 'bg-teal-50',
    textColor: 'text-teal-600',
    problemStatement: 'Post-nasal drip is silently feeding bacteria in your throat 24/7. When mucus drips down the back of your throat, it provides a protein-rich feast for odor-causing bacteria. Worse, if you\'re a mouth breather, your oral bacteria count is 400% higher than normal.',
    hiddenDangers: [
      'Mouth breathing dries out your mouth, eliminating saliva\'s natural cleansing',
      'Chronic sinus issues create a constant bacterial breeding ground',
      'Allergies you\'ve "gotten used to" may be the root cause',
      'Nighttime mouth breathing causes severe morning breath',
    ],
    impactAreas: [
      { icon: <Heart weight="fill" className="w-6 h-6" />, title: 'Relationships', description: 'Morning breath is especially severe, affecting intimacy' },
      { icon: <Briefcase weight="fill" className="w-6 h-6" />, title: 'Career', description: 'Constant sniffling and throat clearing in meetings' },
      { icon: <Users weight="fill" className="w-6 h-6" />, title: 'Social Life', description: 'Nasal voice and congestion affect confidence' },
      { icon: <Brain weight="fill" className="w-6 h-6" />, title: 'Energy Levels', description: 'Poor sleep from congestion causes chronic fatigue' },
    ],
    alarmingStats: [
      { value: '400%', label: 'more bacteria from mouth breathing' },
      { value: '30M+', label: 'Americans have chronic sinusitis' },
      { value: '3-5%', label: 'of halitosis cases are sinus-related' },
    ],
    whyItMatters: 'Chronic mouth breathing doesn\'t just cause bad breath — it changes your facial structure over time, worsens sleep apnea, and keeps you in a constant state of low-grade oxygen deprivation. Your body was designed to breathe through your nose.',
    howWeHelp: [
      'Track mucus patterns to identify your worst trigger days',
      'Guided nasal breathing exercises to retrain your habits',
      'Environmental optimization tips for your bedroom',
      'Sleep quality tracking to measure improvement',
      'AI coach helps identify allergen patterns',
    ],
    researchCitations: [
      { title: 'Mouth breathing: adverse effects on facial growth and development', source: 'International Forum of Allergy & Rhinology', year: '2015' },
      { title: 'Nasal irrigation for chronic rhinosinusitis', source: 'Cochrane Database of Systematic Reviews', year: '2016' },
    ],
  },
  gut: {
    id: 'gut',
    emoji: '🦠',
    title: 'Gut & Systemic Issues',
    subtitle: 'When bad breath comes from deep within',
    color: 'bg-purple-500',
    bgColor: 'bg-purple-600',
    lightBg: 'bg-purple-50',
    textColor: 'text-purple-600',
    problemStatement: 'Your gut contains 100 trillion bacteria — and when they\'re out of balance, the gases they produce can travel through your bloodstream and exit through your lungs. No amount of brushing or mouthwash can fix breath that originates from your digestive system.',
    hiddenDangers: [
      'SIBO (Small Intestinal Bacterial Overgrowth) affects millions undiagnosed',
      'H. pylori infection is directly linked to halitosis',
      'Gut imbalances affect your immune system and overall health',
      'Processed foods and antibiotics destroy beneficial gut bacteria',
    ],
    impactAreas: [
      { icon: <Heart weight="fill" className="w-6 h-6" />, title: 'Relationships', description: 'Breath odor persists despite perfect oral hygiene' },
      { icon: <Briefcase weight="fill" className="w-6 h-6" />, title: 'Career', description: 'Frustration from trying everything without results' },
      { icon: <Users weight="fill" className="w-6 h-6" />, title: 'Social Life', description: 'Withdrawal from social situations due to embarrassment' },
      { icon: <Brain weight="fill" className="w-6 h-6" />, title: 'Mental Health', description: 'Depression and anxiety from chronic, unexplained halitosis' },
    ],
    alarmingStats: [
      { value: '100T', label: 'bacteria live in your gut' },
      { value: '1-2%', label: 'of halitosis is gut-related' },
      { value: '60%', label: 'of immune system is in your gut' },
    ],
    whyItMatters: 'Gut-related halitosis is often the most frustrating because traditional solutions don\'t work. But it\'s also a warning sign — your gut health affects everything from your mood to your immune system to your risk of chronic disease.',
    howWeHelp: [
      'Comprehensive assessment to identify if gut issues are YOUR cause',
      'Track digestive symptoms alongside breath severity',
      'Food journal with automatic trigger pattern detection',
      'Guidance on when to seek professional gut health testing',
      'AI coach helps connect the dots between diet and breath',
    ],
    researchCitations: [
      { title: 'The gut microbiome and halitosis', source: 'Journal of Breath Research', year: '2020' },
      { title: 'Small intestinal bacterial overgrowth and halitosis', source: 'Digestive Diseases and Sciences', year: '2018' },
    ],
  },
};

interface ProtocolModalProps {
  isOpen: boolean;
  onClose: () => void;
  protocolId: string | null;
}

const ProtocolModal: React.FC<ProtocolModalProps> = ({ isOpen, onClose, protocolId }) => {
  if (!protocolId || !protocolsData[protocolId]) return null;
  
  const protocol = protocolsData[protocolId];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed inset-4 md:inset-10 lg:inset-16 bg-white rounded-[32px] z-50 overflow-hidden shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className={`${protocol.bgColor} px-8 py-6 flex items-center justify-between flex-shrink-0`}>
              <div className="flex items-center gap-4">
                <span className="text-4xl">{protocol.emoji}</span>
                <div>
                  <h2 className="text-2xl font-bold text-white">{protocol.title}</h2>
                  <p className="text-white/70 text-sm mt-0.5">{protocol.subtitle}</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
              >
                <X weight="bold" className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-8">
              <div className="max-w-4xl mx-auto space-y-10">
                {/* Problem Statement */}
                <div className="bg-red-50 border border-red-100 rounded-[24px] p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Warning weight="fill" className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-red-900 mb-2">The Hidden Problem</h3>
                      <p className="text-red-800 leading-relaxed">{protocol.problemStatement}</p>
                    </div>
                  </div>
                </div>

                {/* Alarming Stats */}
                <div className="grid grid-cols-3 gap-4">
                  {protocol.alarmingStats.map((stat, i) => (
                    <div key={i} className={`${protocol.lightBg} rounded-[20px] p-5 text-center`}>
                      <div className={`text-3xl md:text-4xl font-bold ${protocol.textColor}`}>{stat.value}</div>
                      <div className="text-sm text-slate-600 mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Hidden Dangers */}
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-4">What You Might Not Know</h3>
                  <div className="space-y-3">
                    {protocol.hiddenDangers.map((danger, i) => (
                      <div key={i} className="flex items-start gap-3 bg-slate-50 rounded-xl p-4">
                        <Warning weight="fill" className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                        <p className="text-slate-700 text-sm">{danger}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Impact Areas */}
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-4">How It's Affecting Your Life</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {protocol.impactAreas.map((area, i) => (
                      <div key={i} className="flex items-start gap-4 bg-white border border-slate-200 rounded-[20px] p-5">
                        <div className={`w-12 h-12 ${protocol.lightBg} ${protocol.textColor} rounded-xl flex items-center justify-center flex-shrink-0`}>
                          {area.icon}
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-900">{area.title}</h4>
                          <p className="text-sm text-slate-500 mt-1">{area.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Why It Matters */}
                <div className="bg-slate-900 rounded-[24px] p-6">
                  <h3 className="text-lg font-bold text-white mb-3">Why This Can't Wait</h3>
                  <p className="text-white/70 leading-relaxed">{protocol.whyItMatters}</p>
                </div>

                {/* The Solution - BreathSense */}
                <div className={`${protocol.lightBg} rounded-[24px] p-8 border-2 border-dashed ${protocol.color.replace('bg-', 'border-')}`}>
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center gap-2 mb-3">
                      <img src="/icon.webp" alt="BreathSense" className="w-10 h-10 rounded-full" />
                      <span className="text-2xl font-bold text-slate-900">BreathSense</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">Your Science-Backed Solution</h3>
                    <p className="text-slate-500 mt-2">Finally understand YOUR root cause and fix it for good</p>
                  </div>

                  <div className="space-y-3 mb-8">
                    {protocol.howWeHelp.map((help, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle weight="fill" className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <p className="text-slate-700 text-sm">{help}</p>
                      </div>
                    ))}
                  </div>

                  {/* Download CTAs */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button className={`flex items-center gap-2 ${protocol.bgColor} text-white px-8 py-3.5 rounded-full font-bold hover:opacity-90 transition-opacity shadow-lg`}>
                      <AppleLogo weight="fill" className="w-5 h-5" />
                      Download for iOS
                      <ArrowRight weight="bold" className="w-4 h-4" />
                    </button>
                    <button className="flex items-center gap-2 bg-slate-900 text-white px-8 py-3.5 rounded-full font-bold hover:bg-slate-800 transition-colors">
                      <GooglePlayLogo weight="fill" className="w-5 h-5" />
                      Get on Android
                    </button>
                  </div>

                  <p className="text-center text-xs text-slate-400 mt-4">
                    Free to download • No account required • 100% private
                  </p>
                </div>

                {/* Research Citations */}
                <div className="border-t border-slate-200 pt-6">
                  <p className="text-xs text-slate-400 mb-3">Based on peer-reviewed research:</p>
                  <div className="space-y-1">
                    {protocol.researchCitations.map((citation, i) => (
                      <p key={i} className="text-xs text-slate-400">
                        • {citation.title} — <em>{citation.source}</em> ({citation.year})
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProtocolModal;
