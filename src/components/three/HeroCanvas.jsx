import { Canvas } from "@react-three/fiber";
import { Float, Icosahedron, TorusKnot, MeshDistortMaterial } from "@react-three/drei";
import { Suspense } from "react";

function Shapes() {
    return (
        <>
            <Float speed={1.4} rotationIntensity={1} floatIntensity={2}>
                <TorusKnot args={[1, 0.28, 160, 24]} position={[2.4, 0.8, 0]}>
                    <MeshDistortMaterial color="#00f0ff" distort={0.35} speed={2}
                        metalness={0.9} roughness={0.1} />
                </TorusKnot>
            </Float>
            <Float speed={1.1} rotationIntensity={1.2} floatIntensity={1.6}>
                <Icosahedron args={[0.9, 0]} position={[-2.8, -0.5, -1]}>
                    <MeshDistortMaterial color="#b14bff" distort={0.5} speed={1.5}
                        metalness={0.8} roughness={0.2} />
                </Icosahedron>
            </Float>
            <Float speed={1.8} floatIntensity={2.4}>
                <mesh position={[0.5, -1.8, -2]}>
                    <sphereGeometry args={[0.45, 32, 32]} />
                    <meshStandardMaterial color="#ff3cac" emissive="#ff3cac"
                        emissiveIntensity={0.6} />
                </mesh>
            </Float>
        </>
    );
}

export default function HeroCanvas() {
    return (
        <Canvas
            camera={{ position: [0, 0, 6], fov: 45 }}
            dpr={[1, 2]}
            gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
            className="!absolute inset-0 -z-10">
            <ambientLight intensity={0.4} />
            <directionalLight position={[5, 5, 5]} intensity={1.2} color="#00f0ff" />
            <directionalLight position={[-5, -3, 2]} intensity={0.8} color="#b14bff" />
            <Suspense fallback={null}><Shapes /></Suspense>
        </Canvas>
    );
}