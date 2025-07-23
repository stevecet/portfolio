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
    title: "Project Task Management platform",
    description:
      "Productivity-focused task management web app where users can create, organize, and track tasks across multiple projects. It includes features like deadlines, priorities, categories, task status (to-do, in progress, done), and collaborative user assignment.",
    descriptionvf:
      "Application web de gestion de tâches orientée productivité, permettant aux utilisateurs de créer, organiser et suivre des tâches réparties sur plusieurs projets. Elle propose des fonctionnalités comme la gestion des échéances, des priorités, des catégories, des statuts de tâches (à faire, en cours, terminé) et l’attribution de tâches à plusieurs utilisateurs.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=800&h=400&fit=crop",
    technologies: [
      "Reactjs",
      "Material UI",
      "Tailwind",
      "Express",
      "MongoDB",
    ],
    liveUrl: "https://taskify-steveceto.vercel.app",
    githubUrl: "https://github.com/stevecet/taskify",
    featured: true,
    year: "2025",
  },
  {
    id: 2,
    title: "Event Management System",
    description:
      "Platform for organizing and discovering events. Users can browse upcoming events by category or location, RSVP, and receive reminders. Admins can create events with descriptions, locations (map-based), and manage attendees.",
    descriptionvf:
      "Application de gestion et de découverte d'événements. Les utilisateurs peuvent parcourir les événements par catégorie ou par lieu, s’inscrire et recevoir des rappels. Les organisateurs peuvent créer des événements avec des descriptions, des dates, une carte de localisation et gérer les participants.",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=800&h=400&fit=crop",
    technologies: [
      "Reactjs",
      "Material UI",
      "Tailwind",
      "Flask",
      "PostgreSQL",
    ],
    liveUrl: "https://eventory-steveceto.vercel.app",
    githubUrl: "https://github.com/stevecet/eventory",
    featured: true,
    year: "2025",
  },
  {
    id: 3,
    title: "Forum / Discussion Board",
    description:
      "Modern discussion forum where users can create threads, reply to posts, and engage in structured debates. Includes moderation tools, role-based permissions (admin/mod/user), and nested commenting with markdown support.",
    descriptionvf:
      "Plateforme de forum de discussion moderne où les utilisateurs peuvent créer des sujets, répondre à des messages, et participer à des débats structurés. Le système inclut des outils de modération, une gestion des rôles (admin/modérateur/utilisateur), et des commentaires imbriqués avec support Markdown.",
    image: "https://unsplash.com/photos/people-talking-QBpZGqEMsKg",
    technologies: [
      "Reactjs",
      "Material UI",
      "Tailwind",
      "JWT",
      "Express",
      "MongoDB",
    ],
    liveUrl: "https://talkbase-steveceto.vercel.app",
    githubUrl: "https://github.com/stevecet/talkbase",
    featured: false,
    year: "2025",
  },
  {
    id: 4,
    title: "Booking System",
    name: "Bookify",
    description:
      "An appointment booking platform for services such as salons, consulting, or classes. Users can view availability, reserve slots, receive reminders, and manage bookings. Admins configure time slots and services.",
    descriptionvf:
      "Plateforme de réservation de rendez-vous adaptée aux services comme les salons de beauté, les consultations ou les cours. Les utilisateurs peuvent consulter les disponibilités, réserver des créneaux, recevoir des rappels et gérer leurs réservations. Les administrateurs peuvent configurer les horaires et les types de services.",
    image:
      "https://unsplash.com/photos/white-printer-paper-on-brown-wooden-table-DItYlc26zVI",
    technologies: [
      "React",
      "Microservices (Node.js, MongoDB, Redis)",
      "RabbitMQ",
    ],
    liveUrl: "https://bookify-steveceto.vercel.app",
    githubUrl: "https://github.com/stevecet/bookify",
    featured: false,
    year: "2025",
  },
  {
    id: 5,
    title: "Recipe Organizer / Meal Planner",
    name: "MealMind",
    description:
      "A recipe and meal planning app that lets users save their favorite recipes, search by ingredients, build weekly meal plans, and auto-generate grocery lists. It supports image uploads, tagging, and ingredient-based filtering.",
    descriptionvf:
      "Application de gestion de recettes et de planification de repas. Les utilisateurs peuvent enregistrer leurs recettes préférées, faire des recherches par ingrédients, créer des menus hebdomadaires, et générer automatiquement des listes de courses. L’application prend en charge le téléversement d’images et l’organisation par tags.",
    image: "https://unsplash.com/photos/plated-dish-beside-bread-U4FyCp3-KzY",
    technologies: ["React", "Django", "PostgreSQL", "Cloudinary", "AWS"],
    liveUrl: "https://mealmind-steveceto.vercel.app",
    githubUrl: "https://github.com/stevecet/mealmind",
    featured: false,
    year: "2025",
  },
  {
    id: 6,
    title: "Real-time Chat Application",
    name: "Chatter",
    description:
      "A real-time messaging app featuring private and group chats, online presence, typing indicators, and message history. It uses WebSockets for live communication and stores messages securely in a NoSQL database.",
    descriptionvf:
      "Application de messagerie en temps réel. Elle offre la possibilité de discuter en privé ou en groupe, affiche les présences en ligne, les indicateurs de frappe, et conserve l’historique des messages. Elle utilise WebSocket pour la communication instantanée et une base de données NoSQL pour stocker les messages.",
    image: "https://unsplash.com/photos/chatting-UI-on-phone-uB7q7aipU2o",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "Socket.IO",
      "MongoDB",
      "Redis",
    ],
    liveUrl: "https://chatter-steveceto.vercel.app",
    githubUrl: "https://github.com/stevecet/chatter",
    featured: false,
    year: "2025",
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
