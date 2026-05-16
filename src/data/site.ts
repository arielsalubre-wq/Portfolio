export const site = {
  name: "Kier Patrick Empang",
  location: "Butuan City, Philippines",
  tagline: "Software Engineer | Web Developer | UX/UI Designer",
  /** Optional: URL to profile image (e.g. /avatar.jpg). Leave empty for initials placeholder. */
  avatarUrl: "" as string | undefined,
  /** Show verified checkmark next to name */
  verified: true,
  /** Optional: Facebook profile URL – verified badge links here when set */
  facebookUrl: "" as string | undefined,
  email: "your@email.com",
  calendlyUrl: "https://calendly.com/your-link",
  blogUrl: "https://blog.yoursite.com",
  linkedin: "https://linkedin.com/in/yourprofile",
  github: "https://github.com/yourprofile",
  instagram: "https://instagram.com/yourprofile",
};

export const heroBadges: { label: string; href: string; subtitle?: string }[] = [];

export const about = `I am a full-stack software engineer with hands-on experience in end-to-end product development, from requirements gathering and system planning to implementation, optimization, and long-term maintenance. I am currently part of ISySS-CDM, a three-year project where I work as a senior programmer and take on key responsibilities in data gathering, software development, architecture design, and making sure the codebase remains efficient, scalable, and maintainable as the project grows.

Beyond full-stack engineering, I also have a strong interest in immersive technologies and have previously contributed to a DOST-funded initiative, MARVELTechnologies, which focused on building AR/VR solutions through mining simulation use cases. That experience expanded my perspective on simulation-driven learning and interactive environments, and it strengthened my ability to design solutions across both traditional and emerging platforms.

I also work on mobile development using React Native and Flutter, and I continue to broaden my technical focus through DevOps automation, workflow improvement, and AI-powered solutions that help teams deliver faster, smarter, and with greater consistency.`; 

export const experience = [
  { role: "Senior Programmer", company: "ISySS-CDM CSU", year: "2026" },
  { role: "Systems Analyst", company: "DA-BAFE ABEMIS3.0", year: "2025" },
  { role: "Part Time Faculty", company: "CCIS-CSU", year: "2024" },
  { role: "Evaluator", company: "FaMRIA, DA BAFE", year: "2024" },
  {
    role: "Master of Science in Information Tech",
    company: "Caraga State University",
    year: "2024",
  },
  { role: "Junior Developer", company: "MARVELTechnologies", year: "2022" },
  { role: "Admin Staff", company: "OWWA Caraga", year: "2019-2022" },
  { role: "BS Information Technology", company: "Caraga State University", year: "2019" },
  { role: "Hello World", company: "Started my coding journey", year: "2015" },
];

export const techStack = {
  frontend: [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
  ],
  backend: ["Node.js", "Python", "PostgreSQL", "MongoDB"],
  devops: ["AWS", "Docker", "Kubernetes", "GitHub Actions"],
  modeling: [
    "3D Modeling",
    "Blender",
    "Animation",
    "Texture Editing",
    "Unity Game Engine",
    "C#",
  ],
};

export const projects = [
  { name: "ISySS-CDM", description: "CSU & PNP collaborative system platform", url: "https://isyss-cdm.web.app/", domain: "isyss-cdm.web.app" },
  { name: "ABEMIS 3.0", description: "Agricultural & Biosystems Engineering Management Information System", url: "https://abemis-front.vercel.app/", domain: "abemis-front.vercel.app" },
  { name: "MARVEL Technologies", description: "AR/VR technology initiative and simulation platform", url: "https://chci.carsu.edu.ph/marvel-technologies/", domain: "chci.carsu.edu.ph" },
  { name: "DYNAMIS Workout Tracker", description: "AI-powered workout tracker", url: "https://dynamis-app.online", domain: "dynamis-app.online" },
];

export const certifications: {
  name: string;
  issuer: string;
  href: string;
  year?: string;
}[] = [
  {
    name: "SPARK Technical Training for Blockchain Cryptocurrency Specialist Certification",
    issuer: "Department of Information and Communications Technology",
    href: "#",
  },
  {
    name: "Coursera UX/UI Certification",
    issuer: "Google",
    href: "#",
  },
  {
    name: "Project Management",
    issuer: "University of the Philippines",
    href: "#",
  },
];

export const recommendations = [
  { quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.", author: "Cris Lawrence Adrian Militante", title: "ICT Director at GCM" },
  { quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.", author: "Ken Gorro", title: "Senior Developer at Fullscale" },
  { quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.", author: "Patrick Vince Velasco", title: "Software Engineer, YNS" },
  { quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.", author: "John Edmerson Pizarra", title: "Jr. Full-stack Developer, PocketDevs" },
  { quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.", author: "Glenn Pepito", title: "Professor at University of San Carlos" },
  { quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.", author: "Van Honoridez", title: "Application Development Analyst at Accenture" },
  { quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.", author: "Zinia Ma. Consuelo R. Trinidad", title: "Web Developer, Quickway Holdings Inc." },
  { quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.", author: "Jomar Neri", title: "Full-stack Developer, Freelance" },
];

export const memberships = [
  {
    name: "Philippine Society of IT Educators – Caraga Chapter",
    href: "https://psite.org/",
  },
];
