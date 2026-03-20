import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-4 text-center">
      <p className="mb-3 font-mono text-sm text-primary-600">Hi, my name is</p>
      <h1 className="text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-7xl">
        Areeb
      </h1>
      <h2 className="mt-3 text-2xl font-semibold text-gray-500 dark:text-gray-400 sm:text-4xl">
        Full-Stack Developer
      </h2>
      <p className="mt-6 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
        I build scalable, performant, and accessible web applications with modern
        technologies. Let&apos;s create something great together.
      </p>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <Button asChild size="lg">
          <Link href="/projects">View My Work</Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href="/contact">Get In Touch</Link>
        </Button>
      </div>
    </section>
  );
}
