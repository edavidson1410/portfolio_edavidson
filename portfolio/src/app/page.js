import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'
import ProjectSection from './components/ProjectSection';
import ContactSection from './components/ContactSection';


export default function Home() {
  
  return (
    <main className="flex min-h-screen flex-col container mx-auto text-center">
      <NavBar />
      <HeroSection />
      <ProjectSection />
    </main>
  );
}
