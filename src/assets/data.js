import {
  GitHub,
  LinkedIn,
  Email,
  WhatsApp,
  Code,
  Language,
} from "@mui/icons-material";

export const projects = [
  {
    id: 1,
    title: "AI-Powered Dashboard",
    description:
      "A comprehensive analytics dashboard with machine learning insights, real-time data visualization, and predictive analytics for business intelligence.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
    technologies: [
      "React",
      "Python",
      "TensorFlow",
      "D3.js",
      "FastAPI",
      "PostgreSQL",
    ],
    liveUrl: "https://example-ai-dashboard.com",
    githubUrl: "https://github.com/username/ai-dashboard",
    featured: true,
    year: "2024",
  },
  {
    id: 2,
    title: "Blockchain DeFi Platform",
    description:
      "Decentralized finance platform with smart contracts, yield farming, and NFT marketplace integration. Built with Web3 technologies.",
    image:
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=400&fit=crop",
    technologies: [
      "Next.js",
      "Solidity",
      "Web3.js",
      "Ethereum",
      "IPFS",
      "MetaMask",
    ],
    liveUrl: "https://example-defi.com",
    githubUrl: "https://github.com/username/defi-platform",
    featured: true,
    year: "2024",
  },
  {
    id: 3,
    title: "IoT Monitoring System",
    description:
      "Real-time IoT device monitoring with sensor data visualization, alerts, and automated control systems for smart buildings.",
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=400&fit=crop",
    technologies: [
      "React",
      "Node.js",
      "MQTT",
      "InfluxDB",
      "Grafana",
      "Arduino",
    ],
    liveUrl: "https://example-iot.com",
    githubUrl: "https://github.com/username/iot-monitoring",
    featured: false,
    year: "2025",
  },
  {
    id: 4,
    title: "Cloud Infrastructure Manager",
    description:
      "Multi-cloud infrastructure management tool with automated deployment, monitoring, and cost optimization features.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop",
    technologies: ["Vue.js", "Go", "Docker", "Kubernetes", "AWS", "Terraform"],
    liveUrl: "https://example-cloud.com",
    githubUrl: "https://github.com/username/cloud-manager",
    featured: false,
    year: "2023",
  },
];

export const certifications = [
  {
    id: 1,
    title: "IBM Full Stack Software Developer Certificate",
    description:
      "A comprehensive, hands-on program that equips with the skills to build, deploy, and manage full-stack applications, covering essential concepts in DevOps, containerization with Docker, version control with Git/GitHub, and cloud deployment using IBM Cloud and CI/CD pipelines.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/960px-IBM_logo.svg.png?20250604110737",
    technologies: [
      "Full-Stack Development",
      "Cloud Computing",
      "Software Architecture",
      "Prompt Engineering",
      "Git (Version Control System)",
    ],
    liveUrl: "https://example-ai-dashboard.com",
    githubUrl: "https://github.com/username/ai-dashboard",
    featured: true,
    year: "2025",
  },
];
export const certificationsFr = [
  {
    id: 1,
    title: "IBM Full Stack Software Developer Certificate",
    description:
      "Un programme intensif et pratique qui vous dote des compétences pour développer, déployer et gérer des applications full-stack. Il couvre les concepts fondamentaux du DevOps, de la conteneurisation avec Docker, du contrôle de version avec Git/GitHub, ainsi que du déploiement cloud via IBM Cloud et les pipelines CI/CD.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/960px-IBM_logo.svg.png?20250604110737",
    technologies: [
      "Full-Stack Development",
      "Cloud Computing",
      "Software Architecture",
      "Prompt Engineering",
      "Git (Version Control System)",
    ],
    liveUrl: "https://example-ai-dashboard.com",
    githubUrl: "https://github.com/username/ai-dashboard",
    featured: true,
    year: "2025",
  },
];

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/stevecet/",
    icon: GitHub,
    color: "#333",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/gilchrist-steve-aurel-veceto-6a4216202/",
    icon: LinkedIn,
    color: "#0077b5",
  },
  {
    name: "Email",
    url: "mailto:steveceto@gmail.com",
    icon: Email,
    color: "#ea4335",
  },
  {
    name: "WhatsApp",
    url: "https://wa.me/237659461748",
    icon: WhatsApp,
    color: "#ea4335",
  },
];

export const skills = [
  {
    name: "Frontend",
    icon: Code,
    items: ["React", "Next.js", "TypeScript", "Vue.js", "Angular", "Tailwind"],
    image:
      "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=300&fit=crop",
  },
  {
    name: "Backend",
    icon: Language,
    items: ["Node.js", "Python", "MySQL", "PostgreSQL", "MongoDB", "Laravel"],
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop",
  },
  // {
  //   name: "Cloud & DevOps",
  //   icon: CloudDownload,
  //   items: [
  //     "AWS",
  //     "Docker",
  //     "Kubernetes",
  //     "CI/CD",
  //     "Terraform",
  //     "Monitoring",
  //   ],
  //   image:
  //     "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop",
  // },
  // {
  //   name: "AI & Data",
  //   icon: Palette,
  //   items: [
  //     "Machine Learning",
  //     "TensorFlow",
  //     "PyTorch",
  //     "Data Analysis",
  //     "Computer Vision",
  //   ],
  //   image:
  //     "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop",
  // },
];
