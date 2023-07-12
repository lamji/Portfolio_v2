/** @format */

import React, { useRef } from "react";
import { extend, useFrame, useThree } from "react-three-fiber";
import { Water } from "three/examples/jsm/objects/Water";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass";
import { FXAAShader } from "three/examples/jsm/shaders/FXAAShader";

extend({ Water, EffectComposer, RenderPass, ShaderPass });

const WaterBackground = () => {
  const waterRef = useRef();
  const { scene, camera, gl } = useThree();

  useFrame(() => {
    if (waterRef.current) {
      waterRef.current.material.uniforms.time.value += 0.01;
    }
  });

  return (
    <>
      <water ref={waterRef} args={[null, null]} rotation-x={-Math.PI / 2}>
        <planeBufferGeometry attach="geometry" args={[5000, 5000]} />
        <waterMaterial
          attach="material"
          color="#3366ff"
          opacity={0.75}
          transparent
        />
      </water>

      <effectComposer args={[gl]}>
        <renderPass attachArray="passes" args={[scene, camera]} />
        <shaderPass
          attachArray="passes"
          args={[FXAAShader]}
          uniforms-resolution-value={[
            1 / window.innerWidth,
            1 / window.innerHeight,
          ]}
        />
      </effectComposer>
    </>
  );
};

export default WaterBackground;
