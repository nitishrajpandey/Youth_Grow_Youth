import AboutSection from "./Components/AboutSection/AboutSection";
import BlogSection from "./Components/BlogSection/BlogSection";
import Contact from "./Components/ContactSection/Contact";
import Hero from "./Components/HeroSection/Hero";
import Networking from "./Components/NetworkingSection/Networking";

function Home() {
  return (
    <div>
      <Hero />
      <AboutSection />
      <Networking />
      <BlogSection />
      <Contact />
    </div>
  );
}

export default Home;
