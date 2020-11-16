import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import Duck from "./Duck"
const CanvasComponent = () => {
    return (
        <Canvas
            colorManagement
            camera={{ position: [0, 0, 10] }}
            style={{
                position: "fixed",
                left: 0,
                top: 0,
                width: "100%",
                height: "100%",
                zIndex: 1000
            }}
        >
            <ambientLight />
            <pointLight position={[10, 10, 0]} intensity={1} color="white" />
            <pointLight position={[-10, 10, 0]} intensity={1} color="white" />
            <Suspense fallback={null}>
                <Duck />
            </Suspense>
        </Canvas>
    );
};

export default CanvasComponent;
