import { apiFetch } from "@/lib/fetch";

interface ContactPayload {
  name: string;
  email: string;
  message: string;
}

export const contactService = {
  async send(payload: ContactPayload): Promise<void> {
    await apiFetch("/api/contact", {
      method: "POST",
      body: payload,
    });
  },
};
