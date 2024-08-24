import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Works from './components/Works';
import Contact from './components/Contact';
import Timeline from './components/Timeline';

function App() {

  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/works" element={<Works />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/timeline" element={<Timeline />} />
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
