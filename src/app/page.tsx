import { Header } from '@/components/layout/Header';
import { HeroSection } from '@/components/sections/HeroSection';
import { StorySection } from '@/components/sections/StorySection';
import { SignatureDishes } from '@/components/sections/SignatureDishes';
import { MenuPreview } from '@/components/sections/MenuPreview';
import { AmbianceSection } from '@/components/sections/AmbianceSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { CateringSection } from '@/components/sections/CateringSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { StatsSection } from '@/components/sections/StatsSection';
import { GallerySection } from '@/components/sections/GallerySection';
import { ChefSection } from '@/components/sections/ChefSection';
import { LocationHoursSection } from '@/components/sections/LocationHoursSection';
import { DeliverySection } from '@/components/sections/DeliverySection';
import { FAQSection } from '@/components/sections/FAQSection';
import { ReservationSection } from '@/components/sections/ReservationSection';
import { FinalCTASection } from '@/components/sections/FinalCTASection';
import { Footer } from '@/components/sections/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <StorySection />
        <SignatureDishes />
        <MenuPreview />
        <AmbianceSection />
        <ServicesSection />
        <CateringSection />
        <TestimonialsSection />
        <StatsSection />
        <GallerySection />
        <ChefSection />
        <LocationHoursSection />
        <DeliverySection />
        <FAQSection />
        <ReservationSection />
        <FinalCTASection />
      </main>
      <Footer />
    </>
  );
}
