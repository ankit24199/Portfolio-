// ============================================================
// PORTFOLIO DATA — Single source of truth for all content
// ============================================================

export const personalInfo = {
  name: "Ankit Yadav",
  titles: [
    "Software Engineer",
    "MERN Stack Developer",
    "React.js Developer",
    "Node.js Developer",
    "Full Stack Developer",
    "JavaScript Developer",
  ],
  tagline: "Building scalable, secure, and high-performance web applications with modern technologies.",
  summary:
    "MERN Stack Developer with hands-on experience developing scalable and responsive full-stack web applications using React.js, Node.js, Express.js, and MongoDB. Experienced in REST API development, JWT Authentication, reusable React components, database management, and performance optimization. Passionate about writing clean, maintainable code while creating user-centric digital experiences.",
  location: "Indore, Madhya Pradesh",
  email: "ankit.yadav24899@gmail.com",
  phone: "7999174410",
  resumeUrl: "/resume.pdf",
};

export const socialLinks = {
  github: "https://github.com/ankit24199",
  linkedin: "https://linkedin.com/in/ankityadav",
  email: "mailto:ankit.yadav24899@gmail.com",
  phone: "tel:+917999174410",
};

export const stats = [
  { label: "Projects Built", value: 5, suffix: "+" },
  { label: "Experience", value: 6, suffix: " Mo" },
  { label: "Technologies", value: 15, suffix: "+" },
  { label: "Certificates", value: 2, suffix: "" },
];

export const skills = [
  { name: "JavaScript", category: "Programming", level: 90, color: "#F7DF1E", bg: "#F7DF1E1a" },
  { name: "C", category: "Programming", level: 75, color: "#A8B9CC", bg: "#A8B9CC1a" },
  { name: "React.js", category: "Frontend", level: 90, color: "#61DAFB", bg: "#61DAFB1a" },
  { name: "HTML5", category: "Frontend", level: 95, color: "#E34F26", bg: "#E34F261a" },
  { name: "CSS3", category: "Frontend", level: 88, color: "#1572B6", bg: "#1572B61a" },
  { name: "Bootstrap", category: "Frontend", level: 80, color: "#7952B3", bg: "#7952B31a" },
  { name: "Tailwind CSS", category: "Frontend", level: 82, color: "#06B6D4", bg: "#06B6D41a" },
  { name: "Node.js", category: "Backend", level: 85, color: "#339933", bg: "#3399331a" },
  { name: "Express.js", category: "Backend", level: 83, color: "#94a3b8", bg: "#94a3b81a" },
  { name: "MongoDB", category: "Database", level: 82, color: "#47A248", bg: "#47A2481a" },
  { name: "Redux", category: "Libraries", level: 75, color: "#764ABC", bg: "#764ABC1a" },
  { name: "JWT Auth", category: "Libraries", level: 80, color: "#d63aff", bg: "#d63aff1a" },
  { name: "REST APIs", category: "Libraries", level: 88, color: "#FF6C37", bg: "#FF6C371a" },
  { name: "Git", category: "Tools", level: 85, color: "#F05032", bg: "#F050321a" },
  { name: "GitHub", category: "Tools", level: 85, color: "#94a3b8", bg: "#94a3b81a" },
  { name: "Postman", category: "Tools", level: 80, color: "#FF6C37", bg: "#FF6C371a" },
  { name: "VS Code", category: "Tools", level: 90, color: "#007ACC", bg: "#007ACC1a" },
];

export const skillCategories = ["All", "Programming", "Frontend", "Backend", "Database", "Libraries", "Tools"];

export const experience = [
  {
    company: "Dollop Info-Tech Pvt. Ltd.",
    role: "MERN Stack Developer",
    location: "Indore",
    duration: "July 2025 – January 2026",
    type: "Internship",
    description: "Contributed to developing scalable full-stack web applications in an agile team environment.",
    responsibilities: [
      { title: "Full-Stack Development", desc: "Developed scalable full-stack applications using the MERN stack architecture.", emoji: "⚙️" },
      { title: "Reusable Components", desc: "Built modular and reusable React components to accelerate development cycles.", emoji: "🧩" },
      { title: "REST API Integration", desc: "Integrated RESTful APIs and implemented client-server communication protocols.", emoji: "🔌" },
      { title: "Performance Optimization", desc: "Identified and resolved performance bottlenecks, improving load times significantly.", emoji: "⚡" },
      { title: "Team Collaboration", desc: "Collaborated with senior developers in code reviews and agile sprints.", emoji: "👥" },
      { title: "Client-Server Architecture", desc: "Improved client-server communication patterns and API response handling.", emoji: "🖥️" },
    ],
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "REST APIs"],
  },
];

export const projects = [
  {
    id: "smart-tracko",
    title: "Smart Tracko",
    subtitle: "Check-In / Check-Out Management System",
    description: "A comprehensive employee management system enabling real-time check-in/check-out tracking with secure authentication, complete CRUD operations, and a responsive dashboard for HR teams.",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
    features: ["Secure Authentication", "CRUD Operations", "REST APIs", "Real-Time Tracking", "Responsive UI"],
    architecture: "Built on a RESTful architecture with React.js frontend, Express.js/Node.js backend, and MongoDB for flexible data persistence. JWT ensures secure session management.",
    metrics: [{ label: "API Endpoints", value: "15+" }, { label: "Response Time", value: "<200ms" }, { label: "Mobile Ready", value: "100%" }],
    image: "/images/smart-tracko.png",
    githubUrl: "https://github.com/ankit24199/smart-tracko",
    liveUrl: "",
    color: "#6366f1",
    colorRgb: "99,102,241",
  },
  {
    id: "expense-tracker",
    title: "Expense Tracker",
    subtitle: "Personal Finance & Analytics Dashboard",
    description: "A full-featured personal finance application with rich analytics, interactive charts, income/expense tracking, and Excel export capabilities for comprehensive financial management.",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Chart.js"],
    features: ["JWT Authentication", "Expense Analytics", "Dashboard", "Income Tracking", "Pie & Bar Charts", "Excel Export", "Responsive Design"],
    architecture: "Single-page application with React.js and Redux for state management, Chart.js for data visualization, Node/Express REST API, and MongoDB for transaction storage.",
    metrics: [{ label: "Chart Types", value: "3+" }, { label: "Export Formats", value: "Excel" }, { label: "Auth Security", value: "JWT" }],
    image: "/images/expense-tracker.png",
    githubUrl: "https://github.com/ankit24199/expense-tracker",
    liveUrl: "",
    color: "#06b6d4",
    colorRgb: "6,182,212",
  },
  {
    id: "hydroposhan-academy",
    title: "Hydroposhan Academy",
    subtitle: "Educational Institution Website",
    description: "A professional website for Hydroposhan Academy Private Limited — an agriculture education and training institute specializing in hydroponics, microgreens, vertical farming, and Controlled Environment Agriculture (CEA), providing practical, science-based training for students, entrepreneurs, farmers, and professionals.",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Responsive Design"],
    features: ["Course Listings", "Training Programs", "Responsive Layout", "SEO Optimized", "Contact Integration", "Modern UI"],
    architecture: "Built as a modern, responsive web application with optimized performance, SEO best practices, and a clean UI designed to showcase agriculture education programs and training courses.",
    metrics: [{ label: "Pages", value: "10+" }, { label: "Mobile Ready", value: "100%" }, { label: "Load Time", value: "<2s" }],
    image: "/images/hydroposhan-academy.png",
    githubUrl: "",
    liveUrl: "https://hydroposhanacademy.com/",
    color: "#22c55e",
    colorRgb: "34,197,94",
  },
];

export const education = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Vikramaditya Group of Institutions",
    affiliation: "Affiliated with Barkatullah Vishwavidyalaya",
    cgpa: "7.4",
    duration: "2019 – 2022",
    coursework: ["Software Development", "Web Technologies", "Database Systems", "Programming Fundamentals", "Object-Oriented Programming", "Data Structures"],
  },
];

export const certifications = [
  {
    title: "C & C++ Programming",
    issuer: "Sharma Computer Academy",
    date: "2022",
    description: "Comprehensive course covering fundamentals of C and C++ programming, data structures, and algorithms.",
    color: "#A8B9CC",
    letter: "C",
    verifyUrl: "#",
  },
  {
    title: "React.js Development",
    issuer: "Placements Adda",
    date: "2024",
    description: "Advanced React.js course covering hooks, state management, component architecture, and real-world application development.",
    color: "#61DAFB",
    letter: "R",
    verifyUrl: "#",
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Certifications", href: "#certifications" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];
