"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, Html, useGLTF } from "@react-three/drei";
import { Suspense } from "react";

function Model() {
  // Replace with your actual GLB path (public/atucha/model.glb)
  const { scene } = useGLTF("/atucha/model.glb");
  return <primitive object={scene} />;
}

useGLTF.preload("/atucha/model.glb");

export function Viewer() {
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <Canvas dpr={[1, 2]} shadows>
        <ambientLight intensity={0.7} />
        <Suspense fallback={<Html center>Cargando modelo…</Html>}>
          <Model />
          <Environment preset="city" />
          <OrbitControls makeDefault />
        </Suspense>
      </Canvas>
    </div>
  );
}
