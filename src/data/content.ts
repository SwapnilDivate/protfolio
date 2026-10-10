export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
  image: string;
}

export interface Skill {
  name: string;
  level: number;
  category: string;
}

export interface Social {
  label: string;
  url: string;
}

export const profile = {
  name: "Swapnil Divate",
  role: "Software Engineer & Full-Stack Developer",
  tagline: "I build practical, user-focused web experiences with React, JavaScript, Java, and modern full-stack tools.",
  email: "swapnildivate1650@gmail.com",
  phone: "+91 6363213600",
  location: "Mysuru, India",
  socials: [] as Social[],
};

export const aboutText = [
  "I'm an aspiring full-stack developer and Software Engineering student at Vidyavardhaka College of Engineering in Mysuru. I enjoy solving problems through code and learning how current and emerging technologies can create useful software.",
  "My experience includes ReactJS, JavaScript, Java, Python, SQL, MongoDB, Git, Docker, and web development fundamentals. I bring a practical, curious mindset to every project, with a focus on teamwork, communication, and continuous improvement.",
];

export const skills: Skill[] = [
  { name: "Java", level: 84, category: "Languages" },
  { name: "JavaScript", level: 88, category: "Languages" },
  { name: "Python", level: 78, category: "Languages" },
  { name: "C++", level: 72, category: "Languages" },
  { name: "ReactJS", level: 84, category: "Frontend" },
  { name: "HTML & CSS", level: 88, category: "Frontend" },
  { name: "Angular", level: 58, category: "Frontend" },
  { name: "SQL", level: 78, category: "Database" },
  { name: "MongoDB", level: 68, category: "Database" },
  { name: "Git & GitHub", level: 82, category: "Tools & DevOps" },
  { name: "Docker", level: 68, category: "Tools & DevOps" },
  { name: "Postman", level: 72, category: "Tools & DevOps" },
  { name: "QGIS & Leaflet", level: 70, category: "Concepts" },
  { name: "Data Structures & Algorithms", level: 74, category: "Concepts" },
];

export const projects: Project[] = [
  {
    id: "1",
    title: "Campus Navigation",
    description: "A campus navigation tool that helps students find indoor and outdoor routes using interactive mapping.",
    tags: ["React", "QGIS", "Leaflet", "JavaScript"],
    link: "#",
    image: "https://images.pexels.com/photos/5553954/pexels-photo-5553954.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "2",
    title: "Hostel Management Website",
    description: "An IEEE internship project focused on building a hostel data management system with full-stack technologies.",
    tags: ["React", "JavaScript", "SQL", "Full Stack"],
    link: "#",
    image: "https://images.pexels.com/photos/12379745/pexels-photo-12379745.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "3",
    title: "Amazon Clone",
    description: "A responsive front-end recreation of the Amazon shopping experience built as a web development project.",
    tags: ["HTML", "CSS", "Responsive UI"],
    link: "https://lnkd.in/gJ4efz2c",
    image: "https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "4",
    title: "Tic-Tac-Toe",
    description: "A browser-based Tic-Tac-Toe game focused on game logic, interaction, and a clean user experience.",
    tags: ["JavaScript", "HTML", "CSS", "Game Logic"],
    link: "https://lnkd.in/gfzpMBVs",
    image: "https://images.pexels.com/photos/29422541/pexels-photo-29422541.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
}

export const experience: ExperienceItem[] = [
  {
    role: "B.E. in Artificial Intelligence & Machine Learning",
    company: "Vidyavardhaka College of Engineering, Mysuru",
    period: "Current",
    description: "Pursuing an engineering degree with a current CGPA of 8.17 and building a foundation in software development, algorithms, and emerging technologies.",
  },
  {
    role: "Hostel Management Website Intern",
    company: "IEEE",
    period: "Current",
    description: "Working on a hostel data management system as part of an IEEE internship, applying full-stack development skills to a practical project.",
  },
  {
    role: "Certifications & Activities",
    company: "Academic and community work",
    period: "2024 — Present",
    description: "NCC 'C' Certificate, IEEE member, Smart & Sustainable Campus Hackathon participant, Code Hunt 2024 coding challenge participant, and Best Achiever in Extra-Curricular Activities.",
  },
];
