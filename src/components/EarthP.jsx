"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { useRef } from "react";

import { PresentationControls, Stage } from "@react-three/drei";
import { EarthM } from "./models/EarthM";

const EarthP = () => {
  return (
    <Canvas
      resize={false}
      shadows
      dpr={[3, 4]}
      position={[1, 2, 3]}
      camera={{ fov: 45 }}
      style={{ height: "400px", position: "relative" }}
    >
      <PresentationControls scale={false} speed={1.5} global={false}>
        <Stage scale={false} shadows={false} environment={"park"}>
          <EarthM />
        </Stage>
      </PresentationControls>
    </Canvas>
  );
};

export default EarthP;
