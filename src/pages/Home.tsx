import React from 'react';
import { HeroSection } from '../components/sections/HeroSection';
import { AboutSection } from '../components/sections/AboutSection';
import { CategoryGrid } from '../components/sections/CategoryGrid';
import { FeaturedServices } from '../components/sections/FeaturedServices';
import { OilsCarouselSection } from '../components/sections/OilsCarouselSection';
import { TestimonialsSection } from '../components/sections/TestimonialsSection';
import { ExperienceSection } from '../components/sections/ExperienceSection';
import { OilShowcase } from '../components/sections/OilShowcase';

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
      <OilsCarouselSection onOpenBooking={onOpenBooking} />
      <OilShowcase onOpenBooking={onOpenBooking} />
      <ExperienceSection />
      <TestimonialsSection />
    </div>
  );
};
