import Home from './components/Home';
import Contact from './components/Contact';
import Timeline from './components/Timeline';
import ProjectDocuTalk from './components/ProjectDocuTalk';
import ProjectGetToWork from './components/ProjectGetToWork';
import ProjectFoodieAI from './components/ProjectFoodieAI';
import { useRef, useState } from "react";

function App() {

  const [hideNav, setHideNav]= useState(false);

  // references for each section
  const homeRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const worksRef = useRef<HTMLDivElement>(null);
  const getToWorkRef = useRef<HTMLDivElement>(null);
  const foodieAIRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  // Function to scroll to a specific section
  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="snap-y snap-mandatory flex flex-col h-screen w-full ">
        {/* Homepage */}
        <div ref={homeRef} className="snap-start">
          <Home
          onScrollToHome={() => scrollToSection(homeRef)}
          onScrollToExperience={() => scrollToSection(timelineRef)}
          onScrollToWorks={() => scrollToSection(worksRef)}
          onScrollToGetToWork={() => scrollToSection(getToWorkRef)}
          onScrollToFoodieAI={() => scrollToSection(foodieAIRef)}
          onScrollToContact={() => scrollToSection(contactRef)}
          hideNav={hideNav}
          />
        </div>

        {/* Experience */}
        <div ref={timelineRef} className="snap-start">
          <Timeline setHideNav={setHideNav} />
        </div>

        {/* DocuTalk */}
        <div ref={worksRef} className="snap-start">
          <ProjectDocuTalk />
        </div>

        {/* GetToWork */}
        <div ref={getToWorkRef} className="snap-start">
          <ProjectGetToWork />
        </div>

        {/* Foodie AI */}
        <div ref={foodieAIRef} className="snap-start">
          <ProjectFoodieAI />
        </div>

        {/* Contact */}
        <div ref={contactRef} className="snap-start">
          <Contact onScrollToHome={() => scrollToSection(homeRef)} />
        </div>
    </div>
  );
}

export default App;
