import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function MagneticCursor() {
    const [isVisible, setIsVisible] = useState(false);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springX = useSpring(mouseX, { stiffness: 300, damping: 30 });
    const springY = useSpring(mouseY, { stiffness: 300, damping: 30 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            mouseX.set(e.clientX - 10);
            mouseY.set(e.clientY - 10);
            setIsVisible(true);
        };

        const handleMouseLeave = () => {
            setIsVisible(false);
        };

        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, [mouseX, mouseY]);

    return (
        <motion.div
            className="fixed top-0 left-0 w-5 h-5 bg-neon-cyan rounded-full pointer-events-none z-50 mix-blend-difference"
            style={{
                x: springX,
                y: springY,
                opacity: isVisible ? 1 : 0,
            }}
            transition={{ opacity: { duration: 0.2 } }}
        >
            <div className="absolute inset-0 bg-neon-cyan rounded-full animate-ping opacity-30" />
        </motion.div>
    );
}