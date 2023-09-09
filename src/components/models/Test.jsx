import { OrbitControls } from "@react-three/drei";
import React from "react";
import { MarsP } from "./MarsP";

const Test = () => {
  return (
    <>
      <ambientLight color={"blue"} intensity={1} />
      <OrbitControls />
      <MarsP position={[0, 0, 0]} />
    </>
  );
};

export default Test;
