import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Nome deve ter no mínimo 2 caracteres").max(100),
  email: z.string().email("Email inválido"),
  whatsapp: z.string().min(10, "WhatsApp inválido").max(20),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
