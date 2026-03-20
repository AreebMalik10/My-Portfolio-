import Link from "next/link";
import { socialLinks } from "@/config/navigation";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-white py-10 dark:border-gray-800 dark:bg-gray-950">
      <div className="container mx-auto flex flex-col items-center gap-4 px-4 text-center">
        <div className="flex items-center gap-5">
          {socialLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="text-gray-500 transition-colors hover:text-primary-600"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <p className="text-sm text-gray-500">
          &copy; {currentYear} Areeb. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
