
"use client"

import React from 'react';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const clientLogos = [
  { src: "/img/clients_logos/acciona.png", alt: "Client Logo 1", hint: "tech company" },
  { src: "/img/clients_logos/bosh.png", alt: "Client Logo 2", hint: "startup logo" },
  { src: "/img/clients_logos/cemex.png", alt: "Client Logo 3", hint: "finance group" },
  { src: "/img/clients_logos/walmart.png", alt: "Client Logo 4", hint: "software company" },
  { src: "/img/clients_logos/semarnat.png", alt: "Client Logo 5", hint: "global corp" },
  { src: "/img/clients_logos/achilles.png", alt: "Client Logo 6", hint: "eco solutions" },
  { src: "/img/clients_logos/bimbo.png", alt: "Client Logo 7", hint: "creative agency" },
  { src: "/img/clients_logos/ultra.png", alt: "Client Logo 8", hint: "media house" },
];

const ClientsSection = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  return (
    <section id="clients" className="py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-headline text-primary sm:text-4xl">
            Nuestros Clientes
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Confían en nosotros para garantizar la seguridad y el bienestar de sus equipos.
          </p>
        </div>
        <Carousel
          plugins={[plugin.current]}
          opts={{
            align: "start",
            loop: true,
            slidesToScroll: 1,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {clientLogos.map((logo, index) => (
              <CarouselItem key={index} className="pl-4 basis-1/2 md:basis-1/3 lg:basis-1/6">
                <div className="p-1">
                  <div className="flex aspect-video items-center justify-center p-6 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={150}
                      height={60}
                      data-ai-hint={logo.hint}
                      className="object-contain"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default ClientsSection;
