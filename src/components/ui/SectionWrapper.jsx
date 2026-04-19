import { motion } from "framer-motion";

export default function SectionWrapper({ id, title, subtitle, children }) {
    return (
        <section id={id} className="relative py-24 md:py-32 px-6 md:px-12 lg:px-20">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="max-w-7xl mx-auto">
                {subtitle && (
                    <p className="text-neon-cyan text-sm tracking-[0.3em] uppercase mb-3 font-mono">
                        {subtitle}
                    </p>
                )}
                {title && (
                    <h2 className="text-4xl md:text-6xl font-display font-bold mb-16">
                        {title}
                    </h2>
                )}
                {children}
            </motion.div>
        </section>
    );
}