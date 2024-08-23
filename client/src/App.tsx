import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Project from './components/Project';
import About from './components/About';
import Works from './components/Works';
import Contact from './components/Contact';

function App() {

  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Works />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
