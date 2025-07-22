"use client";

import { Button } from '@/components/ui/button';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5218186609599?text=Hola Ing. Nidia,%20Quisiera%20más%20información%20sobre%20swsafetyexcellence.com"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <Button size="icon" className="h-16 w-16 rounded-full bg-[#25D366] hover:bg-[#128C7E] shadow-lg transform transition-transform duration-300 group-hover:scale-110">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="h-8 w-8 text-white fill-current"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 4.315 1.847 6.03l-1.21 4.42z" />
        </svg>
        <span className="sr-only">Contactar por WhatsApp</span>
      </Button>
    </a>
  );
};

export default WhatsAppButton;
