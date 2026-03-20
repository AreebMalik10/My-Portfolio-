export const siteConfig = {
  name: "Areeb's Portfolio",
  description:
    "Full-Stack Developer specialising in Next.js, TypeScript, and modern web technologies.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  author: "Areeb",
  keywords: [
    "Full-Stack Developer",
    "Next.js",
    "TypeScript",
    "React",
    "Portfolio",
  ],
} as const;
