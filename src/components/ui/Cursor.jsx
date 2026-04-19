import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor() {
    const x = useMotionValue(-100);
    const y = useMotionValue(-100);
    const sx = useSpring(x, { stiffness: 500, damping: 40 });
    const sy = useSpring(y, { stiffness: 500, damping: 40 });
    const [hovering, setHovering] = useState(false);

    useEffect(() => {
        const move = (e) => { x.set(e.clientX - 16); y.set(e.clientY - 16); };
        const over = (e) => {
            if (e.target.closest("a,button,input,textarea,[data-cursor]"))
                setHovering(true);
        };
        const out = () => setHovering(false);
        window.addEventListener("mousemove", move);
        window.addEventListener("mouseover", over);
        window.addEventListener("mouseout", out);
        return () => {
            window.removeEventListener("mousemove", move);
            window.removeEventListener("mouseover", over);
            window.removeEventListener("mouseout", out);
        };
    }, [x, y]);

    return (
        <>
            <motion.div
                style={{ translateX: sx, translateY: sy }}
                animate={{ scale: hovering ? 2.2 : 1, opacity: hovering ? 0.4 : 1 }}
                className="pointer-events-none fixed top-0 left-0 z-[9999] w-8 h-8 rounded-full
                   border border-neon-cyan mix-blend-difference
                   shadow-[0_0_20px_rgba(0,240,255,0.8)]"
            />
            <motion.div
                style={{ translateX: x, translateY: y }}
                className="pointer-events-none fixed top-0 left-0 z-[9999] w-8 h-8
                   flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-neon-cyan" />
            </motion.div>
        </>
    );
}