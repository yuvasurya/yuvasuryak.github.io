import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Experience } from './pages/Experience';
import { Skills } from './pages/Skills';
import { Projects } from './pages/Projects';
import { Contact } from './pages/Contact';

export default function App() {
  return (
    <Router>
      <div className="bg-black text-white min-h-screen font-sans">
        <nav className="p-4 flex justify-between items-center border-b border-gray-700">
          <h1 className="text-xl font-bold">Yuva | Cybersecurity</h1>
          <div className="space-x-4">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/about" className="hover:underline">About</Link>
            <Link to="/experience" className="hover:underline">Experience</Link>
            <Link to="/skills" className="hover:underline">Skills</Link>
            <Link to="/projects" className="hover:underline">Projects</Link>
            <Link to="/contact" className="hover:underline">Contact</Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}