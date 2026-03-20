const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

interface FetchOptions extends Omit<RequestInit, "method" | "body"> {
  method?: HttpMethod;
  body?: unknown;
}

/**
 * Typed fetch wrapper with built-in error handling.
 * Throws a descriptive error when the response is not ok.
 */
export async function apiFetch<T>(
  path: string,
  { method = "GET", body, ...options }: FetchOptions = {}
): Promise<T> {
  const url = path.startsWith("http") ? path : `${BASE_URL}${path}`;

  const response = await fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    body: body !== undefined ? JSON.stringify(body) : undefined,
    ...options,
  });

  if (!response.ok) {
    const message = await response.text().catch(() => response.statusText);
    throw new Error(`[${response.status}] ${message}`);
  }

  return response.json() as Promise<T>;
}
