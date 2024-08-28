import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Works from './components/Works';
import Contact from './components/Contact';
import Timeline from './components/Timeline';
import Project from './components/ProjectDocuTalk';
// import DevInternModal from './components/DevInternModal';
// import SeniorAnalystModal from './components/SeniorAnalystModal';

function App() {

  return (
    // <div>
    //   <HashRouter>
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/works" element={<Works />} />
    //       <Route path="/contact" element={<Contact />} />
    //       <Route path="/timeline" element={<Timeline />} />
    //       {/* <Route path="/modal" element={<SeniorAnalystModal />} /> */}
    //     </Routes>
    //   </HashRouter>
    // </div>

    <div className="relative h-screen w-full overflow-y-scroll">
        <Home />
        <Timeline />
        <Project />
    </div>
  )
}

export default App
