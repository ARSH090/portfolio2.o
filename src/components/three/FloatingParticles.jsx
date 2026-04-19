import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function Particles() {
    const ref = useRef();

    const particlesPosition = useMemo(() => {
        const positions = new Float32Array(1000 * 3);

        for (let i = 0; i < 1000; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 20;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
        }

        return positions;
    }, []);

    useFrame((state) => {
        const { clock } = state;
        if (ref.current) {
            ref.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.1) * 0.1;
            ref.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.15) * 0.1;
        }
    });

    return (
        <Points ref={ref} positions={particlesPosition} stride={3} frustumCulled={false}>
            <PointMaterial
                transparent
                color="#00f0ff"
                size={0.02}
                sizeAttenuation={true}
                depthWrite={false}
                opacity={0.6}
            />
        </Points>
    );
}

export default function FloatingParticles() {
    return (
        <Canvas
            camera={{ position: [0, 0, 1], fov: 75 }}
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                pointerEvents: "none",
                zIndex: 1
            }}
        >
            <Particles />
        </Canvas>
    );
}