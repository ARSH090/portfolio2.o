import { motion } from "framer-motion";
import HeroCanvas from "../three/HeroCanvas";
import MagneticButton from "../ui/MagneticButton";
import Typewriter from "../ui/Typewriter";
import RippleEffect from "../ui/RippleEffect";
import { HERO_STATS } from "../../constants";

const container = {
    hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};
const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function Hero() {
    return (
        <section id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 grid-bg" />
            <HeroCanvas />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg" />

            <motion.div variants={container} initial="hidden" animate="show"
                className="relative z-10 text-center max-w-5xl px-6">
                <motion.p variants={item}
                    className="font-mono text-xs md:text-sm text-neon-cyan tracking-[0.4em] mb-6">
          // FULL-STACK DEVELOPER · AI ENTHUSIAST
                </motion.p>
                <motion.h1 variants={item}
                    className="font-display font-bold text-5xl sm:text-7xl md:text-8xl leading-[1.05]">
                    Hi, I'm <span className="neon-text">Md Arsh Eqbal</span><br />
                    I build <span className="italic text-white/80">practical</span> web{" "}
                    <Typewriter text="experiences." speed={150} delay={2000} />
                </motion.h1>
                <motion.p variants={item}
                    className="mt-8 max-w-2xl mx-auto text-white/60 text-base md:text-lg">
                    Passionate about building practical tools that solve real-world problems.
                    Currently pursuing B.Tech at Netaji Subhas University, Jamshedpur.
                </motion.p>

                {/* Stats Grid */}
                <motion.div variants={item} className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                    {HERO_STATS.map((stat, i) => (
                        <motion.div key={stat.label}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}
                            className="glass-neon p-6 text-center group hover:scale-105 transition-transform">
                            <stat.icon className="text-3xl text-neon-cyan mx-auto mb-2 group-hover:scale-110 transition-transform" />
                            <div className="text-3xl md:text-4xl font-display font-bold neon-text mb-1">
                                {stat.value}
                            </div>
                            <div className="text-xs text-white/60 uppercase tracking-wider">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div variants={item} className="mt-10 flex items-center justify-center gap-4 flex-wrap">
                    <RippleEffect>
                        <MagneticButton className="btn-neon">
                            View My Work →
                        </MagneticButton>
                    </RippleEffect>
                    <RippleEffect>
                        <MagneticButton className="btn-outline-neon">
                            Download CV
                        </MagneticButton>
                    </RippleEffect>
                </motion.div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 text-xs tracking-widest">
                <div className="w-px h-10 bg-gradient-to-b from-transparent to-neon-cyan mx-auto mb-2" />
                SCROLL
            </motion.div>
        </section>
    );
}