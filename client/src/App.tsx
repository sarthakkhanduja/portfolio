import Home from './components/Home';
import Contact from './components/Contact';
import Timeline from './components/Timeline';
import ProjectDocuTalk from './components/ProjectDocuTalk';
import ProjectGetToWork from './components/ProjectGetToWork';
import ProjectFoodieAI from './components/ProjectFoodieAI';
import { useRef, useState, useEffect } from "react";
import ReactGA from 'react-ga4';

function App() {
  const [hideNav, setHideNav]= useState(false);

  // references for each section
  const homeRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const worksRef = useRef<HTMLDivElement>(null);
  const getToWorkRef = useRef<HTMLDivElement>(null);
  const foodieAIRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  // Initialize Google Analytics when the app mounts
  useEffect(() => {
    ReactGA.initialize('G-XXXXXXX'); // Replace with your GA4 Measurement ID
    ReactGA.send('pageview');
  }, []);

  // Function to scroll to a specific section and log a page view for each scroll
  const scrollToSection = (ref: React.RefObject<HTMLDivElement>, sectionName: string) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
    ReactGA.send({ hitType: "pageview", page: `/${sectionName}` });
  };

  return (
    <div className="snap-y snap-mandatory flex flex-col h-screen w-full ">
        {/* Homepage */}
        <div ref={homeRef} className="snap-start">
          <Home
          onScrollToHome={() => scrollToSection(homeRef, 'home')}
          onScrollToExperience={() => scrollToSection(timelineRef, 'experience')}
          onScrollToWorks={() => scrollToSection(worksRef, 'docutalk')}
          onScrollToGetToWork={() => scrollToSection(getToWorkRef, 'gettowork')}
          onScrollToFoodieAI={() => scrollToSection(foodieAIRef, 'foodieai')}
          onScrollToContact={() => scrollToSection(contactRef, 'contact')}
          hideNav={hideNav}
          />
        </div>

        {/* Experience */}
        <div ref={timelineRef} className="snap-start">
          <Timeline setHideNav={setHideNav} onScrollToExperience={() => scrollToSection(timelineRef, 'experience')} />
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
          <Contact onScrollToHome={() => scrollToSection(homeRef, 'home')} />
        </div>
    </div>
  );
}

export default App;
