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
      <section className="flex min-h-screen max-w-full flex-col m-4 text-center md:m-0 md:mb-10">
        <HeroSection />
        <AboutSection />
        <ProjectSection />
        <ContactSection />
      </section>
      <h1 className="flex justify-center items-center bg-secondary h-10">Daevo Web Designs circa 2024</h1>
    </main>
  );
}
