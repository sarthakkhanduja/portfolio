import Lottie from "lottie-react";
import blinkingAnimation from "../assets/blinkingAnimation.json";
import myPicture from "../assets/me.jpg";
import Marquee from "react-fast-marquee";
import ProjectItem from "./ProjectItem";
import MarqueeItem from "./MarqueeItem";
import NavbarListItem from "./NavBarListItem";
import { useState, useEffect } from "react";
import About from "./About";

interface HomeProps {
    onScrollToHome: () => void;
    onScrollToExperience: () => void;
    onScrollToWorks: () => void;
    onScrollToGetToWork: () => void;
    onScrollToFoodieAI: () => void;
    onScrollToContact: () => void;
    hideNav: boolean;
}

function Home({
  onScrollToHome,
  onScrollToExperience,
  onScrollToWorks,
  onScrollToGetToWork,
  onScrollToFoodieAI,
  onScrollToContact,
  hideNav,
}: HomeProps) {
  const [activeComponent, setActiveComponent] = useState<JSX.Element | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = window.innerHeight * 0.1; // 10% of viewport height
      if (window.scrollY > scrollThreshold) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle disabling/enabling background scroll
  useEffect(() => {
    if (activeComponent) {
      document.body.style.overflow = "hidden"; // Disable background scroll
    } else {
      document.body.style.overflow = "auto"; // Enable background scroll
    }

    return () => {
      document.body.style.overflow = "auto"; // Ensure reset on unmount
    };
  }, [activeComponent]);

  const handleClose = () => {
    setActiveComponent(null);
  };

  return (
    <div className="w-full min-h-screen flex flex-col">

      {/* Navbar */}
      <div className={`z-10 fixed top-0 left-0 w-full flex flex-row flex-grow items-center py-6 px-4 md:px-10 justify-center transition-all duration-300 ${hideNav ? 'md:hidden' : ''}`}>
        <div className="flex flex-grow justify-between rounded-full bg-white w-full border-solid border-2 border-muted md:bg-transparent md:border-none">
          <div className={`flex justify-start items-center backdrop-blur-sm px-2 bg-white/50 rounded-[2rem] ${isScrolled ? 'w-auto' : 'w-1/2'} hover:cursor-pointer`} onClick={onScrollToHome}>
            <img src={myPicture} className={`h-8 w-8 rounded-full object-cover mx-2 transition-all duration-300 ${isScrolled ? 'block' : ''}`} alt="My Picture" />
            <h5 className="hidden md:block font-display text-xl">sarthakkhanduja. </h5>
          </div>

          <div className="flex-row flex justify-end items-center py-2 rounded-[2rem] transition-all duration-300 backdrop-blur-md bg-white/50 pr-2 md:pr-0">
            <NavbarListItem
              label="About"
              onClick={() => {
                onScrollToHome();
                setTimeout(() => {
                  setActiveComponent(<About onClose={handleClose} />);
                }, 500);
              }}
            />
            <NavbarListItem label="Experience" onClick={onScrollToExperience} />
            <NavbarListItem label="Works" onClick={onScrollToWorks} />
            <NavbarListItem label="Contact" onClick={onScrollToContact} />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className={`flex-grow flex flex-col gap-4 sm:gap-0 justify-center md:flex-row md:justify-around w-full md:items-center px-4 md:px-6 transition-all duration-300 ${activeComponent ? 'blur-md' : ''}`}>
        <div className="flex flex-col gap-3 sm:gap-0 pb-2 mt-24 lg:mt-12 md:w-3/5">
          <div className="flex flex-col pb-8 text-6xl sm:text-7xl lg:text-9xl">
            <p className="font-display font-custom">I'm Sarthak</p>
            <p className="font-display font-custom ">Khanduja.</p>
          </div>
          <div className="lg:mt-6 max-w-min inline-flex justify-start items-center border-2 border-[#4FC153] rounded-3xl transition-colors duration-800 ease-in-out hover:cursor-pointer animate-background"
            onClick={() => window.open("https://drive.google.com/file/d/1hgu1fB564qWMtqFQLRVILN6QANc5G5UO/view?usp=sharing")}
          >
            <Lottie animationData={blinkingAnimation} loop={true} autoplay={true} className="h-8 w-8 ml-4" />
            <p className="text-sm md:text-xl font-grotesk font-custom p-2 ml-1 text-nowrap mr-4 ">available for opportunities</p>
          </div>
          <div className="mt-8 lg:mt-12 font-display text-2xl sm:text-4xl md:text-5xl leading-8">
            <p className="font-display">Transforming ideas into reality,</p>
            <p className="font-display ">one line of code at a time.</p>
          </div>
        </div>

        <div className="flex h-full md:w-2/6 mt-10 md:mt-6 mb-10 md:mb-0">
          <div className="w-full">
            <div className="font-display text-base md:text-xl tracking-wider text-gray-500">
              <p>SELECTED PROJECTS</p>
            </div>
            <div className="mt-6 text-xl md:text-2xl font-display">
              <ProjectItem name={"DocuTalk"} onClick={onScrollToWorks} />
              <ProjectItem name={"GetToWork"} onClick={onScrollToGetToWork} />
              <ProjectItem name={"FoodieAI"} onClick={onScrollToFoodieAI} />
            </div>
          </div>
        </div>
      </div>

      {/* Footer Marquee */}
      <div className={`h-16 sm:h-[90px] z-1 w-full bg-[#DFFF9C] flex justify-center items-center font-bold transition-all duration-300 ${activeComponent ? 'blur-md' : ''}`}>
        <Marquee autoFill={true}>
          <MarqueeItem label="Based in Toronto, ON" />
          <MarqueeItem label="3+ years of experience" />
          <MarqueeItem label="Brewing Digital Solutions" />
        </Marquee>
      </div>

      {/* Conditionally render the active component */}
      {activeComponent && (
        <div className="fixed top-0 right-0 w-3/5 h-full bg-white z-20 p-8 overflow-y-auto transition-transform duration-700 ease-in-out">
          {activeComponent}
        </div>
      )}
    </div>
  );
}

export default Home;
