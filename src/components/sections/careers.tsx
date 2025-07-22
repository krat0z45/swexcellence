"use client";
import { toast } from "@/hooks/use-toast";
import emailjs from "emailjs-com";

import { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { Mail, MessageCircle } from "lucide-react";

const jobOpenings = [
  {
    id: 'job-1',
    title: 'Consultor de Seguridad e Higiene',
    location: 'Remoto / Híbrido',
    requirements: [
      'Ingeniería Industrial, Ambiental o carrera afín.',
      'Experiencia mínima de 3 años en seguridad industrial.',
      'Conocimiento de normativas STPS.',
      'Excelentes habilidades de comunicación y liderazgo.',
    ],
  },
  {
    id: 'job-2',
    title: 'Capacitador en Seguridad Ocupacional',
    location: 'Presencial, Ciudad de México',
    requirements: [
      'Certificación como instructor DC-5.',
      'Experiencia comprobable de 5 años impartiendo cursos.',
      'Disponibilidad para viajar.',
      'Pasión por la enseñanza y la seguridad.',
    ],
  },
];

type JobOpening = typeof jobOpenings[0];

const applicationSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres."),
  email: z.string().email("Por favor, introduce un correo electrónico válido."),
  phone: z.string().min(10, "Por favor, introduce un número de teléfono válido.").optional(),
  coverLetter: z.string().min(20, "La carta de presentación debe tener al menos 20 caracteres."),
});

type ApplicationForm = z.infer<typeof applicationSchema>;

const CareersSection = () => {
  const [selectedJob, setSelectedJob] = useState<JobOpening | null>(null);

  const form = useForm<ApplicationForm>({
    resolver: zodResolver(applicationSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      coverLetter: "",
    },
  });

  const handleApplyClick = (job: JobOpening) => {
    setSelectedJob(job);
    form.reset();
  };

  const handleSheetClose = () => {
    setSelectedJob(null);
  };

  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_CAREERS;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  const onSubmit = async (data: ApplicationForm) => {
  if (!serviceId || !templateId || !publicKey) {
    toast({
      variant: "destructive",
      title: "Error",
      description: "Configuración incompleta. Contacta al administrador.",
    });
    return;
  }

  if (!selectedJob) return;

  try {
    await emailjs.send(
      serviceId,
      templateId,
      {
        name: data.name,
        email: data.email,
        phone: data.phone || 'No proporcionado',
        cover_letter: data.coverLetter,
        job_title: selectedJob.title,
        job_location: selectedJob.location,
        reply_to: data.email,
        to_email: "reclutamiento@swexcellence.com",
      },
      publicKey
    );

    toast({
      title: "¡Postulación enviada!",
      description: "Gracias por tu interés. Revisaremos tu perfil pronto.",
    });

    // Resetear formulario y cerrar panel
    form.reset();
    handleSheetClose();
  } catch (error) {
    console.error("Error al enviar la postulación:", error);
    toast({
      variant: "destructive",
      title: "Error",
      description: "No se pudo enviar tu postulación. Intenta más tarde.",
    });
  }
};

  return (
    <>
      <section id="careers" className="py-20 lg:py-32 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold font-headline text-primary sm:text-4xl">
              Únete a Nuestro Equipo
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Buscamos profesionales apasionados por la seguridad y la excelencia. Si compartes nuestros valores, queremos conocerte.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-4xl">
            <Accordion type="single" collapsible className="w-full">
              {jobOpenings.map((job) => (
                <AccordionItem key={job.id} value={job.id} className="bg-card border-b rounded-lg mb-2 shadow-sm">
                  <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline px-6 py-4">
                    <div>
                      {job.title}
                      <p className="text-sm font-normal text-muted-foreground">{job.location}</p>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="p-6 pt-0">
                    <h4 className="font-semibold">Requisitos:</h4>
                    <ul className="mt-2 list-disc list-inside space-y-1 text-muted-foreground">
                      {job.requirements.map((req, i) => (
                        <li key={i}>{req}</li>
                      ))}
                    </ul>
                    <Button className="mt-6" onClick={() => handleApplyClick(job)}>
                      Aplicar Ahora
                    </Button>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <Sheet open={!!selectedJob} onOpenChange={(open) => !open && handleSheetClose()}>
        <SheetContent className="sm:max-w-lg w-full overflow-y-auto">
          {selectedJob && (
            <>
              <SheetHeader className="mb-6 text-left">
                <SheetTitle className="text-2xl font-headline">Aplicar para {selectedJob.title}</SheetTitle>
                <SheetDescription>
                  Completa el formulario para enviar tu postulación. Nos pondremos en contacto contigo a la brevedad.
                </SheetDescription>
              </SheetHeader>
              <Form {...form}>
                <form className="space-y-6">
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
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Teléfono (Opcional)</FormLabel>
                        <FormControl>
                          <Input placeholder="Tu número de teléfono" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="coverLetter"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Carta de Presentación</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Cuéntanos por qué eres el candidato ideal..." rows={6} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="flex flex-col sm:flex-row gap-2 pt-4">
                    <Button
  type="button"
  onClick={form.handleSubmit(onSubmit)}
  className="w-full"
  disabled={form.formState.isSubmitting}
>
  {form.formState.isSubmitting ? (
    <>
      Enviando...
    </>
  ) : (
    <>
      <Mail className="mr-2 h-4 w-4" /> Enviar Postulación
    </>
  )}
</Button>
                    <Button type="button" onClick={form.handleSubmit((data) => onSubmit(data, 'whatsapp'))} variant="secondary" className="w-full">
                        <MessageCircle className="mr-2 h-4 w-4" /> Enviar por WhatsApp
                    </Button>
                  </div>
                </form>
              </Form>
            </>
          )}
        </SheetContent>
      </Sheet>
    </>
  );
};

export default CareersSection;
