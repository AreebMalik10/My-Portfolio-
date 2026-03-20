import HomeScreen from "@/screens/Home/HomeScreen";

// This page is dynamically rendered — data is fetched per-request.
export const dynamic = "force-dynamic";

export default function HomePage() {
  return <HomeScreen />;
}
