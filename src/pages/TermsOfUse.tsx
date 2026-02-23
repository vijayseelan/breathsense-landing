import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'phosphor-react';

const TermsOfUse: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-6 py-6 flex items-center gap-4">
          <Link to="/" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center hover:bg-slate-200 transition-colors">
            <ArrowLeft weight="bold" className="w-5 h-5 text-slate-700" />
          </Link>
          <div>
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 bg-slate-900 rounded-full"></div>
              <span className="font-bold text-lg text-slate-900">BreathSense</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Terms of Use</h1>
        <p className="text-slate-500 mb-12">Last updated: February 2025</p>

        <div className="prose prose-slate max-w-none space-y-10">
          {/* Acceptance */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-slate-600 leading-relaxed">
              By downloading, installing, or using the BreathSense Tracker application ("App"), you agree to be bound by these Terms of Use ("Terms"). If you do not agree to these Terms, do not use the App. These Terms constitute a legally binding agreement between you and BreathSense ("we," "us," or "our").
            </p>
          </section>

          {/* Description */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Description of Service</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              BreathSense Tracker is a health and wellness application that helps users identify potential root causes of halitosis (bad breath) and provides science-backed 7-day protocols for improvement. The App offers:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li><strong>Root Cause Assessment</strong> — A comprehensive questionnaire that scores users across four categories: oral, reflux/digestive, sinus/nasal, and gut/systemic</li>
              <li><strong>7-Day Protocols</strong> — Personalized, progressive habit-building programs tailored to each identified root cause (Oral Optimization, Reflux Relief, Sinus Clear, Gut Health)</li>
              <li><strong>Daily Tracking & Widgets</strong> — Tools for logging breath severity, symptoms, triggers, water intake, meal times, food journal entries, and mucus tracking</li>
              <li><strong>AI Breath Coach</strong> — An AI-powered assistant that provides personalized breath health guidance, analyzes tracking data, and offers protocol-specific tips</li>
              <li><strong>Progress & Insights</strong> — Trend dashboards, protocol adherence tracking, trigger-to-severity correlations, and streak monitoring</li>
              <li><strong>Smart Notifications</strong> — Configurable reminders for daily check-ins, protocol tasks, and re-engagement nudges</li>
            </ul>
          </section>

          {/* Medical Disclaimer */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Medical Disclaimer</h2>
            <div className="bg-red-50 border border-red-100 rounded-2xl p-6 mb-4">
              <p className="text-red-800 font-semibold mb-2">Important Notice</p>
              <p className="text-red-700 text-sm leading-relaxed">
                BreathSense is NOT a medical device and does NOT provide medical advice, diagnosis, or treatment.
              </p>
            </div>
            <p className="text-slate-600 leading-relaxed mb-4">
              The App is intended for informational and educational purposes only. The content, protocols, and AI Coach responses are based on peer-reviewed research from sources including the Journal of Clinical Periodontology and the American Journal of Gastroenterology, but they are not a substitute for professional medical advice.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>Always consult a qualified healthcare professional (dentist, doctor, or specialist) for persistent breath concerns</li>
              <li>Do not disregard professional medical advice or delay seeking it because of information provided by the App</li>
              <li>The root cause assessment provides general guidance based on self-reported symptoms and is not a clinical diagnosis</li>
              <li>Protocol recommendations (e.g., tongue scraping, nasal irrigation, bed elevation) are general wellness suggestions and may not be appropriate for all individuals</li>
              <li>If you experience severe symptoms such as chronic heartburn, bleeding gums, persistent sinus infections, or unexplained weight loss, seek immediate medical attention</li>
            </ul>
          </section>

          {/* Eligibility */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Eligibility</h2>
            <p className="text-slate-600 leading-relaxed">
              You must be at least 13 years of age to use the App. If you are under 18, you should review these Terms with a parent or guardian. By using the App, you represent that you meet these age requirements.
            </p>
          </section>

          {/* User Responsibilities */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. User Responsibilities</h2>
            <p className="text-slate-600 leading-relaxed mb-4">When using the App, you agree to:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>Provide honest and accurate information during the onboarding assessment and daily check-ins for the most relevant protocol recommendations</li>
              <li>Use the App for its intended purpose of personal breath health tracking and improvement</li>
              <li>Not attempt to reverse-engineer, decompile, or modify the App</li>
              <li>Not use the AI Coach for purposes unrelated to breath health (the AI is designed to decline off-topic requests)</li>
              <li>Understand that protocol adherence requires completing 80%+ of daily tasks to advance, and that progress is tracked on a per-calendar-day basis</li>
              <li>Take responsibility for the security of your device, as all data is stored locally</li>
            </ul>
          </section>

          {/* Data and Privacy */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Data Storage and Privacy</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              BreathSense operates on a <strong>privacy-first architecture</strong>:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>All user data (assessment results, daily logs, protocol progress, widget data, preferences) is stored <strong>100% locally</strong> on your device using AsyncStorage</li>
              <li>No user accounts are required — no sign-up, no login, no email collection</li>
              <li>No data is synced to cloud servers or external databases</li>
              <li>No analytics, tracking, or advertising tools are used within the App</li>
              <li>You may clear all data at any time from within the App's settings</li>
              <li>Uninstalling the App will permanently delete all locally stored data, which cannot be recovered</li>
            </ul>
            <p className="text-slate-600 leading-relaxed mt-4">
              For the AI Coach feature, anonymized conversation data is sent to OpenAI's API for processing. No personally identifiable information is included. Please refer to our <Link to="/privacy" className="text-[#D35400] underline">Privacy Policy</Link> for full details.
            </p>
          </section>

          {/* AI Coach Terms */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. AI Coach Terms</h2>
            <p className="text-slate-600 leading-relaxed mb-4">The AI Breath Coach is powered by OpenAI's GPT-4o-mini model. By using the AI Coach, you acknowledge that:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>AI-generated responses are for informational purposes only and do not constitute medical advice</li>
              <li>The AI Coach analyzes your tracking data (breath scores, protocol progress, widget summaries) to provide personalized insights</li>
              <li>The AI Coach is designed to stay strictly within breath health topics and will politely decline off-topic questions</li>
              <li>AI responses may occasionally be inaccurate or incomplete — always verify important health information with a professional</li>
              <li>Conversations with the AI Coach are processed via OpenAI's API and are subject to <a href="https://openai.com/policies/terms-of-use" className="text-[#D35400] underline" target="_blank" rel="noopener noreferrer">OpenAI's Terms of Use</a></li>
            </ul>
          </section>

          {/* Intellectual Property */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Intellectual Property</h2>
            <p className="text-slate-600 leading-relaxed">
              All content, design, protocols, assessment logic, and code within the App are the intellectual property of BreathSense. The 7-day protocols are original works based on peer-reviewed scientific research. You are granted a limited, non-exclusive, non-transferable license to use the App for personal, non-commercial purposes. You may not reproduce, distribute, or create derivative works from any part of the App without prior written consent.
            </p>
          </section>

          {/* Protocol Content */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Protocol Content and Recommendations</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              The App's protocols may recommend the use of certain products or practices, including but not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>Tongue scrapers, dental floss, non-alcohol mouthwash, fluoride toothpaste</li>
              <li>Neti pots, saline packets, humidifiers, air purifiers</li>
              <li>Bed elevation, dietary changes, breathing exercises</li>
              <li>Probiotics, prebiotics, digestive enzymes</li>
            </ul>
            <p className="text-slate-600 leading-relaxed mt-4">
              BreathSense does not sell, endorse, or receive compensation for any specific product brands. Product recommendations are general categories based on scientific literature. You are responsible for selecting appropriate products and consulting with healthcare professionals if you have allergies, sensitivities, or medical conditions.
            </p>
          </section>

          {/* Limitation of Liability */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Limitation of Liability</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              To the maximum extent permitted by applicable law:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>The App is provided "AS IS" and "AS AVAILABLE" without warranties of any kind, express or implied</li>
              <li>We do not guarantee that the App will produce specific health outcomes or that protocols will resolve all breath concerns</li>
              <li>We are not liable for any direct, indirect, incidental, or consequential damages arising from your use of the App</li>
              <li>We are not responsible for data loss resulting from device failure, App uninstallation, or operating system updates, as all data is stored locally</li>
              <li>Statistics referenced in the App (e.g., "75% reduction in VSCs," "97% of users see improvement") are based on published research and general user patterns, not guaranteed individual results</li>
            </ul>
          </section>

          {/* Notifications */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">11. Notifications</h2>
            <p className="text-slate-600 leading-relaxed">
              The App may send local push notifications for daily check-in reminders, protocol task reminders, and re-engagement nudges. All notifications are configurable — you can enable, disable, or customize the timing of each notification type within the App's settings. You may also disable notifications through your device's system settings at any time.
            </p>
          </section>

          {/* Termination */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">12. Termination</h2>
            <p className="text-slate-600 leading-relaxed">
              You may stop using the App at any time by uninstalling it from your device. Upon uninstallation, all locally stored data will be permanently deleted. We reserve the right to discontinue the App or any of its features at any time without prior notice.
            </p>
          </section>

          {/* Changes to Terms */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">13. Changes to These Terms</h2>
            <p className="text-slate-600 leading-relaxed">
              We may update these Terms from time to time. Changes will be reflected in the "Last updated" date at the top of this page. Your continued use of the App after any modifications constitutes acceptance of the updated Terms. We recommend reviewing these Terms periodically.
            </p>
          </section>

          {/* Governing Law */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">14. Governing Law</h2>
            <p className="text-slate-600 leading-relaxed">
              These Terms shall be governed by and construed in accordance with applicable laws, without regard to conflict of law principles. Any disputes arising from these Terms or your use of the App shall be resolved through good-faith negotiation before pursuing formal legal proceedings.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">15. Contact Us</h2>
            <p className="text-slate-600 leading-relaxed">
              If you have any questions about these Terms of Use, please contact us at:
            </p>
            <p className="text-slate-600 mt-2">
              <strong>Email:</strong> legal@breathsense.app<br />
              <strong>Subject:</strong> Terms of Use Inquiry
            </p>
          </section>
        </div>

        {/* Back to Home */}
        <div className="mt-16 pt-8 border-t border-slate-200">
          <Link to="/" className="inline-flex items-center gap-2 text-[#D35400] font-semibold hover:underline">
            <ArrowLeft weight="bold" className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;
