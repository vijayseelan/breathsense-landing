import React, { useState, useRef } from 'react';
import { motion, useSpring, useMotionValue, useTransform } from 'framer-motion';
import { Star, Lightning, Heart, Brain, Shield, Activity } from 'phosphor-react';
import PhysicsCard from './PhysicsCard';
import WebGLBackground from './WebGLBackground';

interface FeatureCard {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  avatar: string;
  color: string;
  isPhysics?: boolean;
}

const RetroFeatureCards: React.FC = () => {
  const [isDragging, setIsDragging] = useState<number | null>(null);
  const constraintsRef = useRef<HTMLDivElement>(null);
  
  const features: FeatureCard[] = [
    {
      id: 1,
      title: "Root Cause Analysis",
      description: "Comprehensive assessment identifies your specific breath issue - oral, reflux, sinus, or gut-related",
      icon: <Brain className="w-8 h-8" />,
      avatar: "🧠",
      color: "from-blue-400 to-cyan-500"
    },
    {
      id: 2,
      title: "7-Day Protocols",
      description: "Science-backed progressive habit building with personalized daily routines",
      icon: <Activity className="w-8 h-8" />,
      avatar: "📋",
      color: "from-purple-400 to-pink-500"
    },
    {
      id: 3,
      title: "AI Coach",
      description: "Personalized guidance and insights powered by advanced AI technology",
      icon: <Lightning className="w-8 h-8" />,
      avatar: "🤖",
      color: "from-yellow-400 to-orange-500",
      isPhysics: true
    },
    {
      id: 4,
      title: "Privacy First",
      description: "100% local data storage - no accounts, no cloud, no sharing",
      icon: <Shield className="w-8 h-8" />,
      avatar: "🔒",
      color: "from-green-400 to-teal-500"
    },
    {
      id: 5,
      title: "Smart Tracking",
      description: "Detailed progress monitoring with interactive widgets and insights",
      icon: <Star className="w-8 h-8" />,
      avatar: "📊",
      color: "from-red-400 to-rose-500"
    },
    {
      id: 6,
      title: "Health Focus",
      description: "Built on peer-reviewed research for lasting health improvements",
      icon: <Heart className="w-8 h-8" />,
      avatar: "❤️",
      color: "from-indigo-400 to-purple-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* WebGL Stars Background */}
      <div className="absolute inset-0">
        <WebGLBackground />
        <div className="radial-light"></div>
      </div>

      {/* Noise Overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="noise-texture"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl font-bold text-white mb-4 tracking-wider">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              BreathSense Features
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Revolutionary breath health tracking with retro-futuristic design
          </p>
        </motion.div>

        {/* Cards Container */}
        <div className="relative" ref={constraintsRef}>
          <motion.div
            className="flex gap-8 overflow-x-hidden py-8"
            animate={{
              x: [0, -features.length * 400],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {[...features, ...features].map((feature, index) => (
              feature.isPhysics ? (
                <PhysicsCard key={`${feature.id}-${index}`} />
              ) : (
                <RetroCard
                  key={`${feature.id}-${index}`}
                  feature={feature}
                  isDragging={isDragging === feature.id}
                  onDragStart={() => setIsDragging(feature.id)}
                  onDragEnd={() => setIsDragging(null)}
                  constraintsRef={constraintsRef}
                />
              )
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

interface RetroCardProps {
  feature: FeatureCard;
  isDragging: boolean;
  onDragStart: () => void;
  onDragEnd: () => void;
  constraintsRef: React.RefObject<HTMLDivElement | null>;
}

const RetroCard: React.FC<RetroCardProps> = ({
  feature,
  isDragging,
  onDragStart,
  onDragEnd,
  constraintsRef,
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  const shadowScale = useSpring(1.5);
  const brightness = useSpring(1);

  return (
    <motion.div
      drag
      dragConstraints={constraintsRef}
      dragElastic={0.2}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      style={{ x, y, rotateX, rotateY }}
      whileHover={{
        y: -20,
        scale: 1.05,
        transition: { type: "spring", stiffness: 300, damping: 20 }
      }}
      onHoverStart={() => {
        shadowScale.set(2);
        brightness.set(1.2);
      }}
      onHoverEnd={() => {
        shadowScale.set(1.5);
        brightness.set(1);
      }}
      className="relative flex-shrink-0 w-96"
    >
      {/* Card Shadow */}
      <motion.div
        className="absolute inset-0 bg-black rounded-2xl transform translate-y-4 translate-x-2"
        style={{
          scale: shadowScale,
          filter: "blur(20px)",
          opacity: 0.4
        }}
      />

      {/* Main Card */}
      <motion.div
        className={`relative bg-gradient-to-br ${feature.color} rounded-2xl p-8 crt-glow skeuomorphic-shadow border-4 border-gray-800`}
        style={{ filter: `brightness(${brightness})` }}
      >
        {/* CRT Screen Effect */}
        <div className="absolute inset-0 rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>

        {/* Bevel Border */}
        <div className="absolute inset-0 rounded-2xl border-2 border-white/20 pointer-events-none"></div>
        <div className="absolute inset-0 rounded-2xl border border-black/30 pointer-events-none"></div>

        {/* Content */}
        <div className="relative z-10">
          {/* Avatar and Icon */}
          <div className="flex items-center mb-6">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mr-4 backdrop-blur-sm border-2 border-white/30">
              <span className="text-3xl">{feature.avatar}</span>
            </div>
            <div className="text-white/80">
              {feature.icon}
            </div>
          </div>

          {/* Title */}
          <h3 className="text-2xl font-bold text-white mb-4 tracking-wide">
            {feature.title}
          </h3>

          {/* Description */}
          <p className="text-white/90 leading-relaxed">
            {feature.description}
          </p>

          {/* Animated Details */}
          <div className="mt-6 flex gap-2">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-white/60 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
        </div>

        {/* Metallic Frame Details */}
        <div className="absolute top-2 left-2 right-2 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
        <div className="absolute bottom-2 left-2 right-2 h-1 bg-gradient-to-r from-transparent via-black/30 to-transparent"></div>
      </motion.div>
    </motion.div>
  );
};

export default RetroFeatureCards;
