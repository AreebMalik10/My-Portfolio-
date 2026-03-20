import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "./ContactForm";
import SectionWrapper from "@/components/layout/SectionWrapper";

export default function ContactSection() {
  return (
    <SectionWrapper id="contact">
      <SectionHeading
        title="Get In Touch"
        subtitle="Have a project in mind? I would love to hear from you."
      />
      <div className="mx-auto max-w-lg">
        <ContactForm />
      </div>
    </SectionWrapper>
  );
}
