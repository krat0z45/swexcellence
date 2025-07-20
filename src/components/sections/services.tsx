import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ClipboardCheck, Users, SearchCheck, ShieldCheck, FileSearch, Siren } from 'lucide-react';

const services = [
  {
    icon: <ClipboardCheck className="h-10 w-10 text-primary" />,
    title: 'Consultoría y Asesoramiento',
    description: 'Ofrecemos orientación experta para desarrollar e implementar estrategias de seguridad eficaces y conformes a la normativa vigente.',
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: 'Capacitación y Entrenamiento',
    description: 'Cursos y talleres prácticos diseñados para empoderar a tu equipo con el conocimiento necesario para prevenir riesgos.',
  },
  {
    icon: <SearchCheck className="h-10 w-10 text-primary" />,
    title: 'Auditorías y Evaluaciones de Riesgos',
    description: 'Identificamos peligros potenciales y evaluamos tus procesos para garantizar un entorno de trabajo seguro y productivo.',
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-primary" />,
    title: 'Sistemas de Gestión (ISO 45001)',
    description: 'Te ayudamos a implementar y certificar sistemas de gestión de seguridad y salud en el trabajo reconocidos internacionalmente.',
  },
  {
    icon: <FileSearch className="h-10 w-10 text-primary" />,
    title: 'Investigación de Accidentes',
    description: 'Analizamos incidentes para determinar causas raíz y establecer medidas correctivas efectivas que eviten su recurrencia.',
  },
  {
    icon: <Siren className="h-10 w-10 text-primary" />,
    title: 'Planes de Emergencia y Respuesta',
    description: 'Desarrollamos planes robustos y personalizados para asegurar una respuesta rápida y organizada ante cualquier emergencia.',
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold font-headline text-primary sm:text-4xl">
            Nuestros Servicios
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Soluciones integrales diseñadas para proteger a tu equipo y optimizar tus operaciones.
          </p>
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card key={index} className="group text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <CardHeader className="items-center">
                <div className="rounded-full bg-primary/10 p-4 transition-transform duration-300 group-hover:scale-110">
                  {service.icon}
                </div>
                <CardTitle className="mt-4 font-headline text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
