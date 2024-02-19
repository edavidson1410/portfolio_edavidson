import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectSection from './components/ProjectSection';
import ContactSection from './components/ContactSection';


export default function Home() {
  
  return (
    <main className="flex min-h-screen max-w-full flex-col m-4 text-center">
      <NavBar />
      <AboutSection />
      <HeroSection />
      <ProjectSection />
      <ContactSection />
    </main>
  );
}
