export type ProjectImage = {
  src: string;
  alt: string;
};

export type Project = {
  slug: string;
  title: string;
  type?: string;
  client?: string;
  period?: string;
  summary: string;
  overview?: string[];
  features: string[];
  role: string;
  stack: string[];
  liveUrl?: string;
  repoUrl?: string;
  image?: ProjectImage;
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "aegis",
    title: "AEGIS",
    type: "Web-based enterprise system",
    client: "New Manela Security Agency",
    period: "Jul 2026 - Oct 2026",
    summary:
      "A web-based enterprise system for New Manela Security Agency that brings guard records, deployment, payroll, and client billing into one platform.",
    overview: [
      "AEGIS (Automated Enterprise for Guard Information & Security-billing) is a web-based enterprise system built for New Manela Security Agency. It centralizes guard records, deployment, payroll, and client billing in a single platform.",
      "It also includes a client self-service portal where clients can view and pay their bills.",
      "As Scrum Master and Project Manager, I ran the Scrum ceremonies that helped the team bring guard management, payroll, and billing together into one system.",
    ],
    features: [
      "Centralized guard records and deployment",
      "Payroll",
      "Client billing",
      "Client self-service portal for viewing and paying bills",
    ],
    role: "Scrum Master / Project Manager",
    stack: ["React", "Vite", "Frappe Framework", "MariaDB"],
    featured: true,
  },
  {
    slug: "wah4pc",
    title: "WAH for Interoperability (WAH4PC)",
    type: "Health data exchange system",
    client: "Wireless Access for Health (WAH)",
    period: "Mar 2026 - Jun 2026",
    summary:
      "A health data exchange system that connects hospitals and clinics so they can share patient data directly instead of retrieving records manually.",
    overview: [
      "WAH for Interoperability (WAH4PC) is an intermediary system that enables interoperability between hospitals and clinics. It lets them share data directly, which removes the need for manual record retrieval.",
      "As Project Manager, I led the project and validated the end-to-end data exchange across WAH platforms.",
    ],
    features: [
      "Intermediary system connecting hospitals and clinics",
      "Direct data sharing without manual record retrieval",
      "End-to-end data exchange validated across WAH platforms",
    ],
    role: "Project Manager",
    stack: ["React", "Go", "MongoDB"],
    featured: true,
  },
  {
    slug: "wah4p",
    title: "WAH for Patients (WAH4P)",
    type: "Patient-centered mHealth application",
    client: "Wireless Access for Health (WAH)",
    period: "Mar 2025 - Feb 2026",
    summary:
      "A patient-centered mobile health app that keeps a patient's health records in one place and supports scheduling, teleconsultation, and resupply.",
    overview: [
      "WAH for Patients (WAH4P) is a patient-centered mHealth application built around a centralized digital health record system for patients.",
      "It includes scheduling, teleconsultation, and resupply features, and helps reduce in-person visits through continuous digital health management.",
      "As Project Manager, I led the project.",
    ],
    features: [
      "Centralized digital health records",
      "Appointment scheduling",
      "Teleconsultation",
      "Resupply requests",
    ],
    role: "Project Manager",
    stack: ["Flutter", "NestJS", "Supabase"],
    featured: true,
  },
];

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured).slice(0, 3);
}

export function getAllProjects(): Project[] {
  return projects;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getNextProject(slug: string): Project | undefined {
  const projectIndex = projects.findIndex((project) => project.slug === slug);

  if (projectIndex === -1 || projects.length < 2) {
    return undefined;
  }

  return projects[(projectIndex + 1) % projects.length];
}
