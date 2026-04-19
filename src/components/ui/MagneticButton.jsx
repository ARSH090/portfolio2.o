import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function MagneticButton({ children, className = "", ...props }) {
    const ref = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const sx = useSpring(x, { stiffness: 200, damping: 15 });
    const sy = useSpring(y, { stiffness: 200, damping: 15 });

    const onMove = (e) => {
        const r = ref.current.getBoundingClientRect();
        x.set((e.clientX - r.left - r.width / 2) * 0.35);
        y.set((e.clientY - r.top - r.height / 2) * 0.35);
    };
    const reset = () => { x.set(0); y.set(0); };

    return (
        <motion.button
            ref={ref} onMouseMove={onMove} onMouseLeave={reset}
            style={{ x: sx, y: sy }}
            className={className} {...props}>
            {children}
        </motion.button>
    );
}