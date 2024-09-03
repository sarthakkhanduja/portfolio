import Home from './components/Home';
import Contact from './components/Contact';
import Timeline from './components/Timeline';
import ProjectDocuTalk from './components/ProjectDocuTalk';
import ProjectGetToWork from './components/ProjectGetToWork';
import ProjectFoodieAI from './components/ProjectFoodieAI';
import { useRef } from "react";

function App() {

  // references for each section
  const timelineRef = useRef<HTMLDivElement>(null);
  const worksRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  // Function to scroll to a specific section
  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="snap-y snap-mandatory h-screen w-full overflow-y-scroll">
        {/* Homepage */}
        <div className="snap-start">
          <Home  
          onScrollToExperience={() => scrollToSection(timelineRef)}
          onScrollToWorks={() => scrollToSection(worksRef)}
          onScrollToContact={() => scrollToSection(contactRef)}
          />
        </div>

        {/* Experience */}
        <div ref={timelineRef} className="snap-start">
          <Timeline />
        </div>

        {/* DocuTalk */}
        <div ref={worksRef} className="snap-start">
          <ProjectDocuTalk />
        </div>

        {/* GetToWork */}
        <div className="snap-start">
          <ProjectGetToWork />
        </div>

        {/* Foodie AI */}
        <div className="snap-start">
          <ProjectFoodieAI />
        </div>

        {/* Contact */}
        <div ref={contactRef} className="snap-start">
          <Contact />
        </div>
    </div>
  );
}

export default App;
