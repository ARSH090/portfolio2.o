import { useEffect, lazy, Suspense } from "react";
import Lenis from "lenis";
import Navbar from "./components/Navbar";
import Cursor from "./components/ui/Cursor";
import MagneticCursor from "./components/ui/MagneticCursor";
import ScrollProgress from "./components/ui/ScrollProgress";
import FloatingParticles from "./components/three/FloatingParticles";
import Hero from "./components/sections/Hero";

// Lazy-load heavy sections for performance
const About = lazy(() => import("./components/sections/About"));
const Experience = lazy(() => import("./components/sections/Experience"));
const Skills = lazy(() => import("./components/sections/Skills"));
const Projects = lazy(() => import("./components/sections/Projects"));
const Certificates = lazy(() => import("./components/sections/Certificates"));
const Services = lazy(() => import("./components/sections/Services"));
const Testimonials = lazy(() => import("./components/sections/Testimonials"));
const Contact = lazy(() => import("./components/sections/Contact"));

export default function App() {
    useEffect(() => {
        const lenis = new Lenis({ lerp: 0.08, smoothWheel: true });
        const raf = (t) => { lenis.raf(t); requestAnimationFrame(raf); };
        requestAnimationFrame(raf);
        return () => lenis.destroy();
    }, []);

    return (
        <div className="relative bg-bg overflow-hidden">
            <ScrollProgress />
            <Cursor />
            <MagneticCursor />
            <FloatingParticles />
            <Navbar />
            <main>
                <Hero />
                <Suspense fallback={<div className="h-screen" />}>
                    <About />
                    <Experience />
                    <Skills />
                    <Projects />
                    <Certificates />
                    <Services />
                    <Testimonials />
                    <Contact />
                </Suspense>
            </main>
            <footer className="py-8 text-center text-white/40 text-sm border-t border-white/5">
                © {new Date().getFullYear()} Arsh · Crafted with ⚡ React + Three.js
            </footer>
        </div>
    );
}