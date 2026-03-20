import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch — I'm always open to new opportunities and collaborations.",
};

export default function ContactPage() {
  return (
    <section className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold">Contact</h1>
      {/* Contact form will be rendered here */}
    </section>
  );
}
