export const site = {
  name: "Ariel S. Salubre",
  location: "Butuan City, Philippines",
  tagline: "Software Engineer | Web Developer | UX/UI Designer",
  /** Optional: URL to profile image (e.g. /avatar.jpg). Leave empty for initials placeholder. */
  avatarUrl: "" as string | undefined,
  /** Show verified checkmark next to name */
  verified: true,
  /** Optional: Facebook profile URL – verified badge links here when set */
  facebookUrl: "https://www.facebook.com/ying.salubre" as string | undefined,
  email: "salubre.ariel98@gmail.com",
  calendlyUrl: "https://calendly.com/your-link",
  blogUrl: "https://blog.yoursite.com",
  linkedin: "https://linkedin.com/in/yourprofile",
  github: "https://github.com/yourprofile",
  instagram: "https://www.instagram.com/yingsterr_yy",
};

export const heroBadges: { label: string; href: string; subtitle?: string }[] = [];

export const about = `I am an aspiring full-stack developer and IT student with experience in building web and mobile applications. I enjoy creating systems that are simple, functional, and user-friendly while continuously improving my skills in software development, UI/UX design, and problem-solving.

Currently, I am pursuing my Bachelor of Science in Information Technology at Caraga State University, where I actively work on academic and personal projects related to system development, database management, and modern web technologies. I also have experience working with React, React Native, Flutter, PHP, MySQL, and Firebase.

Outside of academics, I have worked on projects such as restaurant management systems, portfolio websites, and business-related applications that helped me strengthen my understanding of real-world development workflows. I am passionate about learning new technologies, exploring AI-powered solutions, and growing as a future software engineer in the tech industry.`; 

export const experience = [
  { role: "Hello World", company: "Started my coding journey", year: "2019" },

  { role: "Computer Shop Assistant", company: "Local Internet Cafe", year: "2017" },
  { role: "Layout & Tarpaulin Designer", company: "Freelance Printing Services", year: "2018" },
  { role: "Junior Tech Support", company: "FSUU ICT Office", year: "2019" },

  { role: "Editor", company: "WBS Printing Services", year: "2020" },

  {
    role: "BS Information Technology Student",
    company: "Caraga State University",
    year: "2021-Present",
  },

  { role: "KB IT Consultant", company: "KB Staples Business Support Services", year: "2024" },
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
  {
    name: "Restaurant POS System",
    description: "Modern restaurant management and billing system with table monitoring",
    url: "https://restaurant-pos-demo.vercel.app",
    domain: "restaurant-pos-demo.vercel.app",
  },
  {
    name: "Portfolio Management System",
    description: "Personal portfolio and project showcase platform for developers",
    url: "https://devportfolio-showcase.vercel.app",
    domain: "devportfolio-showcase.vercel.app",
  },
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
  {
    quote:
      "A hardworking and reliable developer who consistently delivers clean and functional systems projects.",
    author: "John Michael Reyes",
    title: "IT Consultant",
  },
  {
    quote:
      "Shows strong dedication in programming and problem-solving, especially in web development and system design.",
    author: "Maria Angela Cruz",
    title: "Software Developer",
  },
  {
    quote:
      "Demonstrates excellent teamwork and adaptability in handling technical tasks and academic projects.",
    author: "Kevin Louie Santos",
    title: "Systems Analyst",
  },
  {
    quote:
      "A fast learner with a passion for creating modern and user-friendly applications.",
    author: "Ralph Vincent Gomez",
    title: "Frontend Developer",
  },
];
export const memberships = [
 
  {
    name: "Caraga State University IT Student Society",
    href: "#",
  },
  {
    name: "CSU Coding & Development Circle",
    href: "#",
  },
  {
    name: "Student Tech Innovators Guild",
    href: "#",
  },
];
