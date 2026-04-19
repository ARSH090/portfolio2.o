import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function RippleEffect({ children, className = "" }) {
    const [ripples, setRipples] = useState([]);

    const addRipple = (event) => {
        const button = event.currentTarget;
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;

        const newRipple = {
            id: Date.now(),
            x,
            y,
            size,
        };

        setRipples(prev => [...prev, newRipple]);

        setTimeout(() => {
            setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
        }, 600);
    };

    return (
        <div className={`relative overflow-hidden ${className}`} onClick={addRipple}>
            {children}
            <AnimatePresence>
                {ripples.map(ripple => (
                    <motion.div
                        key={ripple.id}
                        initial={{ scale: 0, opacity: 0.6 }}
                        animate={{ scale: 4, opacity: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.6 }}
                        className="absolute rounded-full bg-white/20 pointer-events-none"
                        style={{
                            left: ripple.x,
                            top: ripple.y,
                            width: ripple.size,
                            height: ripple.size,
                        }}
                    />
                ))}
            </AnimatePresence>
        </div>
    );
}