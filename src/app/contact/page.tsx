import { Metadata } from "next";
import ContactScreen from "@/screens/Contact/ContactScreen";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch — I'm always open to new opportunities and collaborations.",
};

export default function ContactPage() {
  return <ContactScreen />;
}
