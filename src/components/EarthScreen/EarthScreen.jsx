import React from "react";
import { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import { Earth } from "./Earth";
import styled from "styled-components";

export default function EarthScreen() {
  return (
    <CanvasContainer>
      <Canvas>
        <Suspense fallback={null}>
          <Earth />
        </Suspense>
      </Canvas>
    </CanvasContainer>
  );
}

const CanvasContainer = styled.div`
  height: 100%;
  width: 100%;
`;
