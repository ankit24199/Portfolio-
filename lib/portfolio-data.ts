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
  { label: "Experience", value: 6, suffix: " Months" },
  { label: "Technologies", value: 15, suffix: "+" },
  { label: "Certificates", value: 2, suffix: "" },
];

export const skills = [
  { name: "JavaScript", category: "Programming", level: 90, color: "#E6DCA5", bg: "#E6DCA51a" },
  { name: "C", category: "Programming", level: 75, color: "#B5C4D4", bg: "#B5C4D41a" },
  { name: "React.js", category: "Frontend", level: 90, color: "#A5C4D4", bg: "#A5C4D41a" },
  { name: "HTML5", category: "Frontend", level: 95, color: "#D4A5A5", bg: "#D4A5A51a" },
  { name: "CSS3", category: "Frontend", level: 88, color: "#A5B4D4", bg: "#A5B4D41a" },
  { name: "Bootstrap", category: "Frontend", level: 80, color: "#C4A5D4", bg: "#C4A5D41a" },
  { name: "Tailwind CSS", category: "Frontend", level: 82, color: "#A5D4D4", bg: "#A5D4D41a" },
  { name: "Node.js", category: "Backend", level: 85, color: "#A5D4A5", bg: "#A5D4A51a" },
  { name: "Express.js", category: "Backend", level: 83, color: "#B5B5B5", bg: "#B5B5B51a" },
  { name: "MongoDB", category: "Database", level: 82, color: "#A5D4B5", bg: "#A5D4B51a" },
  { name: "Redux", category: "Libraries", level: 75, color: "#C4B5D4", bg: "#C4B5D41a" },
  { name: "JWT Auth", category: "Libraries", level: 80, color: "#D4A5C4", bg: "#D4A5C41a" },
  { name: "REST APIs", category: "Libraries", level: 88, color: "#D4A5A5", bg: "#D4A5A51a" },
  { name: "Git", category: "Tools", level: 85, color: "#D4B5A5", bg: "#D4B5A51a" },
  { name: "GitHub", category: "Tools", level: 85, color: "#C4C4C4", bg: "#C4C4C41a" },
  { name: "Postman", category: "Tools", level: 80, color: "#D4B5B5", bg: "#D4B5B51a" },
  { name: "VS Code", category: "Tools", level: 90, color: "#A5B4D4", bg: "#A5B4D41a" },
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
    color: "#B5B5D4",
    colorRgb: "181,181,212",
  },
  {
    id: "expense-tracker",
    title: "Spendwise",
    subtitle: "Finance & Analytics Dashboard",
    description: "A full-featured personal finance application with rich analytics, interactive charts, income/expense tracking, and Excel export capabilities for comprehensive financial management.",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Chart.js"],
    features: ["JWT Authentication", "Expense Analytics", "Dashboard", "Income Tracking", "Pie & Bar Charts", "Excel Export", "Responsive Design"],
    architecture: "Single-page application with React.js and Redux for state management, Chart.js for data visualization, Node/Express REST API, and MongoDB for transaction storage.",
    metrics: [{ label: "Chart Types", value: "3+" }, { label: "Export Formats", value: "Excel" }, { label: "Auth Security", value: "JWT" }],
    image: "/images/expense-tracker.png",
    githubUrl: "https://github.com/ankit24199/expense-tracker",
    liveUrl: "",
    color: "#A5D4D4",
    colorRgb: "165,212,212",
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
    color: "#B5D4B5",
    colorRgb: "181,212,181",
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
    color: "#B5C4D4",
    letter: "C",
    verifyUrl: "#",
  },
  {
    title: "React.js Development",
    issuer: "Placements Adda",
    date: "2024",
    description: "Advanced React.js course covering hooks, state management, component architecture, and real-world application development.",
    color: "#A5C4D4",
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
