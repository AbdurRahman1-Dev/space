"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { useRef } from "react";

import { PresentationControls, Stage } from "@react-three/drei";
import { MarsP } from "./models/MarsP";

const Mars = () => {
  return (
    <Canvas
      resize={false}
      shadows
      dpr={[1, 2]}
      camera={{ fov: 45 }}
      style={{ height: "400px", position: "relative" }}
    >
      <PresentationControls speed={1.5} global={false}>
        <Stage shadows={false} environment={"park"}>
          <MarsP />
        </Stage>
      </PresentationControls>
    </Canvas>
  );
};

export default Mars;
