export interface Experience {
  year: number;
  company: string;
  role: string;
  description: string;
  responsibilities: string[];
}

export const experience: Experience[] = [
  {
    year: 2026,
    company: "EPAM Systems",
    role: "Frontend Developer (React)",
    description: "Сombined the roles of tester and developer",
    responsibilities: ["Bug Fixes", "Team collaboration"],
  },
  {
    year: 2021,
    company: "EPAM Systems",
    role: "Senior Software Testing Engineer",
    description:
      "Participated in 4 different project as QA engineer. Projects had various domains such as e-commerce, healthcare",
    responsibilities: [
      "requirements analysis",
      "creation, reviewing test documentation (checklist, test cases)",
      "performed such types of testing as functional testing, integration, regression, exploratory, GUI, usability testing, API testing",
      "defect reporting and tracking",
      "worked according to Scrum SDLC",
      "presenting during demo session",
      "participated in project interviews as interviewer",
    ],
  },
  {
    year: 2019,
    company: "CompatibL",
    role: "Software Testing Engineer",
    description: "Finance domain",
    responsibilities: [
      "requirements analysis",
      "creation, reviewing test documentation (checklist, test cases)",
      "Performed manual functional, regression, exploratory, GUI, usability testing of desktop application",
      "defect reporting and tracking",
      "participated in project interviews as interviewer",
    ],
  },
];

export interface Project {
  name: string;
  description: string;
  features: string[];
  projectLink: string;
  github: string;
  stack: string[];
}

export const projects: Project[] = [
  {
    name: "Finance Traker",
    description: "Pet project to practice styles components usage",
    features: [
      "Login",
      "Register",
      "Overview Page with incomes and expences summary",
      "Incomes and Expences managing per month",
      "Plans managing",
      "Profile managing",
    ],
    projectLink: "https://finance-tracker-13d5b.web.app/finance-tracker",
    github: "https://github.com/violettab21/finance-tracker",
    stack: ["React JS", "TS", "Firebase", "Styled Components"],
  },
  {
    name: "Rick and Morty app",
    description: "Pet project to practice api usage and Next JS framework",
    features: [
      "Get characters",
      "Search characters",
      "Show character details",
      "Pagination",
    ],
    projectLink: "https://finance-tracker-13d5b.web.app/finance-tracker",
    github: "https://github.com/violettab21/react2025q3/tree/nextjs-ssr",
    stack: ["Next JS", "TS", "Redux Toolkit", "RTK Queries"],
  },
];

export const skills = [
  {
    groupName: "Frontend",
    tech: [
      "JavaScript",
      "React",
      "Redux Toolkit",
      "React Router",
      "Next.js",
      "TypeScript",
      "HTML",
      "CSS",
    ],
  },
  {
    groupName: "UI & Styling",
    tech: ["Styled Components", "MUI", "Tailwind CSS", "CSS Modules"],
  },
  {
    groupName: "Backend & Database",
    tech: [
      "Node.js",
      "Nest.js",
      "Firebase",
      "SQL",
      "REST API",
      "PostgreSQL",
      "Prisma",
    ],
  },
  {
    groupName: "Tools & Others",
    tech: ["Git", "Postman", "Jira", "Scrum", "Figma"],
  },
];

export const education = {
  name: "Belarusian State University of Informatics and Radio electronics",
  faculty: "Computer-aided design",
  specialty: "Information Systems and Technologies",
  graduationYear: 2019,
};

export const courses = [
  {
    school: "RS School",
    name: "JavaScript/Front-end",
    certificateLink: "https://app.rs.school/certificate/gm8q69qs",
    completedOn: 2025,
  },
  {
    school: "RS School",
    name: "React",
    certificateLink: "https://app.rs.school/certificate/15ljp1ih",
    completedOn: 2025,
  },
  {
    school: "RS School",
    name: "Node.js",
    certificateLink: "https://app.rs.school/certificate/lt21ph2g",
    completedOn: 2026,
  },
];
