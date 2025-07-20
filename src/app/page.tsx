import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import HeroSection from '@/components/sections/hero';
import AboutSection from '@/components/sections/about';
import TeamSection from '@/components/sections/team';
import ServicesSection from '@/components/sections/services';
import GallerySection from '@/components/sections/gallery';
import CareersSection from '@/components/sections/careers';
import ContactSection from '@/components/sections/contact';
import WhatsAppButton from '@/components/whatsapp-button';
import ClientsSection from '@/components/sections/clients';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <GallerySection />
        <AboutSection />
        <TeamSection />
        <ClientsSection />
        <CareersSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
