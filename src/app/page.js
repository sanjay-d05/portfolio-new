import Hero from '@/components/Hero';
import Introduction from '@/components/Introduction';
import About from '@/components/About';
import TechStack from '@/components/TechStack';
import ToolStack from '@/components/ToolStack';
import Projects from '@/components/Projects';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';
// import Dummy from '@/components/Dummy';

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <Introduction />
      <About />
      <TechStack />
      <ToolStack />
      <Projects />
      <Blog />
      <Contact />
      {/* <Dummy /> */}
    </main>
  );
}
