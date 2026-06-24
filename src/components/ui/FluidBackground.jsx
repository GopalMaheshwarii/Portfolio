import { useEffect, useRef } from 'react';
import webGLFluidEnhanced from 'webgl-fluid';

export default function FluidBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // WebGL Fluid Configuration
    webGLFluidEnhanced(canvasRef.current, {
      IMMEDIATE: false,
      TRIGGER: 'hover',
      SIM_RESOLUTION: 96,//128
      DYE_RESOLUTION: 512,//1024
      CAPTURE_RESOLUTION: 512,
      DENSITY_DISSIPATION: 2,//1.5
      VELOCITY_DISSIPATION: 0.9,
      PRESSURE: 0.6,
      PRESSURE_ITERATIONS: 20,
      CURL: 25,
      SPLAT_RADIUS: 0.1,//0.2
      SPLAT_FORCE: 3000,//5000
      SHADING: true,
      COLORFUL: true,
      COLOR_UPDATE_SPEED: 10,
      PAUSED: false,
      BACK_COLOR: { r: 0, g: 0, b: 0 },
      TRANSPARENT: true,
      BLOOM: true,
      BLOOM_ITERATIONS: 8,
      BLOOM_RESOLUTION: 256,
      BLOOM_INTENSITY: 0.4,//0.8
      BLOOM_THRESHOLD: 0.6,
      BLOOM_SOFT_KNEE: 0.7,
      SUNRAYS: true,
      SUNRAYS_RESOLUTION: 196,
      SUNRAYS_WEIGHT: 1.0,
    });
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-10 mix-blend-screen pointer-events-auto"
      style={{ width: '100%', height: '100%' }}
      aria-hidden="true"
    />
  );
}