import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import SectionWrapper from "../ui/SectionWrapper";
import { SERVICES } from "../../constants";

export default function Services() {
    return (
        <SectionWrapper id="services" subtitle="// What I Offer" title="Services">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {SERVICES.map((s, i) => (
                    <motion.div key={s.title}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1, duration: 0.6 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -8 }}
                        className="glass-neon p-6 group cursor-pointer relative overflow-hidden">
                        <div className="absolute -top-20 -right-20 w-40 h-40 bg-neon-cyan/20 blur-3xl
                            opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative w-14 h-14 rounded-xl glass flex items-center justify-center
                            mb-5 group-hover:shadow-neon transition-all">
                            <s.Icon className="text-2xl text-neon-cyan" />
                        </div>
                        <h3 className="text-xl font-display font-semibold mb-2">{s.title}</h3>
                        <p className="text-sm text-white/60 leading-relaxed mb-5">{s.desc}</p>
                        <div className="flex items-center gap-2 text-neon-cyan text-sm font-medium
                            group-hover:gap-3 transition-all">
                            Learn More <FiArrowRight />
                        </div>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
}