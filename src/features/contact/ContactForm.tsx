"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";
import { useContactForm } from "./useContactForm";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({ resolver: zodResolver(contactSchema) });

  const { submit, isSubmitting, isSuccess, error } = useContactForm(reset);

  return (
    <form onSubmit={handleSubmit(submit)} className="space-y-5" noValidate>
      <Input
        id="name"
        label="Name"
        placeholder="John Doe"
        error={errors.name?.message}
        {...register("name")}
      />
      <Input
        id="email"
        label="Email"
        type="email"
        placeholder="john@example.com"
        error={errors.email?.message}
        {...register("email")}
      />
      <Textarea
        id="message"
        label="Message"
        placeholder="Your message..."
        error={errors.message?.message}
        {...register("message")}
      />

      {isSuccess && (
        <p className="text-sm text-green-600">
          Message sent successfully! I will get back to you soon.
        </p>
      )}
      {error && <p className="text-sm text-red-500">{error}</p>}

      <Button type="submit" isLoading={isSubmitting} className="w-full">
        Send Message
      </Button>
    </form>
  );
}
