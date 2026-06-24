import StaticBackground from './StaticBackground';
import FluidBackground from './FluidBackground';

export default function Background() {
  return (
    <>
      {/* Layer 1: Static stars, grid, gradients — z-0 */}
      <StaticBackground />

      {/* Layer 2: Interactive fluid canvas — z-10 */}
      <FluidBackground />
    </>
  );
}