import projectsData from "@/content/projects.json";

export type ProjectCategory = "Short Film" | "Music Video" | "Experimental";

type RawProject = {
  title: string;
  youtubeId: string;
  category: ProjectCategory;
  year: string;
  description: string;
  credits: string[];
  featured: boolean;
};

export type Project = RawProject & {
  slug: string;
  role: string;
  youtubeUrl: string;
  embedUrl: string;
  thumbnail: string;
  stills: string[];
};

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const enrichProject = (project: RawProject): Project => ({
  ...project,
  slug: slugify(project.title),
  role: "Cinematographer / Director of Photography",
  youtubeUrl: `https://www.youtube.com/watch?v=${project.youtubeId}`,
  embedUrl: `https://www.youtube.com/embed/${project.youtubeId}?rel=0&modestbranding=1`,
  thumbnail: `https://i.ytimg.com/vi/${project.youtubeId}/hqdefault.jpg`,
  stills: [1, 2, 3].map(
    (frame) => `https://i.ytimg.com/vi/${project.youtubeId}/${frame}.jpg`,
  ),
});

export const projects = (projectsData as RawProject[]).map(enrichProject);

export const featuredProjects = projects.filter((project) => project.featured);

export const showreelProject =
  projects.find((project) => project.youtubeId === "IuIG7944SkM") ?? projects[0];

export const getProjectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug);
