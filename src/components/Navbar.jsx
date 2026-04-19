import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { NAV_LINKS } from "../constants";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 30);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -60, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className={`fixed top-0 inset-x-0 z-50 transition-all duration-500
        ${scrolled ? "py-3 backdrop-blur-xl bg-black/40 border-b border-white/5" : "py-5"}`}>
            <nav className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
                <a href="#home" className="font-display text-xl font-bold">
                    <span className="neon-text">{"< Arsh />"}</span>
                </a>

                <ul className="hidden md:flex items-center gap-8 text-sm">
                    {NAV_LINKS.map((l) => (
                        <li key={l.name}>
                            <a href={l.href}
                                className="text-white/70 hover:text-neon-cyan transition-colors relative group">
                                {l.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-px bg-neon-cyan
                                 group-hover:w-full transition-all duration-300" />
                            </a>
                        </li>
                    ))}
                    <li><a href="#contact" className="btn-neon !py-2 !px-5">Hire Me</a></li>
                </ul>

                <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
                    {open ? <FiX /> : <FiMenu />}
                </button>
            </nav>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="md:hidden overflow-hidden bg-black/90 backdrop-blur-xl">
                        <ul className="flex flex-col p-6 gap-5">
                            {NAV_LINKS.map((l) => (
                                <li key={l.name}>
                                    <a onClick={() => setOpen(false)} href={l.href}
                                        className="text-white/80 hover:text-neon-cyan">{l.name}</a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}