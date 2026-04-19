import { motion } from "framer-motion";
import SectionWrapper from "../ui/SectionWrapper";
import { SKILLS } from "../../constants";

export default function Skills() {
    return (
        <SectionWrapper id="skills" subtitle="// Tech Stack" title="Skills & Tools">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {SKILLS.map((s, i) => (
                    <motion.div key={s.name}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.05, duration: 0.6 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -6 }}
                        className="glass-neon p-6 group">
                        <div className="flex items-center gap-3 mb-4">
                            <s.Icon className="text-3xl transition-transform group-hover:scale-110"
                                style={{ color: s.color }} />
                            <h3 className="font-semibold">{s.name}</h3>
                        </div>
                        <div className="relative h-1.5 bg-white/5 rounded-full overflow-hidden">
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${s.level}%` }}
                                transition={{ duration: 1.2, delay: i * 0.05, ease: "easeOut" }}
                                viewport={{ once: true }}
                                className="absolute inset-y-0 left-0 rounded-full"
                                style={{
                                    background: `linear-gradient(90deg, ${s.color}, #b14bff)`,
                                    boxShadow: `0 0 12px ${s.color}`,
                                }} />
                        </div>
                        <div className="mt-2 text-right text-xs text-white/50 font-mono">
                            {s.level}%
                        </div>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
}