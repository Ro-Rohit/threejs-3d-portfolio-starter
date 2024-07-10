import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = (props) => {
  const [isMobile, setIsMobile] = useState(false);
  window.addEventListener('resize', () => {
    window.innerWidth < 600 ? setIsMobile(true) : setIsMobile(false);
  })
  const [decal] = useTexture([props.imgUrl]);



  return (
    <Float speed={1.25} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={1.5} />
      <directionalLight position={[0, 0, 0.5]} />
      <mesh castShadow receiveShadow scale={isMobile ? 1 : 1.5} rotation={[-0.7, 0.7, 0.4]}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial color="#ffffff" polygonOffset polygonOffsetFactor={-5} flatShading />
        <Decal position={[0, 0, 1]} map={decal} rotation={[2 * Math.PI, 0, 6.25]} flatShading />
      </mesh>
    </Float>

  )
}


const BallCanvas = ({ icon }) => {
  return (

    <Canvas
      shadows
      gl={{ preserveDrawingBuffer: true }}
      camera={{ fov: 25, position: [5, 5, 5] }}
      frameloop="demand"
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
        <Preload all />
      </Suspense>

    </Canvas>

  );
};

export default BallCanvas;
