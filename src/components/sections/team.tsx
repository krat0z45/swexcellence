import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '../ui/button';

const teamMembers = [
  {
    name: 'Carlos Alberto Sáenz',
    role: 'Director General y Consultor Principal',
    imageUrl: '/img/team/carlos.jpeg',
    hint: 'professional headshot',
  },
  {
    name: 'Nidia Woo González',
    role: 'Directora de Operaciones y Capacitación',
    imageUrl: '/img/team/nidia.jpeg',
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
              
              {/* Imagen con altura adaptable */}
              <CardHeader className="p-0 aspect-square md:h-85"> {/* Altura responsive */}
                <div className="relative w-full h-full">
                  <Image
                    src={member.imageUrl}
                    alt={`Foto de ${member.name}`}
                    fill
                    style={{
                      objectFit: 'cover',
                      objectPosition: 'top 20%', // Ajuste fino: muestra más cara y cabeza
                    }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
              </CardHeader>

              <CardContent className="p-6">
                <CardTitle className="font-headline text-2xl text-primary">{member.name}</CardTitle>
                <p className="mt-2 text-primary/80 font-semibold">{member.role}</p>
              </CardContent>
              
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;