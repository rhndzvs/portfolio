export type ProjectImage = {
  src: string;
  alt: string;
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
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
    slug: "project-one-placeholder",
    title: "Project One (placeholder)",
    summary: "Short description of this project (placeholder).",
    features: ["Feature one (placeholder)", "Feature two (placeholder)"],
    role: "Role (placeholder)",
    stack: ["Tech (placeholder)"],
    featured: true,
  },
  {
    slug: "project-two-placeholder",
    title: "Project Two (placeholder)",
    summary: "Short description of this project (placeholder).",
    features: ["Feature one (placeholder)", "Feature two (placeholder)"],
    role: "Role (placeholder)",
    stack: ["Tech (placeholder)"],
    featured: true,
  },
  {
    slug: "project-three-placeholder",
    title: "Project Three (placeholder)",
    summary: "Short description of this project (placeholder).",
    features: ["Feature one (placeholder)", "Feature two (placeholder)"],
    role: "Role (placeholder)",
    stack: ["Tech (placeholder)"],
    featured: true,
  },
  {
    slug: "project-four-placeholder",
    title: "Project Four (placeholder)",
    summary: "Short description of this project (placeholder).",
    features: ["Feature one (placeholder)", "Feature two (placeholder)"],
    role: "Role (placeholder)",
    stack: ["Tech (placeholder)"],
    featured: false,
  },
];

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured).slice(0, 3);
}
