import createCache from "@emotion/cache";

// Creates an Emotion cache for client-side rendering.
export default function createEmotionCache() {
  return createCache({ key: "css", prepend: true });
}
