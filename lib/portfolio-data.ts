// ============================================================
// PORTFOLIO DATA — Single source of truth for all content
// Edit this file to update the portfolio without touching components
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
  avatar: "/images/profile.jpg",
};

export const socialLinks = {
  github: "https://github.com/ankityadav",
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
  // Programming
  { name: "JavaScript", category: "Programming", level: 90, icon: "SiJavascript", color: "#F7DF1E" },
  { name: "C", category: "Programming", level: 75, icon: "SiC", color: "#A8B9CC" },

  // Frontend
  { name: "React.js", category: "Frontend", level: 90, icon: "SiReact", color: "#61DAFB" },
  { name: "HTML5", category: "Frontend", level: 95, icon: "SiHtml5", color: "#E34F26" },
  { name: "CSS3", category: "Frontend", level: 88, icon: "SiCss3", color: "#1572B6" },
  { name: "Bootstrap", category: "Frontend", level: 80, icon: "SiBootstrap", color: "#7952B3" },
  { name: "Tailwind CSS", category: "Frontend", level: 82, icon: "SiTailwindcss", color: "#06B6D4" },

  // Backend
  { name: "Node.js", category: "Backend", level: 85, icon: "SiNodedotjs", color: "#339933" },
  { name: "Express.js", category: "Backend", level: 83, icon: "SiExpress", color: "#ffffff" },

  // Database
  { name: "MongoDB", category: "Database", level: 82, icon: "SiMongodb", color: "#47A248" },

  // Libraries
  { name: "Redux", category: "Libraries", level: 75, icon: "SiRedux", color: "#764ABC" },
  { name: "JWT Auth", category: "Libraries", level: 80, icon: "SiJsonwebtokens", color: "#d63aff" },
  { name: "REST APIs", category: "Libraries", level: 88, icon: "SiPostman", color: "#FF6C37" },

  // Tools
  { name: "Git", category: "Tools", level: 85, icon: "SiGit", color: "#F05032" },
  { name: "GitHub", category: "Tools", level: 85, icon: "SiGithub", color: "#ffffff" },
  { name: "Postman", category: "Tools", level: 80, icon: "SiPostman", color: "#FF6C37" },
  { name: "VS Code", category: "Tools", level: 90, icon: "SiVisualstudiocode", color: "#007ACC" },
];

export const skillCategories = ["All", "Programming", "Frontend", "Backend", "Database", "Libraries", "Tools"];

export const experience = [
  {
    company: "Dollop Info-Tech Pvt. Ltd.",
    role: "MERN Stack Developer",
    location: "Indore",
    duration: "July 2025 – January 2026",
    type: "Internship",
    description:
      "Contributed to developing scalable full-stack web applications in an agile team environment.",
    responsibilities: [
      {
        title: "Full-Stack Development",
        desc: "Developed scalable full-stack applications using the MERN stack architecture.",
        icon: "Code2",
      },
      {
        title: "Reusable Components",
        desc: "Built modular and reusable React components to accelerate development cycles.",
        icon: "Layers",
      },
      {
        title: "REST API Integration",
        desc: "Integrated RESTful APIs and implemented client-server communication protocols.",
        icon: "Plug",
      },
      {
        title: "Performance Optimization",
        desc: "Identified and resolved performance bottlenecks, improving load times significantly.",
        icon: "Zap",
      },
      {
        title: "Team Collaboration",
        desc: "Collaborated with senior developers in code reviews and agile sprints.",
        icon: "Users",
      },
      {
        title: "Client-Server Architecture",
        desc: "Improved client-server communication patterns and API response handling.",
        icon: "Server",
      },
    ],
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "REST APIs"],
  },
];

export const projects = [
  {
    id: "smart-tracko",
    title: "Smart Tracko",
    subtitle: "Check-In / Check-Out Management System",
    description:
      "A comprehensive employee management system enabling real-time check-in/check-out tracking with secure authentication, complete CRUD operations, and a responsive dashboard for HR teams.",
    image: "/images/smart-tracko.png",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
    features: [
      { label: "Secure Authentication", icon: "Shield" },
      { label: "CRUD Operations", icon: "Database" },
      { label: "REST APIs", icon: "Plug" },
      { label: "Real-Time Tracking", icon: "Activity" },
      { label: "Responsive UI", icon: "Monitor" },
    ],
    architecture:
      "Built on a RESTful architecture with React.js frontend, Express.js/Node.js backend, and MongoDB for flexible data persistence. JWT ensures secure session management.",
    metrics: [
      { label: "API Endpoints", value: "15+" },
      { label: "Response Time", value: "<200ms" },
      { label: "Mobile Ready", value: "100%" },
    ],
    githubUrl: "https://github.com/ankityadav/smart-tracko",
    liveUrl: "#",
    featured: true,
    color: "#6366f1",
  },
  {
    id: "expense-tracker",
    title: "Expense Tracker",
    subtitle: "Personal Finance & Analytics Dashboard",
    description:
      "A full-featured personal finance application with rich analytics, interactive charts, income/expense tracking, and Excel export capabilities for comprehensive financial management.",
    image: "/images/expense-tracker.png",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Chart.js"],
    features: [
      { label: "JWT Authentication", icon: "Lock" },
      { label: "Expense Analytics", icon: "BarChart2" },
      { label: "Dashboard Overview", icon: "LayoutDashboard" },
      { label: "Income Tracking", icon: "TrendingUp" },
      { label: "Pie & Bar Charts", icon: "PieChart" },
      { label: "Excel Export", icon: "FileSpreadsheet" },
      { label: "Responsive Design", icon: "Monitor" },
    ],
    architecture:
      "Single-page application with React.js and Redux for state management, Chart.js for data visualization, Node/Express REST API, and MongoDB for transaction storage.",
    metrics: [
      { label: "Chart Types", value: "3+" },
      { label: "Export Formats", value: "Excel" },
      { label: "Auth Security", value: "JWT" },
    ],
    githubUrl: "https://github.com/ankityadav/expense-tracker",
    liveUrl: "#",
    featured: true,
    color: "#06b6d4",
  },
];

export const education = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Vikramaditya Group of Institutions",
    affiliation: "Affiliated with Barkatullah Vishwavidyalaya",
    cgpa: "7.4",
    duration: "2022 – 2025",
    coursework: [
      "Software Development",
      "Web Technologies",
      "Database Systems",
      "Programming Fundamentals",
      "Object-Oriented Programming",
      "Data Structures",
    ],
  },
];

export const certifications = [
  {
    title: "C & C++ Programming",
    issuer: "Sharma Computer Academy",
    date: "2022",
    description: "Comprehensive course covering fundamentals of C and C++ programming, data structures, and algorithms.",
    color: "#A8B9CC",
    icon: "SiC",
    verifyUrl: "#",
  },
  {
    title: "React.js Development",
    issuer: "Placements Adda",
    date: "2024",
    description: "Advanced React.js course covering hooks, state management, component architecture, and real-world application development.",
    color: "#61DAFB",
    icon: "SiReact",
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
