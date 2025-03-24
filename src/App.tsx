import Layout from './layouts/Layout';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import FoundationSection from './sections/FoundationSection';
import TokenomicsSection from './sections/TokenomicsSection';
import RoadmapSection from './sections/RoadmapSection';
import HowToBuySection from './sections/HowToBuySection';
import FaqSection from './sections/FaqSection';

function App() {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <FoundationSection />
      <TokenomicsSection />
      <RoadmapSection />
      <HowToBuySection />
      <FaqSection />
    </Layout>
  );
}

export default App;
