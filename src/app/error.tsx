"use client";

import { useEffect } from "react";

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    // Log to an error reporting service (e.g., Sentry)
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 text-center">
      <h2 className="text-2xl font-semibold">Something went wrong</h2>
      <p className="text-gray-500">An unexpected error occurred. Please try again.</p>
      <button
        onClick={reset}
        className="rounded-md bg-primary-600 px-6 py-2 text-white transition hover:bg-primary-700"
      >
        Try Again
      </button>
    </div>
  );
}
