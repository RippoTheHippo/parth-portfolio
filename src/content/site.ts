export const siteConfig = {
  name: "Parth Porwal",
  title: "Cinematographer | Director of Photography | Filmmaker",
  shortTitle: "Cinematographer / DOP / Filmmaker",
  instagram: "https://instagram.com/parth_porwal_",
  location: "IIT Roorkee, India",
  description:
    "The portfolio of Parth Porwal, a cinematographer, director of photography, and filmmaker working across short films, music videos, and image-led moving narratives.",
  navItems: [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Archive" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ],
  hero: {
    cues: ["Lights", "Camera", "Action"],
    note:
      "Frames from short films, music videos, and moving-image work shaped through atmosphere, rhythm, and intent.",
  },
  home: {
    showreelLabel: "Showreel",
    archiveLabel: "Archive",
    archiveNote:
      "A running filmography of narrative, musical, and experimental work.",
    personalNote:
      "I study Economics at IIT Roorkee, but the hours that stay with me are the ones spent behind a camera. I am interested in images that carry feeling quietly, where light, texture, and movement reveal something before words do.",
  },
  about: {
    intro:
      "I am a cinematographer, director of photography, and filmmaker based out of IIT Roorkee.",
    body: [
      "I study Economics by day and spend the rest of my time thinking through images. What draws me to cinematography is the distance between what a scene says and what it carries underneath. I like working in that space.",
      "My process usually begins with the question of why a moment exists at all. From there I think about how light should sit on a face, how still or restless the frame should feel, and what kind of movement will let the scene breathe without announcing itself.",
      "Most of my work has been in short films and music videos. I am drawn to projects that trust atmosphere, silence, and visual rhythm as much as dialogue or performance.",
    ],
    philosophy:
      "I want the frame to feel inhabited. Not decorative, not loud, but precise enough to hold emotion on its own.",
    focus:
      "Short films, music videos, and personal moving-image work.",
  },
  contact: {
    intro:
      "If you are building a film, a music video, or any moving-image piece that needs a patient visual language, feel free to write.",
    note:
      "I read messages here and on Instagram. A brief note, treatment, script, or reference is enough to start.",
  },
  footerNote: "Observed and framed from IIT Roorkee.",
} as const;
