import { SkillCategory, ProjectItem, TimelineItem, SocialLink, CertificateItem, ServiceItem } from '../types';

export const PERSONAL_INFO = {
  name: "Parshuram Prajapati",
  brand: "Code-By-Parshuram",
  brandCode: "<Code-By-Parshuram />",
  roleTitle: "Web Developer & AI Enthusiast",
  headline: "Hello, I'm Parshuram",
  subheadline: "Web Developer & AI Enthusiast",
  tagline: "Computer Science (AIML) student building modern, responsive web applications while exploring the frontiers of Machine Learning.",
  bio: "Hi, I’m Parshuram Prajapati, a Computer Science undergraduate specializing in AI & Machine Learning at BLDEA College of Engineering, Vijayapur. I enjoy building modern web applications and continuously improving my problem-solving skills using C++, Java, and Python, while learning the fundamentals of AI & ML.",
  college: "BLDEA College of Engineering",
  collegeLocation: "Vijayapur, Karnataka, India",
  degree: "Computer Science & Engineering (AI & Machine Learning)",
  email: "parshuram8792@gmail.com",
  phone: "+91 98765 43210",
  location: "Vijayapur, Karnataka, India",
  status: "Open to Internships, Projects & Full-Time Roles",
  resumeUrl: "https://drive.google.com/file/d/1AXo7qW68c8ERGFmRtAluGY-YN7OsgYGc/view?usp=drive_link",
  livePortfolioUrl: "https://parshuram-portfolio.vercel.app/",
  coreLanguages: ["C", "C++", "Java", "Python", "HTML", "CSS", "JavaScript", "PHP"],
  interests: ["Modern Web Development", "Artificial Intelligence & ML", "Algorithmic Problem Solving", "Cloud Systems", "Clean UI/UX"],
  stats: [
    { label: "Web Projects", value: "5+", suffix: "Built" },
    { label: "Years Learning", value: "2+", suffix: "Experience" },
    { label: "Engineering College", value: "BLDEACET", suffix: "Vijayapur" },
    { label: "DSA & Core Stack", value: "8+", suffix: "Techs" }
  ]
};

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: "web-dev",
    title: "Web Development",
    description: "Modern, responsive websites built with clean HTML5, CSS3, JavaScript, and dynamic architectures.",
    iconName: "Globe",
    accentColor: "#4F7CFF",
    tag: "Core Engineering"
  },
  {
    id: "frontend-dev",
    title: "Front-End Development",
    description: "User-friendly interfaces crafted with modern front-end technologies, React, and responsive design systems.",
    iconName: "Layout",
    accentColor: "#8B6DFF",
    tag: "UI Architecture"
  },
  {
    id: "maintenance",
    title: "Website Maintenance",
    description: "Ongoing optimization, code refactoring, bug fixes, and security patches to keep your site fast and resilient.",
    iconName: "Wrench",
    accentColor: "#10B981",
    tag: "Reliability & Speed"
  },
  {
    id: "content-media",
    title: "Social Media Content",
    description: "Vibrant social media technical content, documentation, and storytelling that engages developer audiences.",
    iconName: "Sparkles",
    accentColor: "#F59E0B",
    tag: "Brand & Story"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "programming",
    title: "Core Languages",
    subtitle: "C, C++, Java, Python, JavaScript, PHP",
    badgeColor: "bg-blue-50 text-blue-600 border-blue-200",
    bgGradient: "from-blue-50/80 via-white to-blue-50/30",
    borderColor: "border-blue-100",
    iconName: "Code2",
    highlight: "Multi-paradigm logic & algorithmic problem solving",
    skills: [
      { name: "C / C++", level: 90, iconName: "Cpu", color: "#00599C", tag: "DSA & Systems", description: "Pointers, memory management, STL, algorithms" },
      { name: "Java", level: 86, iconName: "Coffee", color: "#007396", tag: "OOP & Backend", description: "Object-oriented architecture, Collections, design patterns" },
      { name: "Python", level: 92, iconName: "Terminal", color: "#3776AB", tag: "AI/ML & Automation", description: "NumPy, Pandas, Scikit-Learn, data analytics" },
      { name: "JavaScript (ES6+)", level: 90, iconName: "FileCode", color: "#F7DF1E", tag: "Dynamic Web", description: "Asynchronous JavaScript, DOM manipulation, APIs" },
      { name: "PHP", level: 80, iconName: "FileCode2", color: "#777BB4", tag: "Server Scripting", description: "Backend scripting, server-rendered logic, database queries" }
    ]
  },
  {
    id: "web-dev",
    title: "Web Development",
    subtitle: "Frontend Frameworks & Design",
    badgeColor: "bg-indigo-50 text-indigo-600 border-indigo-200",
    bgGradient: "from-indigo-50/80 via-white to-purple-50/30",
    borderColor: "border-indigo-100",
    iconName: "Globe",
    highlight: "Responsive, accessible, and fast web apps",
    skills: [
      { name: "React.js", level: 90, iconName: "Layers", color: "#61DAFB", tag: "Component SPA", description: "Hooks, state management, routing, component lifecycles" },
      { name: "HTML5 & Semantic Markup", level: 95, iconName: "Code", color: "#E34F26", tag: "Structure & SEO", description: "Clean semantic markup, accessibility, modern standards" },
      { name: "CSS3 & Modern Animations", level: 92, iconName: "Palette", color: "#1572B6", tag: "Styling & Responsive", description: "Flexbox, Grid, keyframes, transitions" },
      { name: "Tailwind CSS", level: 94, iconName: "Sparkles", color: "#06B6D4", tag: "Utility CSS", description: "Modern UI systems, glassmorphism, responsive utilities" },
      { name: "Git & GitHub", level: 89, iconName: "GitBranch", color: "#F05032", tag: "Version Control", description: "Repository management, collaboration, pull requests" }
    ]
  },
  {
    id: "ai",
    title: "Artificial Intelligence & ML",
    subtitle: "BLDEACET Specialization",
    badgeColor: "bg-purple-50 text-purple-600 border-purple-200",
    bgGradient: "from-purple-50/80 via-white to-pink-50/30",
    borderColor: "border-purple-100",
    iconName: "BrainCircuit",
    highlight: "Machine learning pipelines & intelligent applications",
    skills: [
      { name: "Machine Learning (Scikit-Learn)", level: 88, iconName: "Brain", color: "#8B6DFF", tag: "Supervised & Unsupervised", description: "Regression pipelines, classifiers, decision trees" },
      { name: "Prompt Engineering & GenAI", level: 92, iconName: "Bot", color: "#6366F1", tag: "LLM & Prompt Tuning", description: "Few-shot prompting, chain-of-thought, AI workflows" },
      { name: "Data Analysis (Pandas & NumPy)", level: 90, iconName: "Table", color: "#150458", tag: "Data Wrangling", description: "Feature engineering, dataset cleaning, statistical analysis" },
      { name: "AI Disaster Telemetry", level: 86, iconName: "Activity", color: "#4F7CFF", tag: "Hazard Prediction", description: "Sensor fusion algorithms, environmental hazard classification" }
    ]
  },
  {
    id: "problem-solving",
    title: "Problem Solving & DSA",
    subtitle: "Algorithmic Foundations",
    badgeColor: "bg-emerald-50 text-emerald-600 border-emerald-200",
    bgGradient: "from-emerald-50/80 via-white to-teal-50/30",
    borderColor: "border-emerald-100",
    iconName: "Lightbulb",
    highlight: "Efficient computation & algorithmic thinking",
    skills: [
      { name: "Data Structures (Arrays, Stacks, Queues, Trees)", level: 88, iconName: "Database", color: "#059669", tag: "DSA Mastery", description: "Memory layout, dynamic pointers, node hierarchies" },
      { name: "Algorithms (Sorting, Searching, Recursion)", level: 86, iconName: "Workflow", color: "#0D9488", tag: "Optimal Algorithms", description: "Binary search, two pointers, recursive logic" },
      { name: "Time & Space Complexity", level: 85, iconName: "Gauge", color: "#0284C7", tag: "Big-O Efficiency", description: "Algorithm optimization, memory overhead reduction" },
      { name: "Full-Stack Diagnostics", level: 90, iconName: "Bug", color: "#E11D48", tag: "Debugging", description: "Console profiling, breakpoint testing, error handling" }
    ]
  }
];

export const PROJECTS_LIST: ProjectItem[] = [
  {
    id: "snap-class",
    projectNumber: "01",
    title: "Snap Class",
    tagline: "AI-Powered Smart Attendance System",
    shortDescription: "Snap Class is an AI-powered smart attendance system designed to replace traditional manual roll calls with automated and secure attendance using Face Recognition and Voice Biometrics.",
    fullDescription: "Snap Class is a state-of-the-art attendance automation system engineered with deep facial feature extraction and voiceprint verification. It solves proxy attendance and manual administrative overhead by offering dedicated dual portals for students and educators, subject-code self-enrollment, real-time logging, dynamic QR check-ins, and high-precision biometric security.",
    category: "AI / MACHINE LEARNING",
    techTags: [
      "Python",
      "AI",
      "Machine Learning",
      "Face Recognition",
      "Voice Biometrics",
      "Streamlit",
      "Supabase",
      "PostgreSQL"
    ],
    techStack: [
      "Python",
      "Streamlit",
      "Custom CSS",
      "Supabase",
      "PostgreSQL",
      "Supabase Authentication",
      "face_recognition",
      "Dlib",
      "Resemblyzer",
      "scikit-learn",
      "librosa",
      "segno",
      "Pillow"
    ],
    bgTint: "#F5F5FA",
    accentColor: "#8B6DFF",
    githubUrl: "https://github.com/parshuram-prajapati",
    demoUrl: "https://snap-class.streamlit.app",
    metrics: "Dual Biometric Security",
    featured: true,
    imageUrl: "/projects/snap-class.jpg",
    simulationType: "snap-class",
    features: [
      "FaceID Login using facial recognition",
      "Voice biometric authentication",
      "Student Portal",
      "Teacher Portal",
      "QR Code attendance check-in",
      "Automated student enrollment using subject codes",
      "Real-time attendance tracking",
      "Attendance analytics and logs",
      "Secure authentication",
      "Proxy attendance prevention"
    ]
  },
  {
    id: "fatima-school-website",
    projectNumber: "02",
    title: "Fatimah International School Website",
    tagline: "Modern & Responsive Educational Institution Website",
    shortDescription: "A modern, responsive, and feature-rich website developed for Fatimah International School providing information about admissions, academics, facilities, and school services.",
    fullDescription: "A modern, responsive, and feature-rich educational platform built for Fatimah International School in Vijayapura. Developed to provide comprehensive information about admissions, academic curriculum, extracurricular activities, facilities, and mandatory disclosures while delivering a lightning-fast, engaging user experience with dynamic Supabase integration and verified form validations.",
    category: "WEB DEVELOPMENT",
    techTags: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "Vite",
      "Shadcn UI",
      "Web Development"
    ],
    techStack: [
      "React 18",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Shadcn UI",
      "Lucide Icons",
      "Supabase",
      "React Hook Form",
      "Zod",
      "TanStack Query",
      "React Router",
      "Vercel"
    ],
    bgTint: "#EAF8F5",
    accentColor: "#4F7CFF",
    githubUrl: "https://github.com/parshuram-prajapati",
    demoUrl: "https://fatimahinternationalschool.com",
    metrics: "100% Mobile & Desktop Responsive",
    featured: true,
    imageUrl: "/projects/fatima-school.jpg",
    simulationType: "fatima-school",
    features: [
      "Modern and professional UI/UX",
      "Fully responsive design",
      "Optimized for mobile, tablet, and desktop",
      "Fast performance using Vite",
      "Dynamic content",
      "Supabase backend integration",
      "Interactive carousels",
      "Animated UI components",
      "Forms with validation",
      "Client-side routing"
    ]
  }
];

export const ACHIEVEMENTS_TIMELINE: TimelineItem[] = [
  {
    id: "ai-arena-2-2026",
    year: "2026",
    period: "25th March 2026",
    title: "AI Arena 2.0 Hackathon Participation",
    organizationOrContext: "IEEE BLDEACET (STB 30721), Vijayapura",
    category: "Hackathon",
    description: "Competed in AI Arena 2.0 organized by IEEE Student Branch BLDEACET under IEEE Bangalore Section, demonstrating innovation and prototyping abilities in artificial intelligence.",
    tags: ["IEEE BLDEACET", "AI Arena 2.0", "#AIHACKATHON", "Bangalore Section"],
    icon: "Trophy",
    highlightBadge: "IEEE AI Arena 2.0"
  },
  {
    id: "hackaura-2026",
    year: "2026",
    period: "12th & 13th March 2026",
    title: "HackAura 2026 Hackathon Participation",
    organizationOrContext: "VSM's SRKIT, Nipani",
    category: "Hackathon",
    description: "Represented BLDEA's College of Engineering at HackAura 'Hack, Create, Elevate' 2026 organized by VSMSRKIT Nipani, contributing technical solutions under competitive time constraints.",
    tags: ["HackAura 2026", "VSMSRKIT Nipani", "BLDEACET", "Hackathon"],
    icon: "ShieldAlert",
    highlightBadge: "HackAura 2026"
  },
  {
    id: "ai-literacy-ibm-2025",
    year: "2025",
    period: "20th December 2025",
    title: "AI Literacy Digital Credential",
    organizationOrContext: "IBM SkillsBuild",
    category: "AI / ML",
    description: "Earned the official AI Literacy Digital Credential (PLAN-1C903152880C) from IBM SkillsBuild, validating foundational understanding of AI concepts, machine learning, and ethics.",
    tags: ["IBM SkillsBuild", "PLAN-1C903152880C", "AI Literacy", "Digital Credential"],
    icon: "Cpu",
    highlightBadge: "IBM SkillsBuild Certified"
  },
  {
    id: "hackvyuha-2025",
    year: "2025",
    period: "Hackathon Leadership",
    title: "Hackvyuha Hackathon Organizer",
    organizationOrContext: "HackYuva",
    category: "Hackathon",
    description: "Led and organized the Hackvyuha Hackathon under HackYuva, coordinating technical challenges, student teams, and developer logistics.",
    tags: ["HackYuva", "Hackvyuha", "Organizer", "Leadership", "Event Management"],
    icon: "Trophy",
    highlightBadge: "Hackathon Organizer"
  }
];

export const CERTIFICATES_LIST: CertificateItem[] = [
  {
    id: "hackaura-2026-cert",
    title: "HackAura 2026 – Certificate of Participation",
    issuer: "VSM's Somashkhar R. Kothiwale Institute of Technology, Nipani",
    issueDate: "12th & 13th March 2026",
    eventDates: "12th & 13th March 2026",
    credentialId: "VSMSRKIT-HACKAURA-2026",
    category: "Hackathon",
    skills: ["Hack, Create, Elevate", "Rapid Prototyping", "Full-Stack Development", "Team Innovation"],
    accentColor: "#4F7CFF",
    badgeIcon: "Award",
    previewGradient: "from-[#4F7CFF]/15 via-blue-50 to-white",
    imageUrl: "/src/assets/images/hackaura_cert_1788179723900.jpg",
    verificationUrl: "https://vsmsrkit.edu.in/",
    description: "Certificate of Participation in HackAura 2026 'Hack, Create, Elevate' organized by Vidya Samvardhak Mandal's Somashekhar R. Kothiwale Institute of Technology, Nipani for significant contribution and technical innovation.",
    sealText: "HACKAURA PARTICIPATION RECORD",
    certificateType: "hackaura",
    recipientName: "Mr. Parshuram R Prajapati",
    institutionHeader: "VIDYA SAMVARDHAK MANDAL'S SOMASHEKHAR R. KOTHIWALE INSTITUTE OF TECHNOLOGY, NIPANI",
    subHeader: 'HackAura "Hack, Create, Elevate" 2026',
    signatories: [
      { role: "Chairman", name: "Shri. Chandrakant Kothiwale" },
      { role: "CEO", name: "Dr. Siddagouda Patil" },
      { role: "Principal", name: "Dr. Umesh Patil" }
    ]
  },
  {
    id: "ai-arena-2-cert",
    title: "AI Arena 2.0 – Certificate of Participation",
    issuer: "IEEE BLDEACET Student Branch",
    issueDate: "25th March 2026",
    eventDates: "25th March 2026",
    credentialId: "IEEE-BLDEACET-AIA2-2026",
    category: "AI & Hackathon",
    skills: ["Artificial Intelligence", "Innovation & Prototyping", "IEEE Bangalore Section", "Competitive AI"],
    accentColor: "#10B981",
    badgeIcon: "Trophy",
    previewGradient: "from-emerald-500/15 via-teal-50 to-white",
    imageUrl: "/src/assets/images/ai_arena_cert_1788179744673.jpeg",
    verificationUrl: "https://bldeacet.ac.in/",
    description: "Certificate of Participation awarded for demonstrating innovation and prototyping abilities in artificial intelligence at AI Arena 2.0, organized by IEEE BLDEACET Student Branch (STB 30721) at BLDEA's V.P. Dr. P.G. Halakatti College of Engineering & Technology, Vijayapura under IEEE Bangalore Section.",
    sealText: "IEEE BLDEACET PARTICIPANT",
    certificateType: "ai-arena-2",
    recipientName: "Parshuram Prajapati",
    institutionHeader: "BLDEA'S V. P. DR. P. G. HALAKATTI COLLEGE OF ENGINEERING & TECHNOLOGY, VIJAYAPURA",
    subHeader: "IEEE STUDENT BRANCH BLDEACET (STB 30721)",
    hashtag: "#AIHACKATHON",
    signatories: [
      { role: "IEEE Senior Advisor BLDEACET", name: "Dr. Veeresh Gonal" },
      { role: "Branch Counselor IEEE SB", name: "Dr. Shweta Patil" },
      { role: "Principal BLDEACET", name: "Dr. Manjunath P" }
    ]
  },
  {
    id: "ibm-ai-literacy",
    title: "AI Literacy (Earn a digital credential!)",
    issuer: "IBM SkillsBuild",
    issueDate: "20th December 2025",
    credentialId: "PLAN-1C903152880C",
    planCode: "PLAN-1C903152880C",
    category: "AI & Machine Learning",
    skills: ["AI Fundamentals", "Machine Learning Concepts", "Cognitive Systems", "AI Ethics"],
    accentColor: "#8B6DFF",
    badgeIcon: "BrainCircuit",
    previewGradient: "from-[#8B6DFF]/15 via-purple-50 to-white",
    imageUrl: "/src/assets/images/ibm_skillsbuild_cert_1788179706080.jpg",
    verificationUrl: "https://skillsbuild.org/",
    description: "Official Completion Certificate awarded by IBM SkillsBuild for successfully completing the AI Literacy curriculum according to the Your Learning Builder - Plans system of record.",
    sealText: "IBM SKILLSBUILD DIGITAL CREDENTIAL",
    certificateType: "ibm-skillsbuild",
    recipientName: "Parashuram Prajapati",
    institutionHeader: "IBM SkillsBuild Completion Certificate",
    subHeader: "According to the Your Learning Builder - Plans system of record"
  },
  {
    id: "hackyuha-2025-cert",
    title: "HackYuha 2025 – Certificate of Appreciation",
    issuer: "BLDEACET & Shri B M Patil Foundation for Innovation and Incubation",
    issueDate: "2025",
    achievement: "Organizing Team Member",
    credentialId: "BLDEA-HACKYUHA-2025-ORG",
    category: "Organizing & Leadership",
    skills: ["Hackathon Organizing", "Team Leadership", "Event Coordination", "Technical Community"],
    accentColor: "#F59E0B",
    badgeIcon: "Sparkles",
    previewGradient: "from-amber-500/15 via-orange-50 to-white",
    imageUrl: "/src/assets/images/hackyuha_cert_1788180205856.jpg",
    verificationUrl: "https://bldeacet.ac.in/",
    description: "Certificate of Appreciation awarded to Parshuram P. for dedicated support and contribution as an organizing team member during HackVyuha 2025, ensuring a smooth and impactful experience for all participants. Presented by Shri B M Patil Foundation for Innovation and Incubation, BLDEACET, InnovaScape, and Institution's Innovation Council.",
    sealText: "ORGANIZING TEAM RECOGNITION",
    certificateType: "hackyuha",
    recipientName: "Parshuram P.",
    institutionHeader: "SHRI B M PATIL FOUNDATION FOR INNOVATION AND INCUBATION & BLDEACET",
    subHeader: "HackVyuha 2025 Organizing Team Member",
    signatories: [
      { role: "General Secretary & Director", name: "Sunilgouda Patil" },
      { role: "Director & Principal BLDEACET", name: "Dr. V. G. Sangam" }
    ]
  }
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "LinkedIn",
    handle: "parashuram-prajapati-97659a32a",
    url: "https://www.linkedin.com/in/parashuram-prajapati-97659a32a/",
    icon: "Linkedin",
    actionType: "link",
    bgColor: "bg-[#E8F2FF]",
    textColor: "text-[#4F7CFF]"
  },
  {
    name: "Instagram",
    handle: "@its_me_parshuram_18",
    url: "https://www.instagram.com/its_me_parshuram_18",
    icon: "Instagram",
    actionType: "link",
    bgColor: "bg-[#FDF0F6]",
    textColor: "text-[#E1306C]"
  },
  {
    name: "Facebook",
    handle: "Parshuram Prajapati",
    url: "https://www.facebook.com/share/15SJ5GW2Da/",
    icon: "Facebook",
    actionType: "link",
    bgColor: "bg-[#E8F2FF]",
    textColor: "text-[#1877F2]"
  },
  {
    name: "Email",
    handle: "parshuram8792@gmail.com",
    url: "mailto:parshuram8792@gmail.com",
    icon: "Mail",
    actionType: "email",
    bgColor: "bg-[#EEE9FF]",
    textColor: "text-[#8B6DFF]"
  },
  {
    name: "GitHub",
    handle: "github.com/parshuram-prajapati",
    url: "https://github.com/parshuram-prajapati",
    icon: "Github",
    actionType: "link",
    bgColor: "bg-[#F4F4F6]",
    textColor: "text-[#1D1D1F]"
  }
];
