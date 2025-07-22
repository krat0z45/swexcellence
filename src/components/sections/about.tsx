import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Eye, Gem, Target } from 'lucide-react';

const aboutData = [
  {
    icon: <Target className="h-10 w-10 text-primary" />,
    title: 'Misión',
    description: 'Proporcionar al mercado un nuevo concepto de Seguridad Industrial, Protección, Salud Ocupacional y Control Ambiental a través del manejo integral de los sistemas, con la firme convicción de la mejora continua y el bienestar de su empresa. Emprender acciones que permitan la formación integral de personas comprometidas con la prevención de acontecimientos no deseados. Fomentar la cultura, conciencia y respeto del medio ambiente que nos rodea.',
  },
  {
    icon: <Eye className="h-10 w-10 text-primary" />,
    title: 'Visión',
    description: 'Formar personal con un alto desempeño    integral, alcanzando productividades óptimas de acuerdo a sus necesidades y recursos. Mantener la conciencia y cultura del personal a través del sistema integral implementado en las distintas áreas de trabajo. Prevalecer en el mercado a través de nuevos productos y servicios creados en base a las necesidades de nuestros clientes.',
  },
  {
    icon: <Gem className="h-10 w-10 text-primary" />,
    title: 'Valores',
    description: 'Liderazgo, Servicio, Trabajo en equipo, Desarrollo, Lealtad, Responsabilidad. Estos pilares guían cada una de nuestras acciones y decisiones.',
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold font-headline text-primary sm:text-4xl">
            Nuestra Filosofía
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            En SW Safety Excellence, nos regimos por una filosofía clara que impulsa cada proyecto y colaboración.
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {aboutData.map((item, index) => (
            <Card key={index} className="transform transition-all duration-500 hover:scale-105 hover:shadow-xl hover:-translate-y-2 bg-card">
              <CardHeader className="items-center text-center">
                {item.icon}
                <CardTitle className="mt-4 font-headline text-2xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
