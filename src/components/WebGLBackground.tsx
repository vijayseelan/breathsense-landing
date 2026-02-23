import React, { useEffect, useRef } from 'react';

const WebGLBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl');
    if (!gl) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Vertex shader
    const vertexShaderSource = `
      attribute vec2 a_position;
      attribute float a_size;
      attribute float a_brightness;
      varying float v_brightness;
      
      void main() {
        gl_Position = vec4(a_position, 0.0, 1.0);
        gl_PointSize = a_size;
        v_brightness = a_brightness;
      }
    `;

    // Fragment shader
    const fragmentShaderSource = `
      precision mediump float;
      varying float v_brightness;
      
      void main() {
        vec2 coord = gl_PointCoord - vec2(0.5);
        float dist = length(coord);
        
        if (dist > 0.5) {
          discard;
        }
        
        float alpha = 1.0 - smoothstep(0.3, 0.5, dist);
        gl_FragColor = vec4(1.0, 1.0, 1.0, alpha * v_brightness);
      }
    `;

    // Create shaders
    const createShader = (type: number, source: string) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error('Shader compilation error:', gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      
      return shader;
    };

    const vertexShader = createShader(gl.VERTEX_SHADER, vertexShaderSource);
    const fragmentShader = createShader(gl.FRAGMENT_SHADER, fragmentShaderSource);

    if (!vertexShader || !fragmentShader) return;

    // Create program
    const program = gl.createProgram();
    if (!program) return;

    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error('Program linking error:', gl.getProgramInfoLog(program));
      return;
    }

    // Get attribute locations
    const positionLocation = gl.getAttribLocation(program, 'a_position');
    const sizeLocation = gl.getAttribLocation(program, 'a_size');
    const brightnessLocation = gl.getAttribLocation(program, 'a_brightness');

    // Create stars
    const numStars = 200;
    const positions: number[] = [];
    const sizes: number[] = [];
    const brightnesses: number[] = [];
    const velocities: number[] = [];

    for (let i = 0; i < numStars; i++) {
      positions.push(Math.random() * 2 - 1, Math.random() * 2 - 1);
      sizes.push(Math.random() * 3 + 1);
      brightnesses.push(Math.random() * 0.8 + 0.2);
      velocities.push(Math.random() * 0.0002 + 0.0001);
    }

    // Create buffers
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

    const sizeBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, sizeBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(sizes), gl.STATIC_DRAW);

    const brightnessBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, brightnessBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(brightnesses), gl.STATIC_DRAW);

    // Animation loop
    let time = 0;
    const animate = () => {
      time += 0.01;

      // Clear canvas
      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);

      // Use program
      gl.useProgram(program);

      // Update star positions (parallax effect)
      for (let i = 0; i < numStars; i++) {
        positions[i * 2] -= velocities[i];
        if (positions[i * 2] < -1.1) {
          positions[i * 2] = 1.1;
        }
        
        // Twinkle effect
        brightnesses[i] = 0.5 + Math.sin(time * 2 + i) * 0.3;
      }

      // Update position buffer
      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);
      gl.enableVertexAttribArray(positionLocation);
      gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

      // Update size buffer
      gl.bindBuffer(gl.ARRAY_BUFFER, sizeBuffer);
      gl.enableVertexAttribArray(sizeLocation);
      gl.vertexAttribPointer(sizeLocation, 1, gl.FLOAT, false, 0, 0);

      // Update brightness buffer
      gl.bindBuffer(gl.ARRAY_BUFFER, brightnessBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(brightnesses), gl.DYNAMIC_DRAW);
      gl.enableVertexAttribArray(brightnessLocation);
      gl.vertexAttribPointer(brightnessLocation, 1, gl.FLOAT, false, 0, 0);

      // Enable blending
      gl.enable(gl.BLEND);
      gl.blendFunc(gl.SRC_ALPHA, gl.ONE);

      // Draw stars
      gl.drawArrays(gl.POINTS, 0, numStars);

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.6 }}
    />
  );
};

export default WebGLBackground;
