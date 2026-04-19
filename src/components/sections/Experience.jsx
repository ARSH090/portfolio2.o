import { motion } from "framer-motion";
import SectionWrapper from "../ui/SectionWrapper";
import { EXPERIENCE } from "../../constants";

export default function Experience() {
    return (
        <SectionWrapper id="experience" subtitle="// My Journey" title="Experience & Timeline">
            <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-neon-cyan via-neon-purple to-transparent transform md:-translate-x-px" />

                <div className="space-y-12">
                    {EXPERIENCE.map((exp, i) => (
                        <motion.div key={exp.year}
                            initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.2, duration: 0.8 }}
                            viewport={{ once: true }}
                            className={`relative flex items-center ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                } flex-col md:gap-8`}>

                            {/* Timeline dot */}
                            <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-neon-cyan rounded-full transform -translate-x-1/2 shadow-neon z-10" />

                            {/* Content */}
                            <div className={`ml-16 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'}`}>
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    className="glass-neon p-6 group">
                                    <div className="text-neon-cyan font-mono text-sm mb-2">{exp.year}</div>
                                    <h3 className="text-xl font-display font-bold mb-1">{exp.title}</h3>
                                    <div className="text-neon-purple font-semibold mb-3">{exp.company}</div>
                                    <p className="text-white/70 mb-4 leading-relaxed">{exp.desc}</p>

                                    <div className="flex flex-wrap gap-2">
                                        {exp.skills.map((skill) => (
                                            <span key={skill} className="text-xs px-3 py-1 rounded-full bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/20">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
}