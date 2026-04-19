import { useState } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiInstagram, FiMessageCircle, FiMail, FiSend } from "react-icons/fi";
import SectionWrapper from "../ui/SectionWrapper";
import MagneticButton from "../ui/MagneticButton";

const socials = [
    { Icon: FiGithub, href: "https://github.com/Arsh12145", label: "GitHub" },
    { Icon: FiLinkedin, href: "https://www.linkedin.com/in/md-arsh-eqbal-569829345?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", label: "LinkedIn" },
    { Icon: FiInstagram, href: "https://www.instagram.com/look_itz_arshu?igsh=Z3oxd205M2RtdDFw", label: "Instagram" },
    { Icon: FiMessageCircle, href: "https://wa.me/919608846764", label: "WhatsApp" },
];

export default function Contact() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [sent, setSent] = useState(false);
    const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
    const submit = (e) => { e.preventDefault(); setSent(true); setTimeout(() => setSent(false), 3000); };

    const input = "w-full bg-transparent border border-white/10 rounded-xl px-4 py-3 " +
        "focus:border-neon-cyan focus:shadow-neon outline-none transition placeholder-white/30";

    return (
        <SectionWrapper id="contact" subtitle="// Let's Connect" title="Ready to Start a Project?">
            <div className="grid lg:grid-cols-[1fr_1.3fr] gap-10 items-start">
                <div>
                    <p className="text-white/60 leading-relaxed mb-8">
                        Ready to build something impactful together? Let's connect and collaborate!
                        I usually reply within 24 hours.
                    </p>

                    <div className="space-y-4 text-sm font-mono text-white/80 mb-8">
                        <div className="flex items-center gap-3">
                            <FiMail className="text-neon-cyan" />
                            <a href="mailto:Arshh12145@gmail.com" className="hover:text-neon-cyan transition-colors">
                                Arshh12145@gmail.com
                            </a>
                        </div>
                        <div className="flex items-center gap-3">
                            <FiMessageCircle className="text-neon-cyan" />
                            <span>+91 9608846764</span>
                        </div>
                        <div className="flex items-center gap-3">
                            📍
                            <span>Jamshedpur, India</span>
                        </div>
                    </div>

                    <div className="mb-8">
                        <h4 className="text-lg font-display font-semibold mb-4">Follow My Journey</h4>
                        <div className="flex gap-4">
                            {socials.map(({ Icon, href, label }, i) => (
                                <a key={i} href={href} target="_blank" rel="noopener noreferrer"
                                    className="w-12 h-12 glass rounded-full flex items-center justify-center text-white/70 hover:text-neon-cyan hover:shadow-neon transition-all group"
                                    title={label}>
                                    <Icon className="text-xl group-hover:scale-110 transition-transform" />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="glass-neon p-6">
                        <h4 className="text-lg font-display font-semibold mb-3">Quick Actions</h4>
                        <div className="space-y-3">
                            <a href="https://drive.google.com/file/d/19ChCkUncuWgthhgDlrCW6f8isU_ChsLz/view?usp=drivesdk"
                                target="_blank" rel="noopener noreferrer"
                                className="btn-outline-neon w-full justify-center">
                                📄 Download CV
                            </a>
                            <a href="mailto:Arshh12145@gmail.com?subject=Portfolio%20Feedback"
                                className="btn-outline-neon w-full justify-center">
                                💬 Send Feedback
                            </a>
                        </div>
                    </div>
                </div>

                <motion.form onSubmit={submit}
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="glass-neon p-8 space-y-5">
                    <div>
                        <label className="text-xs text-white/50 uppercase tracking-widest mb-2 block">Name</label>
                        <input required name="name" value={form.name} onChange={onChange}
                            placeholder="Your name" className={input} />
                    </div>
                    <div>
                        <label className="text-xs text-white/50 uppercase tracking-widest mb-2 block">Email</label>
                        <input required type="email" name="email" value={form.email} onChange={onChange}
                            placeholder="you@domain.com" className={input} />
                    </div>
                    <div>
                        <label className="text-xs text-white/50 uppercase tracking-widest mb-2 block">Message</label>
                        <textarea required rows={5} name="message" value={form.message}
                            onChange={onChange} placeholder="Tell me about your project..."
                            className={`${input} resize-none`} />
                    </div>
                    <MagneticButton type="submit" className="btn-neon w-full justify-center">
                        {sent ? "✓ Message Sent" : <>Send Message <FiSend /></>}
                    </MagneticButton>
                </motion.form>
            </div>
        </SectionWrapper>
    );
}