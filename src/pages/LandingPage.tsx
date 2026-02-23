import React from 'react';
import HeroSection from '../components/HeroSection';
import RootCauseSection from '../components/RootCauseSection';
import ProtocolsSection from '../components/ProtocolsSection';
import AICoachSection from '../components/AICoachSection';
import InsightsSection from '../components/InsightsSection';
import PrivacySection from '../components/PrivacySection';
import TestimonialsSection from '../components/TestimonialsSection';
import CTASection from '../components/CTASection';
import FooterSection from '../components/FooterSection';

const LandingPage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <RootCauseSection />
      <ProtocolsSection />
      <AICoachSection />
      <InsightsSection />
      <PrivacySection />
      <TestimonialsSection />
      <CTASection />
      <FooterSection />
    </>
  );
};

export default LandingPage;
