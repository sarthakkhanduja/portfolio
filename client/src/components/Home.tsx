import Lottie from "lottie-react";
import blinkingAnimation from "../assets/blinkingAnimation.json";
import myPicture from "../assets/me.jpg";
import Marquee from "react-fast-marquee";
import bulletImg from "../assets/bullet.png";

function Home() {
    return (
        <div className="w-full h-full">
            <div className="w-full h-24 py-8 px-16 flex flex-row bg-green-500">
                <div className="w-1/2 flex justify-start">
                    <div className="flex flex-row justify-center items-center">
                        <img src={myPicture} className="size-8 rounded-full object-cover mx-2"></img>
                        <h5 className="font-display">sarthakkhanduja.</h5>
                    </div>
                </div>
                <div className="bg-blue-100 w-1/2 flex-row flex justify-end">
                    <div className="px-2 font-display ">
                        About
                    </div>
                    <div className="px-2 font-display ">
                        Works
                    </div>
                    <div className="px-2 font-display ">
                        Contact
                    </div>
                </div>
            </div>
            <div className="flex flex-row w-full h-4/5">
                <div className="bg-pink-50 flex flex-col px-16 py-16 w-1/2">
                    <div className="flex flex-col pb-8">
                        <p className="text-9xl font-display font-custom">I'm Sarthak</p>
                        <p className="text-9xl font-display font-custom">Khanduja.</p>
                    </div>
                    <div className="flex flex-row">
                        <Lottie animationData={blinkingAnimation} loop={true} autoplay={true} className="size-8" />
                        <p className="text-xl font-grotesk font-custom">available for opportunities</p>
                    </div>
                </div>
                <div className="w-1/2">
                    Side hero
                </div>
            </div>
            <div className="w-full bg-[#DFFF9C] h-20 flex justify-center items-center">
                <Marquee className="flex flex-row font-display justify-between text-xl font-semibold">
                    <p className="px-8">Based in Windsor, ON</p>
                    <img src={bulletImg} className="size-5 rounded-full object-cover mx-2"></img>
                    <p className="px-8">Solving problems, one line of code at a time</p>
                    <img src={bulletImg} className="size-5 rounded-full object-cover mx-2"></img>
                    <p className="px-8">3+ years of experience</p>
                    <img src={bulletImg} className="size-5 rounded-full object-cover mx-2"></img>
                    <p className="px-8">Pushing pixels remotely</p>
                    <img src={bulletImg} className="size-5 rounded-full object-cover mx-2"></img>
                </Marquee>
            </div>
        </div>
    );
}

export default Home;
