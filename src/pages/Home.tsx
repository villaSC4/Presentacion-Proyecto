import React from 'react';
import { HeroSection } from '../components/sections/HeroSection';
import { AboutSection } from '../components/sections/AboutSection';
import { CategoryGrid } from '../components/sections/CategoryGrid';
import { FeaturedServices } from '../components/sections/FeaturedServices';
import { OilsCarouselSection } from '../components/sections/OilsCarouselSection';
import { OilShowcase } from '../components/sections/OilShowcase';
import { QuiropracticaHighlight } from '../components/sections/QuiropracticaHighlight';
import { TestimonialsSection } from '../components/sections/TestimonialsSection';
import { SpineSection } from '../components/sections/SpineSection';

interface HomeProps {
  onOpenBooking: () => void;
  onSelectService: (serviceId: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onOpenBooking, onSelectService }) => {
  return (
    <div className="min-h-screen">
      <HeroSection onOpenBooking={onOpenBooking} />
      <CategoryGrid />
      <AboutSection />
      <FeaturedServices onSelectService={onSelectService} />
      <QuiropracticaHighlight onOpenBooking={onOpenBooking} />
      <OilsCarouselSection onOpenBooking={onOpenBooking} />
      <OilShowcase onOpenBooking={onOpenBooking} />
      <SpineSection onOpenBooking={onOpenBooking} />
      <TestimonialsSection />
    </div>
  );
};
