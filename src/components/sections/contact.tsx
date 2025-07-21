"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Phone, Linkedin, Facebook, Instagram } from "lucide-react";
import emailjs from "emailjs-com";

// Esquema de validación
const formSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres."),
  email: z.string().email("Por favor, introduce un correo electrónico válido."),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres."),
});

type FormData = z.infer<typeof formSchema>;

const ContactSection = () => {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  // Cargar variables de entorno
  const YOUR_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const YOUR_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const YOUR_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  const onSubmit = async (data: FormData) => {
    try {
      await emailjs.send(
        YOUR_SERVICE_ID!,
        YOUR_TEMPLATE_ID!,
        {
          from_name: data.name,
          from_email: data.email,
          message: data.message,
          to_email: "tu-correo@ejemplo.com", // Reemplaza con tu correo
        },
        YOUR_PUBLIC_KEY!
      );

      toast({
        title: "Éxito",
        description: "¡Tu mensaje ha sido enviado con éxito!",
      });
      form.reset();
    } catch (error) {
      console.error("Error al enviar el mensaje:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Hubo un problema al enviar el mensaje.",
      });
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold font-headline text-primary sm:text-4xl">
            Ponte en Contacto
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            ¿Tienes alguna pregunta o quieres iniciar un proyecto? Estamos aquí para ayudarte.
          </p>
        </div>
        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nombre Completo</FormLabel>
                        <FormControl>
                          <Input placeholder="Tu nombre" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Correo Electrónico</FormLabel>
                        <FormControl>
                          <Input placeholder="tu@correo.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Mensaje</FormLabel>
                        <FormControl>
                          <Textarea placeholder="¿Cómo podemos ayudarte?" rows={5} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
                    {form.formState.isSubmitting ? "Enviando..." : "Enviar Mensaje"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold font-headline text-primary">Nuestra Información</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold">Dirección</h4>
                  <p className="text-muted-foreground">Av. Principal 123, Piso 4, Oficina 401, Ciudad de México, CP 01010</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold">Teléfono</h4>
                  <p className="text-muted-foreground">+52 55 1234 5678</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold">Correo Electrónico</h4>
                  <p className="text-muted-foreground">contacto@swsafety.com</p>
                </div>
              </div>
            </div>
            <div className="flex space-x-4">
              <Button variant="outline" size="icon" asChild>
                <a href="#" aria-label="LinkedIn"><Linkedin /></a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="#" aria-label="Facebook"><Facebook /></a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="#" aria-label="Instagram"><Instagram /></a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;