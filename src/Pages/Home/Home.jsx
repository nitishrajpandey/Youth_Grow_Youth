import AboutSection from "./Components/AboutSection/AboutSection";
import Hero from "./Components/HeroSection/Hero";
import Networking from "./Components/NetworkingSection/Networking";

function Home() {
  return (
    <div>
      <Hero />
      <AboutSection />
      <Networking />
    </div>
  );
}

export default Home;
