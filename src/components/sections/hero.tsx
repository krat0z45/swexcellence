import { Button } from '@/components/ui/button';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen min-h-[700px] w-full flex items-center justify-center">
      <Image
        src="/img/herosw.jpg"
        alt="Equipo de trabajo con equipo de seguridad"
        fill
        style={{ objectFit: 'cover' }}
        className="brightness-50"
        data-ai-hint="safety excellence"
        priority
      />
      <div className="relative z-10 text-center">
        <div className="container mx-auto px-6 text-white animate-fade-in" style={{animationDuration: '1s'}}>
          <div className="font-serif text-3xl italic sm:text-4xl lg:text-5xl mb-4">Tu Aliado Estratégico</div>
          <h1 className="text-4xl font-extrabold font-headline uppercase leading-tight sm:text-5xl lg:text-7xl">
            SW Safety Excellence
          </h1>
          <div className="mt-8">
            <Button size="lg" className="h-16 px-10 text-lg font-bold uppercase" asChild>
              <a href="#services">Conoce Más</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;