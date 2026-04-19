import { motion } from "framer-motion";
import { FiExternalLink, FiAward, FiClock, FiUser } from "react-icons/fi";
import SectionWrapper from "../ui/SectionWrapper";
import { CERTIFICATES } from "../../constants";

export default function Certificates() {
    return (
        <SectionWrapper id="certificates" subtitle="// Certifications" title="My Learning Journey">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {CERTIFICATES.map((cert, i) => (
                    <motion.div key={cert.title}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1, duration: 0.6 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -8 }}
                        className="glass-neon p-6 group relative overflow-hidden">

                        {/* Background gradient */}
                        <div className="absolute -top-20 -right-20 w-40 h-40 bg-neon-cyan/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="relative">
                            {/* Certificate image */}
                            <div className="w-full h-32 bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 rounded-lg mb-4 flex items-center justify-center">
                                <FiAward className="text-4xl text-neon-cyan" />
                            </div>

                            {/* Certificate details */}
                            <h3 className="text-lg font-display font-bold mb-2 line-clamp-2 group-hover:text-neon-cyan transition-colors">
                                {cert.title}
                            </h3>

                            <div className="space-y-2 mb-4">
                                <div className="flex items-center gap-2 text-sm text-white/60">
                                    <FiUser className="text-neon-purple" />
                                    <span>{cert.issuer}</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-white/60">
                                    <FiClock className="text-neon-purple" />
                                    <span>{cert.date} • {cert.duration}</span>
                                </div>
                            </div>

                            {/* Skills gained */}
                            <div className="mb-4">
                                <div className="text-xs text-white/50 uppercase tracking-wider mb-2">Skills Gained</div>
                                <div className="flex flex-wrap gap-1">
                                    {cert.skills.slice(0, 3).map((skill) => (
                                        <span key={skill} className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/70">
                                            {skill}
                                        </span>
                                    ))}
                                    {cert.skills.length > 3 && (
                                        <span className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/70">
                                            +{cert.skills.length - 3} more
                                        </span>
                                    )}
                                </div>
                            </div>

                            {/* View certificate button */}
                            <a href={cert.link} className="inline-flex items-center gap-2 text-neon-cyan hover:text-white transition-colors text-sm font-medium group-hover:gap-3">
                                View Certificate <FiExternalLink className="transition-transform group-hover:rotate-45" />
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
}