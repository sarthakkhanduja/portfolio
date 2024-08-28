import Lottie from "lottie-react";
import blinkingAnimation from "../assets/blinkingAnimation.json";
import myPicture from "../assets/me.jpg";
import Marquee from "react-fast-marquee";
import backgroundImage from "../assets/background.svg";
import ProjectItem from "./ProjectItem";
import MarqueeItem from "./MarqueeItem";
import NavbarListItem from "./NavBarListItem";
import { useState } from "react"; 
import About from "./About";
import Contact from "./Contact";
import Works from "./Works";
import { useNavigate } from "react-router-dom";

function Home() {
    // const navigate = useNavigate();

    const [activeComponent, setActiveComponent] = useState<JSX.Element | null>(null);


    const handleClose = () => {
        setActiveComponent(null);  // Close the active component
    };

    return (
        <div className="w-full h-screen flex flex-col bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
            {/* Navbar */}
            <div className="h-28 w-full py-4 px-16 flex flex-row">
                <div className="w-1/2 flex justify-start">
                    {/* <div className="h-full flex flex-row justify-center items-center cursor-pointer" onClick={() => {
                        navigate('/');
                    }}> */}
                    <div className="h-full flex flex-row justify-center items-center cursor-pointer">
                        <img src={myPicture} className="h-8 w-8 rounded-full object-cover mx-2" alt="My Picture"/>
                        <h5 className="font-display text-xl">sarthakkhanduja.</h5>
                    </div>
                </div>
                <div className="w-1/2 flex-row flex justify-end items-center mr-10">
                    <NavbarListItem label="About" onClick={() => setActiveComponent(<About onClose={handleClose} />)} />
                    <NavbarListItem label="Works" onClick={() => setActiveComponent(<Works />)} />
                    <NavbarListItem label="Contact" onClick={() => setActiveComponent(<Contact />)} />
                </div>
            </div>

            {/* Main Content */}
            <div className={`flex-grow flex flex-row w-full transition-all duration-300 ${activeComponent ? 'blur-md' : ''}`}>
                <div className="flex flex-col pl-16 pb-16 w-3/5">
                    <div className="flex flex-col pb-8 -mt-12">
                        <p className="text-[10rem] font-display font-custom">I'm Sarthak</p>
                        <p className="text-[10rem] font-display font-custom -mt-24">Khanduja.</p>
                    </div>
                    <div className="w-[30%] flex flex-row justify-start items-center border-2 border-[#4FC153] rounded-3xl transition-colors duration-800 ease-in-out hover:cursor-default animate-background">
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
                            <ProjectItem name={"DocuTalk"} />
                            <ProjectItem name={"GetToWork"} />
                            <ProjectItem name={"FoodieAI"} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Marquee */}
            <div className={`h-20 w-full bg-[#DFFF9C] flex justify-center items-center transition-all duration-300 ${activeComponent ? 'blur-md' : ''}`}>
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
