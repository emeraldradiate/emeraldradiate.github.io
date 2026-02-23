import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SkincareProject from './pages/SkincareProject';
import ColorReducerProject from './pages/ColorReducerProject';
import TechnicalWork from './pages/TechnicalWork';
import CreativeWork from './pages/CreativeWork';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/technical" element={<TechnicalWork />} />
        <Route path="/creative" element={<CreativeWork />} />
        <Route path="/projects/skincare" element={<SkincareProject />} />
        <Route path="/project-three" element={<ColorReducerProject />} />
        {/* Add more project routes here as you create them */}
      </Routes>
    </Router>
  );
}

export default App;