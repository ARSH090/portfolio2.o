import { motion, useScroll, useTransform } from "framer-motion";
import SectionWrapper from "../ui/SectionWrapper";

const aboutCards = [
    {
        title: "Developer",
        icon: "💻",
        desc: "I'm a passionate Full Stack Web Developer with a growing interest in Artificial Intelligence. I love building practical tools that solve real-world problems."
    },
    {
        title: "Student",
        icon: "🎓",
        desc: "Currently pursuing my B.Tech (4th semester) at Netaji Subhas University, Jamshedpur. Always learning and exploring new technologies."
    },
    {
        title: "Creative",
        icon: "🎨",
        desc: "When I'm not coding, I enjoy singing and sharing creative ideas online. I believe creativity enhances problem-solving skills."
    }
];

export default function About() {
    const { scrollYProgress } = useScroll();
    const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -50]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 5]);

    return (
        <SectionWrapper id="about" subtitle="// About Me" title="Bridging code & creativity">
            <div className="relative overflow-hidden">
                {/* Floating background elements */}
                <motion.div
                    style={{ y: y1 }}
                    className="absolute -top-20 -right-20 w-40 h-40 bg-neon-cyan/10 rounded-full blur-3xl"
                />
                <motion.div
                    style={{ y: y2 }}
                    className="absolute -bottom-20 -left-20 w-60 h-60 bg-neon-purple/10 rounded-full blur-3xl"
                />

                <div className="relative z-10 grid md:grid-cols-3 gap-8">
                    {aboutCards.map((card, i) => (
                        <motion.div key={card.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.2, duration: 0.8 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -8 }}
                            className="glass-neon p-8 text-center group">
                            <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">
                                {card.icon}
                            </div>
                            <h3 className="text-2xl font-display font-semibold mb-4 text-neon-cyan">
                                {card.title}
                            </h3>
                            <p className="text-white/70 leading-relaxed">
                                {card.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>

            <motion.div
                style={{ y: y2, rotate }}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-16 glass-neon p-8 md:p-12 text-center">
                <div className="flex items-center justify-center gap-4 mb-6">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-neon-cyan to-neon-purple flex items-center justify-center text-3xl">
                        👨‍💻
                    </div>
                    <div className="text-left">
                        <h3 className="text-2xl font-display font-bold">Md Arsh Eqbal</h3>
                        <p className="text-neon-cyan">Full Stack Developer & AI Enthusiast</p>
                        <p className="text-white/60 text-sm">Jamshedpur, India · 4th Semester B.Tech</p>
                    </div>
                </div>
                <p className="text-lg text-white/80 max-w-3xl mx-auto">
                    I specialize in creating practical web applications that solve real-world problems.
                    My journey in tech started with curiosity and has evolved into a passion for building
                    innovative solutions using modern web technologies and AI.
                </p>
            </motion.div>
        </SectionWrapper>
    );
}