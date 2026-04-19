import { useState, useEffect } from "react";

export default function Typewriter({ text, speed = 100, delay = 0 }) {
    const [displayText, setDisplayText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (currentIndex < text.length) {
                setDisplayText(prev => prev + text[currentIndex]);
                setCurrentIndex(prev => prev + 1);
            } else {
                setIsComplete(true);
            }
        }, speed);

        return () => clearTimeout(timer);
    }, [currentIndex, text, speed]);

    return (
        <span>
            {displayText}
            {!isComplete && <span className="animate-pulse">|</span>}
        </span>
    );
}