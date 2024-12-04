import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Button } from "@mui/material";
import { Canvas } from "@react-three/fiber";
import { Html } from "@react-three/drei";

const container = document.getElementById("root");
if (!container) {
  throw new Error("root container not found");
}

createRoot(container).render(
  <StrictMode>
    <Button onClick={(ev) => console.log(ev)}>
      Hello
    </Button>
    <Canvas>
      <mesh>
        <Html>
          <Button onClick={(ev) => console.log(ev)} />
        </Html>
        <meshBasicMaterial />
        <boxGeometry />
      </mesh>
    </Canvas>
  </StrictMode>,
);