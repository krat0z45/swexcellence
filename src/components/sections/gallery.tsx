import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

const galleryImages = [
  { src: '/img/proyectos/1.jpeg', alt: 'Proyecto 1', hint: 'construction safety' },
  { src: '/img/proyectos/2.jpeg', alt: 'Proyecto 2', hint: 'industrial work' },
  { src: '/img/proyectos/3.jpeg', alt: 'Proyecto 3', hint: 'safety meeting' },
  { src: '/img/proyectos/4.jpeg', alt: 'Proyecto 4', hint: 'worker equipment' },
  { src: '/img/proyectos/5.jpeg', alt: 'Proyecto 5', hint: 'factory inspection' },
  { src: '/img/proyectos/6.jpeg', alt: 'Proyecto 6', hint: 'team collaboration' },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold font-headline text-primary sm:text-4xl">
            Proyectos Destacados
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Un vistazo a nuestro trabajo en acción y los resultados que hemos logrado para nuestros clientes.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image, index) => (
            <Card key={index} className="overflow-hidden group transition-all duration-500 hover:shadow-2xl hover:!scale-105 hover:-translate-y-2">
              <CardContent className="p-0">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={600}
                  height={400}
                  data-ai-hint={image.hint}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
