import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';

function Starfield() {
  const points = useRef();
  const count = 2000; // Reduced for better performance
  
  const positions = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 15;
    }
    return positions;
  }, [count]);

  useFrame((state, delta) => {
    if (points.current) {
      points.current.rotation.x -= delta / 20;
      points.current.rotation.y -= delta / 30;
    }
  });

  return (
    <Points ref={points} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#fff"
        size={0.03}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </Points>
  );
}

// In Starfield.jsx
export default function StarfieldBackground() {
  return (
    <div className="fixed inset-0 z-1 ">
      <Canvas>
        <Starfield />
      </Canvas>
    </div>
  );
}