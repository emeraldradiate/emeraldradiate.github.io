import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import SkincareProject from './pages/SkincareProject';
import ArtistPortfolioProject from './pages/ArtistPortfolioProject';
import ColorReducerProject from './pages/ColorReducerProject';
import MindMapProject from './pages/MindMapProject';
import PortfolioWebsiteProject from './pages/PortfolioWebsiteProject';
import ColorApp2Project from './pages/ColorApp2Project';
import TechnicalWork from './pages/TechnicalWork';
import CreativeWork from './pages/CreativeWork';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/technical" element={<TechnicalWork />} />
        <Route path="/creative" element={<CreativeWork />} />
        <Route path="/projects/skincare" element={<SkincareProject />} />
        <Route path="/projects/artist-portfolio" element={<ArtistPortfolioProject />} />
        <Route path="/projects/color-reducer" element={<ColorReducerProject />} />
        <Route path="/projects/mind-map" element={<MindMapProject />} />
        <Route path="/projects/portfolio-website" element={<PortfolioWebsiteProject />} />
        <Route path="/projects/color-app" element={<ColorApp2Project />} />
        {/* Add more project routes here as you create them */}
      </Routes>
    </Router>
  );
}

export default App;