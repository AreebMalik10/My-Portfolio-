import { useState } from "react";
import { contactService } from "@/services/contact.service";
import type { ContactFormData } from "./ContactForm";

export function useContactForm(reset: () => void) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function submit(data: ContactFormData) {
    setIsSubmitting(true);
    setError(null);
    setIsSuccess(false);

    try {
      await contactService.send(data);
      setIsSuccess(true);
      reset();
    } catch {
      setError("Failed to send your message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return { submit, isSubmitting, isSuccess, error };
}
