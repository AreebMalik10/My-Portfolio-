import { cn } from "@/lib/utils";
import Image from "next/image";

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

export function Card({ className, children }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900",
        className
      )}
    >
      {children}
    </div>
  );
}

interface CardImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function CardImage({ src, alt, className }: CardImageProps) {
  return (
    <div className={cn("relative h-48 w-full overflow-hidden rounded-t-xl", className)}>
      <Image src={src} alt={alt} fill className="object-cover" />
    </div>
  );
}

export function CardBody({ className, children }: CardProps) {
  return <div className={cn("p-5", className)}>{children}</div>;
}

export function CardTitle({ className, children }: CardProps) {
  return (
    <h3 className={cn("text-lg font-semibold text-gray-900 dark:text-gray-100", className)}>
      {children}
    </h3>
  );
}

export function CardDescription({ className, children }: CardProps) {
  return (
    <p className={cn("mt-1 text-sm text-gray-500 dark:text-gray-400", className)}>
      {children}
    </p>
  );
}
