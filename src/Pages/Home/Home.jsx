import AboutSection from "./Components/AboutSection/AboutSection";
import BlogSection from "./Components/BlogSection/BlogSection";
import Hero from "./Components/HeroSection/Hero";
import Networking from "./Components/NetworkingSection/Networking";

function Home() {
  return (
    <div>
      <Hero />
      <AboutSection />
      <Networking />
      <BlogSection />
    </div>
  );
}

export default Home;
