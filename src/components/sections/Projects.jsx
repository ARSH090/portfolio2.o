import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FiExternalLink, FiStar } from "react-icons/fi";
import SectionWrapper from "../ui/SectionWrapper";
import { PROJECTS } from "../../constants";

function ProjectCard({ project, index }) {
    const ref = useRef(null);
    const mx = useMotionValue(0);
    const my = useMotionValue(0);
    const rx = useSpring(useTransform(my, [-0.5, 0.5], [10, -10]), { stiffness: 200, damping: 20 });
    const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-10, 10]), { stiffness: 200, damping: 20 });

    const onMove = (e) => {
        const r = ref.current.getBoundingClientRect();
        mx.set((e.clientX - r.left) / r.width - 0.5);
        my.set((e.clientY - r.top) / r.height - 0.5);
    };
    const reset = () => { mx.set(0); my.set(0); };

    return (
        <motion.a
            href={project.link}
            ref={ref}
            onMouseMove={onMove}
            onMouseLeave={reset}
            style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-neon group relative block overflow-hidden aspect-[4/3]"
        >
            <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

            <div className="relative h-full p-6 flex flex-col justify-end" style={{ transform: "translateZ(40px)" }}>
                <p className="text-xs text-neon-cyan font-mono tracking-widest mb-2">
                    {project.category}
                </p>
                <h3 className="text-2xl font-display font-bold mb-2">{project.title}</h3>
                <p className="text-sm text-white/60 mb-4 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {project.desc}
                </p>

                {/* Features */}
                {project.features && (
                    <div className="mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="flex flex-wrap gap-1 mb-2">
                            {project.features.slice(0, 2).map((feature) => (
                                <span key={feature} className="text-xs px-2 py-1 rounded-full bg-neon-cyan/20 text-neon-cyan border border-neon-cyan/30">
                                    ✓ {feature}
                                </span>
                            ))}
                        </div>
                    </div>
                )}

                <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                        <span key={t} className="text-[10px] px-2 py-1 rounded-full bg-white/5 border border-white/10 text-white/70">
                            {t}
                        </span>
                    ))}
                </div>
                <FiExternalLink className="absolute top-6 right-6 text-xl text-white/60 group-hover:text-neon-cyan group-hover:rotate-45 transition-all" />
            </div>
        </motion.a>
    );
}

export default function Projects() {
    return (
        <SectionWrapper id="projects" subtitle="// Selected Work" title="Featured Projects">
            <div className="grid md:grid-cols-2 gap-6" style={{ perspective: 1200 }}>
                {PROJECTS.map((p, i) => <ProjectCard key={p.title} project={p} index={i} />)}
            </div>
        </SectionWrapper>
    );
}