import Lottie from "lottie-react";
import blinkingAnimation from "../assets/blinkingAnimation.json";
import myPicture from "../assets/me.jpg";
import Marquee from "react-fast-marquee";
import bulletImg from "../assets/bullet.png";

function Home() {
    return (
        <div className="w-full h-screen flex flex-col">
            {/* Navbar */}
            <div className="h-24 w-full py-4 px-16 flex flex-row">
                <div className="w-1/2 flex justify-start">
                    <div className="flex flex-row justify-center items-center">
                        <img src={myPicture} className="h-8 w-8 rounded-full object-cover mx-2" alt="My Picture"/>
                        <h5 className="font-display">sarthakkhanduja.</h5>
                    </div>
                </div>
                <div className="w-1/2 flex-row flex justify-end items-center font-2xl">
                    <div className="px-4 h-3/5 font-display rounded-3xl hover:bg-gray-800 hover:text-white transition duration-200 ease-in-out cursor-pointer flex items-center mx-3">
                        About
                    </div>
                    <div className="px-4 h-3/5 font-display rounded-3xl hover:bg-gray-800 hover:text-white transition duration-200 ease-in-out cursor-pointer flex items-center mx-3">
                        Works
                    </div>
                    <div className="px-4 h-3/5 font-display rounded-3xl hover:bg-gray-800 hover:text-white transition duration-200 ease-in-out cursor-pointer flex items-center mx-3">
                        Contact
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-grow flex flex-row w-full">
                <div className="flex flex-col pl-16 pb-16 w-3/5">
                    <div className="flex flex-col pb-8 -mt-12">
                        <p className="text-[10rem] font-display font-custom">I'm Sarthak</p>
                        <p className="text-[10rem] font-display font-custom -mt-24">Khanduja.</p>
                    </div>
                    <div className="w-[30%] flex flex-row justify-start items-center border-2 border-[#4FC153] rounded-3xl transition-colors duration-300 ease-in-out hover:bg-green-50">
                        <Lottie animationData={blinkingAnimation} loop={true} autoplay={true} className="h-8 w-8 ml-4" />
                        <p className="text-xl font-grotesk font-custom ml-1">available for opportunities</p>
                    </div>

                </div>
                <div className="bg-pink-100 w-2/5 flex items-center justify-center">
                    Side hero
                </div>
            </div>

            {/* Footer Marquee */}
            <div className="h-20 w-full bg-[#DFFF9C] flex justify-center items-center">
                <Marquee className="flex flex-row font-display justify-between text-xl font-bold" autoFill={true}>
                    <p className="px-8">Based in Windsor, ON</p>
                    <img src={bulletImg} className="h-5 w-5 rounded-full object-cover mx-2" alt="Bullet"/>
                    <p className="px-8">3+ years of experience</p>
                    <img src={bulletImg} className="h-5 w-5 rounded-full object-cover mx-2" alt="Bullet"/>
                    <p className="px-8">Brewing Digital Solutions</p>
                    <img src={bulletImg} className="h-5 w-5 rounded-full object-cover mx-2" alt="Bullet"/>
                </Marquee>
            </div>
        </div>
    );
}

export default Home;
