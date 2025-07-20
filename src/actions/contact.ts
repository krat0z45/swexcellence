"use server";

import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres."),
  email: z.string().email("Por favor, introduce un correo electrónico válido."),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres."),
});

export type FormData = z.infer<typeof formSchema>;

export async function submitAction(data: FormData) {
  console.log(data);
  // Here you would typically send the data to your backend, an email service, etc.
  return { success: true, message: "¡Mensaje enviado con éxito!" };
}
