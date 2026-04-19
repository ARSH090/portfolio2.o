import {
    SiReact,
    SiNextdotjs,
    SiJavascript,
    SiPython,
    SiNodedotjs,
    SiMongodb,
    SiTailwindcss,
    SiHtml5,
    SiGit,
    SiExpress,
    SiFigma,
    SiThreedotjs,
    SiTypescript
} from "react-icons/si";
import { FiCode, FiLayout, FiSmartphone, FiTrendingUp, FiAward, FiUsers, FiBriefcase, FiStar } from "react-icons/fi";

export const NAV_LINKS = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Certificates", href: "#certificates" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
];

export const HERO_STATS = [
    { value: "2+", label: "Years Experience", icon: FiBriefcase },
    { value: "10+", label: "Projects Completed", icon: FiCode },
    { value: "3+", label: "Certificates", icon: FiAward },
    { value: "5+", label: "Happy Clients", icon: FiUsers },
];

export const SKILLS = [
    { name: "HTML", level: 95, Icon: SiHtml5, color: "#e34f26" },
    { name: "CSS", level: 90, Icon: FiCode, color: "#1572b6" },
    { name: "JavaScript", level: 88, Icon: SiJavascript, color: "#f7df1e" },
    { name: "React", level: 92, Icon: SiReact, color: "#61dafb" },
    { name: "Python", level: 85, Icon: SiPython, color: "#3776ab" },
    { name: "Node.js", level: 87, Icon: SiNodedotjs, color: "#339933" },
    { name: "Next.js", level: 90, Icon: SiNextdotjs, color: "#000000" },
    { name: "Tailwind CSS", level: 95, Icon: SiTailwindcss, color: "#06b6d4" },
    { name: "Git", level: 88, Icon: SiGit, color: "#f05032" },
    { name: "MongoDB", level: 82, Icon: SiMongodb, color: "#47a248" },
    { name: "Express.js", level: 85, Icon: SiExpress, color: "#000000" },
    { name: "TypeScript", level: 80, Icon: SiTypescript, color: "#3178c6" },
    { name: "Three.js", level: 75, Icon: SiThreedotjs, color: "#049ef4" },
    { name: "Figma", level: 78, Icon: SiFigma, color: "#f24e1e" },
];

export const EXPERIENCE = [{
        year: "2023 - Present",
        title: "Full Stack Developer",
        company: "Freelance",
        desc: "Building practical web applications and AI-powered tools. Working with modern technologies like React, Node.js, and Python.",
        skills: ["React", "Node.js", "Python", "AI Integration"]
    },
    {
        year: "2022 - 2023",
        title: "Web Development Intern",
        company: "Various Projects",
        desc: "Developed responsive websites and learned modern web development practices. Built projects using HTML, CSS, JavaScript.",
        skills: ["HTML", "CSS", "JavaScript", "Responsive Design"]
    },
    {
        year: "2021 - 2022",
        title: "Self-Learning Developer",
        company: "Personal Projects",
        desc: "Started my journey in web development through self-study and building personal projects. Learned fundamentals and best practices.",
        skills: ["HTML", "CSS", "JavaScript", "Git"]
    }
];

export const PROJECTS = [{
        title: "TaskFlow AI",
        category: "AI · Productivity",
        desc: "An intelligent task management companion with AI planning, focus timer, and gamification features. Built with modern web technologies for optimal productivity.",
        tech: ["React", "JavaScript", "CSS", "AI Integration"],
        image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=900",
        link: "#",
        features: ["AI-powered task planning", "Focus timer functionality", "Gamification elements", "Intelligent task management"]
    },
    {
        title: "PDF Wizard",
        category: "Tools · Productivity",
        desc: "A comprehensive PDF toolkit offering merge, split, compress, convert, protect, and OCR functionality. Fast, secure, and free to use.",
        tech: ["JavaScript", "PDF.js", "Web APIs", "File Processing"],
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=900",
        link: "#",
        features: ["PDF merging & splitting", "File compression", "Format conversion", "Password protection & OCR"]
    },
    {
        title: "AI Chat Assistant",
        category: "AI · Web App",
        desc: "Intelligent chatbot with natural language processing capabilities. Built with modern AI APIs and responsive design.",
        tech: ["React", "Node.js", "AI APIs", "WebSockets"],
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=900",
        link: "#",
        features: ["Natural language processing", "Real-time responses", "Customizable personality", "Multi-platform support"]
    },
    {
        title: "E-Commerce Dashboard",
        category: "Business · Analytics",
        desc: "Comprehensive dashboard for e-commerce businesses with real-time analytics, inventory management, and sales tracking.",
        tech: ["Next.js", "MongoDB", "Chart.js", "Tailwind CSS"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900",
        link: "#",
        features: ["Real-time analytics", "Inventory management", "Sales tracking", "Revenue insights"]
    },
];

export const CERTIFICATES = [{
        title: "2025 Python Crash Course For Absolute Beginners in Hindi",
        issuer: "Udemy",
        instructor: "Vijay Patel",
        date: "January 10, 2025",
        duration: "3 total hours",
        skills: ["Python", "Programming Fundamentals", "Hindi Language Learning", "Beginner Programming"],
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400",
        credentialId: "UC-9ecd1405-703d-4130-b3cf-6c02ae825861",
        link: "#"
    },
    {
        title: "JavaScript Algorithms and Data Structures",
        issuer: "freeCodeCamp",
        instructor: "freeCodeCamp Team",
        date: "2024",
        duration: "300+ hours",
        skills: ["JavaScript", "Algorithms", "Data Structures", "Problem Solving"],
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400",
        credentialId: "FCC-JS-DS",
        link: "#"
    },
    {
        title: "React Developer Certification",
        issuer: "Meta",
        instructor: "Meta Developer Team",
        date: "2024",
        duration: "40 hours",
        skills: ["React", "JavaScript", "Frontend Development", "UI/UX"],
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400",
        credentialId: "META-REACT-2024",
        link: "#"
    }
];

export const TESTIMONIALS = [{
        name: "Sarah Johnson",
        role: "Project Manager",
        company: "TechCorp",
        image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100",
        content: "Arsh delivered an exceptional website that exceeded our expectations. His attention to detail and problem-solving skills are impressive.",
        rating: 5
    },
    {
        name: "Michael Chen",
        role: "Startup Founder",
        company: "InnovateLab",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100",
        content: "Working with Arsh was a pleasure. He understood our vision perfectly and translated it into a functional, beautiful product.",
        rating: 5
    },
    {
        name: "Emily Rodriguez",
        role: "Product Designer",
        company: "DesignStudio",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100",
        content: "Arsh's technical skills combined with his creative approach made our collaboration incredibly productive. Highly recommended!",
        rating: 5
    }
];

export const SERVICES = [{
        title: "Full Stack Web Development",
        Icon: FiCode,
        desc: "Building end-to-end web applications with modern technologies. From concept to deployment, I handle everything.",
        features: ["Custom Web Apps", "API Development", "Database Design", "Performance Optimization"]
    },
    {
        title: "AI Integration",
        Icon: FiTrendingUp,
        desc: "Integrating artificial intelligence capabilities into web applications for enhanced user experiences.",
        features: ["Chatbots", "Recommendation Systems", "Data Analysis", "Automation Tools"]
    },
    {
        title: "UI/UX Development",
        Icon: FiLayout,
        desc: "Creating beautiful, responsive, and user-friendly interfaces that provide exceptional user experiences.",
        features: ["Responsive Design", "Interactive Animations", "Accessibility", "Modern UI Patterns"]
    },
    {
        title: "Performance Optimization",
        Icon: FiTrendingUp,
        desc: "Optimizing web applications for speed, scalability, and better user experience across all devices.",
        features: ["Core Web Vitals", "SEO Optimization", "Load Time Reduction", "Mobile Optimization"]
    },
];