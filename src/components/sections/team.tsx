import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Linkedin } from 'lucide-react';
import { Button } from '../ui/button';

const teamMembers = [
  {
    name: 'Carlos Alberto Sáenz',
    role: 'Director General y Consultor Principal',
    imageUrl: '/img/team/carlos.avif',
    hint: 'professional headshot',
  },
  {
    name: 'Nidia Woo González',
    role: 'Directora de Operaciones y Capacitación',
    imageUrl: '/img/team/nidia.jpg',
    hint: 'professional woman',
  },
];

const TeamSection = () => {
  return (
    <section id="team" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold font-headline text-primary sm:text-4xl">
            Conoce a Nuestro Equipo
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Profesionales experimentados y apasionados por la seguridad, listos para guiarte hacia la excelencia.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 justify-center max-w-4xl mx-auto">
          {teamMembers.map((member) => (
            <Card key={member.name} className="overflow-hidden text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 bg-card">
              <CardHeader className="p-0">
                <div className="relative h-80 w-full">
                  <Image
                    src={member.imageUrl}
                    alt={`Foto de ${member.name}`}
                    fill
                    style={{ objectFit: 'cover' }}
                    data-ai-hint={member.hint}
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="font-headline text-2xl text-primary">{member.name}</CardTitle>
                <p className="mt-2 text-primary/80 font-semibold">{member.role}</p>
              </CardContent>
              <CardFooter className="justify-center pb-6">
                 <Button variant="outline" size="icon" asChild>
                    <a href="#" aria-label={`LinkedIn de ${member.name}`}>
                        <Linkedin className="h-5 w-5" />
                    </a>
                 </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;