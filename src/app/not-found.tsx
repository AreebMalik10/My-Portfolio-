import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 text-center">
      <h1 className="text-7xl font-bold text-primary-500">404</h1>
      <h2 className="text-2xl font-semibold">Page Not Found</h2>
      <p className="text-gray-500">The page you are looking for does not exist.</p>
      <Link
        href="/"
        className="rounded-md bg-primary-600 px-6 py-2 text-white transition hover:bg-primary-700"
      >
        Go Home
      </Link>
    </div>
  );
}
