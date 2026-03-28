import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import VisitLogger from './components/VisitLogger';
import Landing from './pages/Landing';
import About from './pages/About';
import Workshops from './pages/Workshops';
import Reflections from './pages/Archive';
import Guides from './pages/Resources';
import GuideDetail from './pages/GuideDetail';
import ShareStory from './pages/SubmitStory';

function App() {
  return (
    <Router>
      <VisitLogger />
      <div className="app-container">
        <div className="bg-blobs">
          <div className="blob-1"></div>
          <div className="blob-2"></div>
        </div>
        
        <Navbar />
        
        <main className="main-content" style={{ minHeight: 'calc(100vh - 80px)' }}>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/about" element={<About />} />
            <Route path="/workshops" element={<Workshops />} />
            <Route path="/reflections" element={<Reflections />} />
            <Route path="/guides" element={<Guides />} />
            <Route path="/guides/:slug" element={<GuideDetail />} />
            <Route path="/share" element={<ShareStory />} />
          </Routes>
        </main>

        <Footer />
        <Analytics />
      </div>
    </Router>
  );
}

export default App;
