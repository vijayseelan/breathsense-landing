import React, { useEffect, useRef } from 'react';
import Matter from 'matter-js';
import { motion } from 'framer-motion';
import { Lightning } from 'phosphor-react';

const PhysicsCard: React.FC = () => {
  const sceneRef = useRef<HTMLDivElement>(null);
  const engineRef = useRef<Matter.Engine | null>(null);

  useEffect(() => {
    if (!sceneRef.current) return;

    // Create Matter.js engine
    const engine = Matter.Engine.create();
    engineRef.current = engine;

    // Create canvas for custom rendering
    const canvas = document.createElement('canvas');
    canvas.width = 350;
    canvas.height = 400;
    sceneRef.current.appendChild(canvas);
    const context = canvas.getContext('2d');
    if (!context) return;

    // Create boundaries
    const ground = Matter.Bodies.rectangle(175, 390, 350, 20, {
      isStatic: true,
      render: { fillStyle: 'transparent' },
    });

    const leftWall = Matter.Bodies.rectangle(0, 200, 20, 400, {
      isStatic: true,
      render: { fillStyle: 'transparent' },
    });

    const rightWall = Matter.Bodies.rectangle(350, 200, 20, 400, {
      isStatic: true,
      render: { fillStyle: 'transparent' },
    });

    // Create letter bodies
    const letters = [
      { char: 'A', x: 80, y: 100, color: '#60A5FA' },
      { char: 'I', x: 140, y: 100, color: '#A78BFA' },
      { char: 'C', x: 200, y: 100, color: '#F472B6' },
      { char: 'O', x: 260, y: 100, color: '#34D399' },
      { char: 'A', x: 320, y: 100, color: '#60A5FA' },
      { char: 'C', x: 110, y: 150, color: '#F472B6' },
      { char: 'H', x: 170, y: 150, color: '#FBBF24' },
      { char: 'I', x: 230, y: 150, color: '#A78BFA' },
      { char: 'N', x: 290, y: 150, color: '#34D399' },
    ];

    const letterBodies = letters.map((letter) => {
      const body = Matter.Bodies.rectangle(letter.x, letter.y, 40, 40, {
        restitution: 0.8,
        friction: 0.3,
        density: 0.001,
        render: {
          fillStyle: letter.color,
        },
      });

      // Store character in body for rendering
      (body as any).character = letter.char;
      (body as any).color = letter.color;

      return body;
    });

    // Add all bodies to the world
    Matter.World.add(engine.world, [ground, leftWall, rightWall, ...letterBodies]);

    // Add gravity and physics
    engine.world.gravity.y = 0.5;

    // Custom render function
    const customRender = () => {
      const bodies = Matter.Composite.allBodies(engine.world);

      // Clear canvas
      context.clearRect(0, 0, canvas.width, canvas.height);

      // Draw each body
      bodies.forEach((body: any) => {
        if (body.isStatic) return; // Skip static bodies

        context.save();
        context.translate(body.position.x, body.position.y);
        context.rotate(body.angle);

        // Draw letter background
        context.fillStyle = body.color || '#60A5FA';
        context.fillRect(-20, -20, 40, 40);

        // Draw letter
        context.fillStyle = 'white';
        context.font = 'bold 24px monospace';
        context.textAlign = 'center';
        context.textBaseline = 'middle';
        context.fillText(body.character || '?', 0, 0);

        // Draw border
        context.strokeStyle = 'rgba(255, 255, 255, 0.3)';
        context.lineWidth = 2;
        context.strokeRect(-20, -20, 40, 40);

        context.restore();
      });

      requestAnimationFrame(customRender);
    };

    // Run the engine
    const runner = Matter.Runner.create();
    Matter.Runner.run(runner, engine);

    // Mouse control
    const mouse = Matter.Mouse.create(canvas);
    const mouseConstraint = Matter.MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false,
        },
      },
    });

    Matter.World.add(engine.world, mouseConstraint);

    // Add some random forces periodically
    const interval = setInterval(() => {
      letterBodies.forEach((body) => {
        if (Math.random() > 0.7) {
          Matter.Body.applyForce(body, body.position, {
            x: (Math.random() - 0.5) * 0.01,
            y: -Math.random() * 0.01,
          });
        }
      });
    }, 2000);

    // Start custom rendering
    customRender();

    return () => {
      clearInterval(interval);
      Matter.Runner.stop(runner);
      Matter.World.clear(engine.world, false);
      Matter.Engine.clear(engine);
      if (canvas.parentNode) {
        canvas.parentNode.removeChild(canvas);
      }
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="relative w-96 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl p-8 crt-glow skeuomorphic-shadow border-4 border-gray-800"
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
            <span className="text-3xl">🤖</span>
          </div>
          <div className="text-white/80">
            <Lightning className="w-8 h-8" />
          </div>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-white mb-4 tracking-wide">
          AI Coach
        </h3>

        {/* Description */}
        <p className="text-white/90 leading-relaxed mb-6">
          Personalized guidance and insights powered by advanced AI technology
        </p>

        {/* Physics Scene */}
        <div className="relative w-full h-96 bg-black/20 rounded-xl overflow-hidden backdrop-blur-sm border-2 border-white/10">
          <div ref={sceneRef} className="w-full h-full" />
          
          {/* Overlay text */}
          <div className="absolute top-4 left-4 text-white/60 text-sm font-mono">
            Interactive Physics
          </div>
          
          {/* Instructions */}
          <div className="absolute bottom-4 left-4 text-white/40 text-xs">
            Drag letters to interact
          </div>
        </div>

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
  );
};

export default PhysicsCard;
