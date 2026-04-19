/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx}"],
    theme: {
        extend: {
            colors: {
                bg: "#050505",
                surface: "#0a0a0f",
                neon: {
                    cyan: "#00f0ff",
                    purple: "#b14bff",
                    pink: "#ff3cac",
                    green: "#39ff88",
                },
            },
            fontFamily: {
                sans: ["Inter", "system-ui", "sans-serif"],
                display: ["Space Grotesk", "sans-serif"],
                mono: ["JetBrains Mono", "monospace"],
            },
            boxShadow: {
                neon: "0 0 20px rgba(0,240,255,0.35), 0 0 40px rgba(177,75,255,0.15)",
                "neon-strong": "0 0 25px rgba(0,240,255,0.7), 0 0 60px rgba(177,75,255,0.35)",
            },
            animation: {
                "gradient-x": "gradient-x 8s ease infinite",
                float: "float 6s ease-in-out infinite",
                "spin-slow": "spin 12s linear infinite",
            },
            keyframes: {
                "gradient-x": {
                    "0%,100%": { "background-position": "0% 50%" },
                    "50%": { "background-position": "100% 50%" },
                },
                float: {
                    "0%,100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-12px)" },
                },
            },
        },
    },
    plugins: [],
};