import HeroSection from "./components/HeroSection"
import NavBar from './components/NavBar'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col container mx-auto text-center">
      <NavBar />
      <HeroSection />
    </main>
  );
}
