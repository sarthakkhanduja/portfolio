import Lottie from "lottie-react";
import blinkingAnimation from "../assets/blinkingAnimation.json";
import myPicture from "../assets/me.jpg";
import Marquee from "react-fast-marquee";
import backgroundImage from "../assets/background.svg";
import ProjectItem from "./ProjectItem";
import MarqueeItem from "./MarqueeItem";
import NavbarListItem from "./NavBarListItem";
import { useState, useEffect } from "react"; 
import About from "./About";

interface HomeProps {
    onScrollToExperience: () => void;
    onScrollToWorks: () => void;
    onScrollToGetToWork: () => void;
    onScrollToFoodieAI: () => void;
    onScrollToContact: () => void;
}

function Home({ onScrollToExperience, onScrollToWorks, onScrollToGetToWork, onScrollToFoodieAI, onScrollToContact }: HomeProps) {
    const [activeComponent, setActiveComponent] = useState<JSX.Element | null>(null);
    const [isScrolled, setIsScrolled] = useState(false);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            // Change this value to adjust when the navbar changes
            const scrollThreshold = window.innerHeight * 0.1; // 10% of viewport height
            if (window.scrollY > scrollThreshold) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleClose = () => {
        setActiveComponent(null);  // Close the active component
    };

    return (
        <div className="w-full h-screen flex flex-col bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
            
            {/* Navbar */}
            <div className={`fixed top-0 left-0 w-full flex flex-row justify-between items-center py-8 px-16 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : ''}`}>
                <div className={`flex justify-start items-center ${isScrolled ? 'w-auto' : 'w-1/2'}`}>
                    <img src={myPicture} className={`h-8 w-8 rounded-full object-cover mx-2 transition-all duration-300 ${isScrolled ? 'block' : ''}`} alt="My Picture"/>
                    {!isScrolled && <h5 className="font-display text-xl">sarthakkhanduja.</h5>}
                </div>
                <div className={`flex-row flex justify-end items-center mr-10 px-4 py-2 rounded-[2rem] transition-all duration-300 ${isScrolled ? 'bg-gray-200' : 'bg-white'}`}>
                    <NavbarListItem label="About" onClick={() => setActiveComponent(<About onClose={handleClose} />)} />
                    <NavbarListItem label="Experience" onClick={onScrollToExperience} />
                    <NavbarListItem label="Works" onClick={onScrollToWorks} />
                    <NavbarListItem label="Contact" onClick={onScrollToContact} />
                </div>
            </div>

            {/* Main Content */}
            <div className={`flex-grow flex flex-row w-full transition-all duration-300 pt-28 ${activeComponent ? 'blur-md' : ''}`}>
                <div className="flex flex-col pl-16 pb-16 w-3/5">
                    <div className="flex flex-col pb-8 -mt-12">
                        <p className="text-[10rem] font-display font-custom">I'm Sarthak</p>
                        <p className="text-[10rem] font-display font-custom -mt-24">Khanduja.</p>
                    </div>
                    <div className="w-[30%] flex flex-row justify-start items-center border-2 border-[#4FC153] rounded-3xl transition-colors duration-800 ease-in-out hover:cursor-pointer animate-background"
                        onClick={() => {
                            window.open("https://drive.google.com/file/d/15RwiWM8LRF64dBgOckrjXuw7Q9h7X_Bq/view?usp=sharing");
                        }}>
                        <Lottie animationData={blinkingAnimation} loop={true} autoplay={true} className="h-8 w-8 ml-4" />
                        <p className="text-xl font-grotesk font-custom ml-1">available for opportunities</p>
                    </div>
                    <div className="mt-16">
                        <p className="text-7xl font-display">Transforming ideas into reality,</p>
                        <p className="text-7xl font-display mt-4">one line of code at a time.</p>
                    </div>
                </div>
                <div className="w-2/5 flex justify-start p-36">
                    <div className="w-full">
                        <div className="font-display text-2xl tracking-wider text-gray-500">
                            <p>SELECTED PROJECTS</p>
                        </div>
                        <div className="mt-6 text-3xl font-display">
                            <ProjectItem name={"DocuTalk"} onClick={onScrollToWorks}/>
                            <ProjectItem name={"GetToWork"} onClick={onScrollToGetToWork} />
                            <ProjectItem name={"FoodieAI"} onClick={onScrollToFoodieAI} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Marquee */}
            <div className={`h-[108px] w-full bg-[#DFFF9C] flex justify-center items-center font-bold transition-all duration-300 ${activeComponent ? 'blur-md' : ''}`}>
                <Marquee autoFill={true}>
                    <MarqueeItem label="Based in Windsor, ON" />
                    <MarqueeItem label="3+ years of experience" />
                    <MarqueeItem label="Brewing Digital Solutions" />
                </Marquee>
            </div>

            {/* Conditionally render the active component */}
            {activeComponent && (
                <div className="absolute top-0 right-0 w-3/5 h-full bg-white z-10 p-8 ease-in-out duration-1600">
                    {activeComponent}
                </div>
            )}
        </div>
        
    );
}

export default Home;
