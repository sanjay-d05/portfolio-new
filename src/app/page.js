import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Introduction from '@/components/Introduction';
import About from '@/components/About';
import TechStack from '@/components/TechStack';
import Projects from '@/components/Projects';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Introduction />
      <About />
      <TechStack />
      <Projects />
      <Blog />
      <Contact />
      <Footer />
    </main>
  );
}
