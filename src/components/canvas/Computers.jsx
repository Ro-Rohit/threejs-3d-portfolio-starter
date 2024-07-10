import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh >
      <hemisphereLight intensity={1.5} position={[0, 0.3, 0]} groundColor="black" />
      <pointLight intensity={2} position={[0, 0.4, 0.3]} />
      <spotLight position={[-0.4, 1, 0.3]} intensity={1} angle={0.12} penumbra={1} castShadow shadow-mapSize={1024} />

      <primitive
        object={computer.scene}
        position={isMobile ? [-0.4, -1.2, -2] : [0.2, -1.5, -0.8]}
        scale={isMobile ? 0.32 : 0.4}
        rotation={isMobile ? [0, -0.8, 0] : [-0.01, -1, -0.1]} />

    </mesh>
  );
};


const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 600px)');

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
      console.log(isMobile);
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange);
    return () => { mediaQuery.removeEventListener('change', handleMediaQueryChange) }
  }, [])

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [5, 5, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />


    </Canvas>
  )
}



export default ComputersCanvas;