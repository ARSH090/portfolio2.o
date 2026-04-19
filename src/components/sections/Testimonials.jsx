import { motion } from "framer-motion";
import { FiStar, FiMessageSquare } from "react-icons/fi";
import SectionWrapper from "../ui/SectionWrapper";
import { TESTIMONIALS } from "../../constants";

export default function Testimonials() {
    return (
        <SectionWrapper id="testimonials" subtitle="// Testimonials" title="What People Say">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {TESTIMONIALS.map((testimonial, i) => (
                    <motion.div key={testimonial.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.15, duration: 0.6 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -8 }}
                        className="glass-neon p-6 group relative">

                        {/* Quote icon */}
                        <div className="absolute -top-4 -left-4 w-8 h-8 bg-neon-cyan rounded-full flex items-center justify-center shadow-neon">
                            <FiMessageSquare className="text-black text-sm" />
                        </div>

                        {/* Rating stars */}
                        <div className="flex items-center gap-1 mb-4">
                            {[...Array(testimonial.rating)].map((_, starIndex) => (
                                <FiStar key={starIndex} className="text-neon-cyan fill-current" />
                            ))}
                        </div>

                        {/* Testimonial content */}
                        <blockquote className="text-white/80 leading-relaxed mb-6 italic">
                            "{testimonial.content}"
                        </blockquote>

                        {/* Author info */}
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-neon-cyan to-neon-purple flex items-center justify-center text-lg font-bold text-black">
                                {testimonial.name.split(' ').map(n => n[0]).join('')}
                            </div>
                            <div>
                                <div className="font-display font-semibold text-neon-cyan">
                                    {testimonial.name}
                                </div>
                                <div className="text-sm text-white/60">
                                    {testimonial.role} at {testimonial.company}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Call to action */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="mt-16 text-center">
                <div className="glass-neon p-8 max-w-2xl mx-auto">
                    <h3 className="text-2xl font-display font-bold mb-4">Share Your Feedback</h3>
                    <p className="text-white/70 mb-6">
                        Your thoughts and suggestions help me improve. I'd love to hear from you!
                    </p>
                    <a
                        href="mailto:Arshh12145@gmail.com?subject=Portfolio%20Feedback"
                        className="btn-neon inline-block">
                        Send Feedback
                    </a>
                </div>
            </motion.div>
        </SectionWrapper>
    );
}