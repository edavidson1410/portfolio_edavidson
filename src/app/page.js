require('dotenv').config();

import NavBar from '../components/NavBar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectSection from './components/ProjectSection';
import ContactSection from './components/ContactSection';
import Socials from '@/components/Socials';

export default function Home() {
  
  return (
    <main >
      <NavBar />
      <section className="flex min-h-screen max-w-full flex-col m-4 text-center md:m-8">
        <HeroSection />
        <AboutSection />
        <ProjectSection />
        <ContactSection />
      </section>

    </main>
  );
}
