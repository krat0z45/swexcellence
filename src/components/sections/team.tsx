import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '../ui/button';
import { Linkedin } from 'lucide-react'; // ✅ Importado

const teamMembers = [
  {
    name: 'Carlos Alberto Sáenz',
    role: 'Director General y Consultor Principal',
    imageUrl: '/img/team/carlos.jpeg',
    linkedinUrl: 'https://www.linkedin.com/in/sw-safety-46b522377/', // Reemplaza con el enlace real
    hint: 'professional headshot',
  },
  {
    name: 'Nidia Woo González',
    role: 'Directora de Operaciones y Capacitación',
    imageUrl: '/img/team/nidia.jpeg',
    linkedinUrl: 'https://www.linkedin.com/in/sw-safety-46b522377/', // Reemplaza con el enlace real
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
            <Card
              key={member.name}
              className="overflow-hidden text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 bg-card"
            >
              {/* Imagen con altura adaptable */}
              <CardHeader className="p-0 aspect-square">
                <div className="relative w-full h-full">
                  <Image
                    src={member.imageUrl}
                    alt={`Foto de ${member.name}`}
                    fill
                    style={{
                      objectFit: 'cover',
                      objectPosition: 'top 20%',
                    }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
              </CardHeader>

              <CardContent className="p-6">
                <CardTitle className="font-headline text-2xl text-primary">{member.name}</CardTitle>
                <p className="mt-2 text-primary/80 font-semibold">{member.role}</p>

                {/* Botón con ícono de LinkedIn */}
                <Button
                  variant="outline"
                  size="sm"
                  className="mt-4 flex items-center gap-2 text-primary border-primary hover:bg-primary/10 transition-colors"
                  asChild
                >
                  <a
                    href={member.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Ver perfil de ${member.name} en LinkedIn`}
                  >
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
