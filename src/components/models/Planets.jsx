"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";
import { useRef } from "react";

const Planets = () => {
  const modelref = useRef();

  function Model(props) {
    useFrame(() => {
      modelref.current.rotation.x += 0.0075;
      modelref.current.rotation.y += 0.0005;
    });

    const { scene } = useGLTF("./mars.glb");
    return <primitive ref={modelref} object={scene} {...props} />;
  }

  return (
    <Canvas
      resize={false}
      shadows
      dpr={[1, 2]}
      camera={{ fov: 45 }}
      style={{ width: "400px", height: "400px", position: "relative" }}
    >
      {/* <color attach="color" args={["#101010"]} /> */}

      <PresentationControls speed={1.5} global={false}>
        <Stage shadows={false} environment={"park"}>
          <Model />
        </Stage>
      </PresentationControls>
    </Canvas>
  );
};

export default Planets;
