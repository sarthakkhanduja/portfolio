// import { HashRouter, Routes, Route } from 'react-router-dom';
// import Home from './components/Home';
// import Works from './components/Works';
// import Contact from './components/Contact';
// import Timeline from './components/Timeline';
// import ProjectDocuTalk from './components/ProjectDocuTalk';
// import ProjectGetToWork from './components/ProjectGetToWork';
// import ProjectFoodieAI from './components/ProjectFoodieAI';
// // import DevInternModal from './components/DevInternModal';
// // import SeniorAnalystModal from './components/SeniorAnalystModal';

// function App() {

//   return (
//     // <div>
//     //   <HashRouter>
//     //     <Routes>
//     //       <Route path="/" element={<Home />} />
//     //       <Route path="/works" element={<Works />} />
//     //       <Route path="/contact" element={<Contact />} />
//     //       <Route path="/timeline" element={<Timeline />} />
//     //       {/* <Route path="/modal" element={<SeniorAnalystModal />} /> */}
//     //     </Routes>
//     //   </HashRouter>
//     // </div>

//     <div className="relative h-screen w-full overflow-y-scroll">
//         <Home />
//         <Timeline />
//         <ProjectDocuTalk />
//         <ProjectGetToWork />
//         <ProjectFoodieAI />
//     </div>
//   )
// }

// export default App




import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Works from './components/Works';
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
    </div>
  );
}

export default App;
