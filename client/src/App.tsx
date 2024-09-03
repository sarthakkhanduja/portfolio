import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import Timeline from './components/Timeline';
import ProjectDocuTalk from './components/ProjectDocuTalk';
import ProjectGetToWork from './components/ProjectGetToWork';
import ProjectFoodieAI from './components/ProjectFoodieAI';

function App() {
  return (
    <div className="snap-y snap-mandatory h-screen w-full overflow-y-scroll">
        <div className="snap-start">
          <Home />
        </div>
        <div className="snap-start">
          <Timeline />
        </div>
        <div className="snap-start">
          <ProjectDocuTalk />
        </div>
        <div className="snap-start">
          <ProjectGetToWork />
        </div>
        <div className="snap-start">
          <ProjectFoodieAI />
        </div>
        <div className="snap-start">
          <Contact />
        </div>
    </div>
  );
}

export default App;
