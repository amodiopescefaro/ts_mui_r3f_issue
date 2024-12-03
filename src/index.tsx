import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Button } from "@mui/material";
import { Canvas } from "@react-three/fiber";

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
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial />
      </mesh>
    </Canvas>
  </StrictMode>,
);