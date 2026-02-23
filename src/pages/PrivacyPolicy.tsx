import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'phosphor-react';

const PrivacyPolicy: React.FC = () => {
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
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Privacy Policy</h1>
        <p className="text-slate-500 mb-12">Last updated: February 2025</p>

        <div className="prose prose-slate max-w-none space-y-10">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Introduction</h2>
            <p className="text-slate-600 leading-relaxed">
              BreathSense Tracker ("BreathSense," "we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we handle information when you use the BreathSense Tracker mobile application (the "App"). BreathSense is designed with a <strong>privacy-first architecture</strong>—your data stays on your device and is never transmitted to our servers.
            </p>
          </section>

          {/* Data Collection */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Information We Do NOT Collect</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              BreathSense is built on a strict no-collection policy. We do <strong>not</strong> collect, store, or process:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>Personal identification information (name, email, phone number)</li>
              <li>Account credentials (no accounts are required to use the App)</li>
              <li>Health or medical data</li>
              <li>Location data</li>
              <li>Device identifiers or advertising IDs</li>
              <li>Usage analytics or behavioral data</li>
              <li>Cookies or tracking pixels</li>
              <li>Any data transmitted to cloud servers</li>
            </ul>
          </section>

          {/* Local Data Storage */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Data Stored Locally on Your Device</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              All data generated through your use of the App is stored exclusively on your device using local storage (AsyncStorage). This includes:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li><strong>Onboarding assessment results</strong> — Your root cause scores (oral, reflux, sinus, gut) and recommended protocol</li>
              <li><strong>Daily check-in logs</strong> — Breath severity ratings, symptom selections, trigger logs, and personal notes</li>
              <li><strong>Protocol progress</strong> — Task completion status, streak data, adherence percentages, and day-by-day progress</li>
              <li><strong>Widget tracking data</strong> — Water intake counts, meal times, food journal entries, symptom frequency, and mucus tracking</li>
              <li><strong>Notification preferences</strong> — Your chosen reminder times and toggle settings</li>
              <li><strong>User profile settings</strong> — App preferences and onboarding completion status</li>
            </ul>
            <p className="text-slate-600 leading-relaxed mt-4">
              This data <strong>never leaves your device</strong>. We have no ability to access, view, or retrieve any of this information.
            </p>
          </section>

          {/* AI Coach */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. AI Breath Coach</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              The App includes an AI-powered breath health coach. When you interact with the AI Coach:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>Your messages and relevant tracking data summaries are sent to OpenAI's API (GPT-4o-mini) to generate personalized responses</li>
              <li>These interactions are processed in real-time and are <strong>not stored on our servers</strong></li>
              <li>OpenAI's data usage policies apply to the processing of these messages. OpenAI does not use API data to train their models</li>
              <li>The AI Coach is strictly focused on breath health topics and will decline off-topic requests</li>
              <li>No personally identifiable information is included in AI requests—only anonymized health tracking summaries</li>
            </ul>
          </section>

          {/* No Accounts */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. No Account Required</h2>
            <p className="text-slate-600 leading-relaxed">
              BreathSense does not require you to create an account, provide an email address, or sign in with any third-party service. You can begin using the App immediately upon download. There is no registration process, no login, and no password to manage.
            </p>
          </section>

          {/* No Cloud Sync */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. No Cloud Synchronization</h2>
            <p className="text-slate-600 leading-relaxed">
              Your data is not synchronized to any cloud service, backup server, or external database. If you uninstall the App or clear its data, all locally stored information will be permanently deleted. We recommend being aware that your data exists solely on your device and cannot be recovered once removed.
            </p>
          </section>

          {/* Data Control */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Your Data Control Rights</h2>
            <p className="text-slate-600 leading-relaxed mb-4">You have complete control over your data:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li><strong>Access</strong> — All your data is visible within the App at any time</li>
              <li><strong>Deletion</strong> — You can reset and clear all data from within the App's settings with a single action</li>
              <li><strong>Portability</strong> — Since data is stored locally, it exists only on your device</li>
              <li><strong>No third-party sharing</strong> — We never share, sell, or transfer your data to any third party</li>
            </ul>
          </section>

          {/* Third-Party Services */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Third-Party Services</h2>
            <p className="text-slate-600 leading-relaxed mb-4">The App uses the following third-party services:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li><strong>OpenAI API</strong> — For AI Coach functionality. Only anonymized conversation data is transmitted. See <a href="https://openai.com/policies/privacy-policy" className="text-[#D35400] underline" target="_blank" rel="noopener noreferrer">OpenAI's Privacy Policy</a></li>
              <li><strong>Expo Notifications</strong> — For local push notifications (reminders). Notification tokens may be processed by Expo's notification service but are not linked to any personal data</li>
            </ul>
            <p className="text-slate-600 leading-relaxed mt-4">
              We do <strong>not</strong> use any analytics services (Google Analytics, Firebase Analytics, Mixpanel, etc.), advertising networks, or social media tracking tools.
            </p>
          </section>

          {/* Children */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Children's Privacy</h2>
            <p className="text-slate-600 leading-relaxed">
              BreathSense is intended for use by adults. We do not knowingly collect any information from children under the age of 13. Since the App does not collect personal information from any user, there is no risk of children's data being collected or stored.
            </p>
          </section>

          {/* Security */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Data Security</h2>
            <p className="text-slate-600 leading-relaxed">
              Since all data is stored locally on your device, the security of your data is protected by your device's own security measures (passcode, Face ID, Touch ID, encryption). We recommend keeping your device's operating system up to date and using a secure lock screen. Communications with the OpenAI API for the AI Coach feature are encrypted via HTTPS/TLS.
            </p>
          </section>

          {/* Changes */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">11. Changes to This Privacy Policy</h2>
            <p className="text-slate-600 leading-relaxed">
              We may update this Privacy Policy from time to time. Any changes will be reflected in the "Last updated" date at the top of this page. We encourage you to review this Privacy Policy periodically. Continued use of the App after any modifications constitutes your acceptance of the updated policy.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">12. Contact Us</h2>
            <p className="text-slate-600 leading-relaxed">
              If you have any questions or concerns about this Privacy Policy, please contact us at:
            </p>
            <p className="text-slate-600 mt-2">
              <strong>Email:</strong> privacy@breathsense.app<br />
              <strong>Subject:</strong> Privacy Policy Inquiry
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

export default PrivacyPolicy;
