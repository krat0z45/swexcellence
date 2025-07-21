import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ClipboardCheck, Users, SearchCheck, ShieldCheck, FileSearch, Siren, GraduationCap, Wrench, Lightbulb, Leaf } from 'lucide-react';

const services = [
  {
    icon: <ClipboardCheck className="h-10 w-10 text-primary" />,
    title: 'Sistemas de Gestión Integrado',
    description: 'Asesoría y gestión para certificaciones en sistemas ISO 9001, ISO 45001, ISO 14000, ISO 18001, ISO 50001.',
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-primary" />,
    title: 'Seguridad Industrial',
    description: 'Asesoría en seguridad industrial, cumplimiento de normatividad OSHA, STPS, NRF, NFPA.',
  },
  {
    icon: <Leaf className="h-10 w-10 text-primary" />,
    title: 'Protección Ambiental',
    description: 'Gestión ambiental, elaboración de manifiesto de impacto ambiental (MIA), cédula de operación anual (COA), estudios de ruido e iluminación.',
  },
  {
    icon: <Siren className="h-10 w-10 text-primary" />,
    title: 'Planes de Emergencia y Protección Civil',
    description: 'Elaboración de planes de protección civil con visto bueno, planes de evacuación y respuesta a emergencias.',
  },
  {
    icon: <FileSearch className="h-10 w-10 text-primary" />,
    title: 'Investigación de Accidentes',
    description: 'Investigación de accidentes e incidentes laborales, análisis de causas raíz y medidas correctivas.',
  },
  {
    icon: <SearchCheck className="h-10 w-10 text-primary" />,
    title: 'Gerenciamiento de Proyectos EHS',
    description: 'Gestión EHS en plantas de manufactura y proyectos de construcción.',
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: 'Ingenieros EHS y Personal Técnico',
    description: 'Renta de ingenieros EHS, coordinadores, supervisores, auxiliares, paramédicos, rescatistas y brigadas de emergencia.',
  },
  {
    icon: <GraduationCap className="h-10 w-10 text-primary" />,
    title: 'Capacitación y Formación',
    description: 'Capacitación en seguridad industrial, salud ocupacional, protección ambiental, uso de equipos de rescate y simulacros.',
  },
  {
    icon: <Lightbulb className="h-10 w-10 text-primary" />,
    title: 'Certificaciones y Reconocimientos',
    description: 'Asesoría en certificaciones como ESR, The Best Workplace, y participación en proyectos LEED.',
  },
  {
    icon: <Wrench className="h-10 w-10 text-primary" />,
    title: 'Equipos y Tecnología',
    description: 'Disponemos de detectores de gas, equipos de rescate en altura, equipos de respiración autónoma, camillas, medidores de ruido y luz.',
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