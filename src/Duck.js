import React, { useRef } from "react";
import { useLoader, useFrame } from "react-three-fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";

const Duck = () => {
    // Import it
    const obj = useLoader(OBJLoader, "./korpus.obj");
    const obj2 = useLoader(OBJLoader, "./skrzydelka.obj");
    const obj3 = useLoader(OBJLoader, "./dziob.obj");

    // Rotate it
    const ref = useRef();
    const ref2 = useRef();
    const ref3 = useRef();
    useFrame(() => {
        return (ref.current.rotation.z += 0.01);
    });
    useFrame(() => {
        return (ref2.current.rotation.z += 0.01);
    });
    useFrame(() => {
        return (ref3.current.rotation.z += 0.01);
    });

    return (
        <>
            <primitive
                ref={ref}
                object={obj.children[0]}
                position={[0, -4, 0]}
                rotation={[(Math.PI / 2) * -1, 0, 0]}
                scale={[2, 2, 2]}
            >
                {/* Color it */}
                <meshPhongMaterial attach="material" color="#C16200" />
            </primitive>
            <primitive
                ref={ref2}
                object={obj2.children[0]}
                position={[0, -4, 0]}
                rotation={[(Math.PI / 2) * -1, 0, 0]}
                scale={[2, 2, 2]}
            >
                {/* Color it */}
                <meshPhongMaterial attach="material" color="#49010F" />
            </primitive>
            <primitive
                ref={ref3}
                object={obj3.children[0]}
                position={[0, -4, 0]}
                rotation={[(Math.PI / 2) * -1, 0, 0]}
                scale={[2, 2, 2]}
            >
                {/* Color it */}
                <meshPhongMaterial attach="material" color="#881600" />
            </primitive>
        </>
    );
};

export default Duck;
