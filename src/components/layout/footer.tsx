import { Linkedin, Facebook, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image'; // Asegúrate de importar Image de next/image

const Footer = () => {
  return (
    <footer className="bg-[var(--footer-bg)] text-primary-foreground">
      <div className="container mx-auto px-6 py-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          
          {/* Logo + Copyright */}
          <div className="flex items-center gap-4">
            <Image
              src="/img/logo.png" // Coloca tu logo en la carpeta public/
              alt="SW Safety Excellence Logo"
              width={350}
              height={350}
            />
            <span className="text-sm text-primary-foreground/70">
              &copy; {new Date().getFullYear()} SW Safety Excellence. Todos los derechos reservados.
            </span>
          </div>

          {/* Redes sociales */}
          <div className="flex space-x-2">
            <Button variant="ghost" size="icon" asChild className="text-primary-foreground/70 hover:text-primary-foreground">
              <a href="#" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild className="text-primary-foreground/70 hover:text-primary-foreground">
              <a href="#" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild className="text-primary-foreground/70 hover:text-primary-foreground">
              <a href="#" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
            </Button>
          </div>

          {/* Enlaces adicionales */}
          <div className="flex space-x-4 text-sm">
            <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground">Aviso de Privacidad</a>
            <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground">Términos y Condiciones</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
