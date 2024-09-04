import blinkingAnimation from "../assets/blinkingAnimation.json";
import Lottie from "lottie-react";
import screenshot from "../assets/gettowork.png";


function ProjectGetToWork() {
    return(
        <div className="md:flex flex-col">
            <div className="min-h-screen w-full bg-[#3C0AA5] ">
            <div className="px-10">

                <div className={`h-24 w-full  pb-8 pt-32 font-display font-custom text-2xl text-gray-200`}>
                    <p>2 / 3</p>
                </div>

                {/* Hero Section */}
                <div className=" py-8 h-3/5 w-full flex flex-row justify-between">

                    {/* Left Hero Section */}
                    <div className="font-display flex flex-col gap-6 justify-around  pb-32">
                        {/* Title */}
                        <div className="flex flex-col text-white font-custom">
                            <p className="text-6xl sm:text-7xl">GetToWork</p>
                            <p className="mt-2 text-2xl tracking-wide bg-gradient-to-r from-red-500 to-yellow-200 text-transparent bg-clip-text">ALL YOUR TASKS, UNDER ONE ROOF.</p>
                        </div>

                        <div className="w-20 flex flex-row justify-start font-custom items-center border-2 border-[#4FC153] hover:cursor-pointer rounded-3xl transition-colors duration-800 ease-in-out animate-background"
                            onClick={() => {
                                window.open("https://gettowork.vercel.app/")}
                            }>
                            <Lottie animationData={blinkingAnimation} loop={true} autoplay={true} className="h-8 w-8 ml-4" />
                            <p className="text-xl font-grotesk font-custom px-3">LIVE</p>
                        </div>


                        {/* Details about the Project */}
                        <div className="flex flex-col gap-8  lg:gap-8 sm:flex-row font-display items-start">
                            {/* Project */}
                            <div className="flex flex-col justify-between">
                                <p className="text-2xl font-medium text-gray-400">Project</p>
                                <p className="mt-4 text-2xl font-custom text-white">GetToWork</p>
                            </div>

                            {/* Role */}
                            <div className="flex flex-col justify-between ">
                                <p className="text-2xl font-medium text-gray-400">Role</p>
                                <p className="mt-4 text-2xl font-custom text-white">Developer</p>
                            </div>

                            {/* Date */}
                            <div className="flex flex-col justify-between ">
                                <p className="text-2xl font-medium text-gray-400">Date</p>
                                <p className="mt-4 text-2xl font-custom text-white">April 2024</p>
                            </div>
                        </div>
                    </div>
                    {/* Tags */}
                    <div className="hidden md:flex flex-col w-2/5 font-display justify-start font-bold items-end">
                        <div className="text-xl w-fit self-end tracking-wide py-3 px-5 my-2 font-display rounded-[30px] border-[1px] text-white border-gray-500 hover:cursor-text ease-in-out duration-200">
                            JAVASCRIPT
                        </div>
                        <div className="text-xl w-fit self-end tracking-wide py-3 px-5 my-2 font-display rounded-[30px] border-[1px] text-white border-gray-500 hover:cursor-text ease-in-out duration-200">
                            REACT
                        </div>
                        <div className="text-xl w-fit self-end tracking-wide py-3 px-5 my-2 font-display rounded-[30px] border-[1px] text-white border-gray-500 hover:cursor-text ease-in-out duration-200">
                            NODE.JS
                        </div>
                        <div className="text-xl w-fit self-end tracking-wide py-3 px-5 my-2 font-display rounded-[30px] border-[1px] text-white border-gray-500 hover:cursor-text ease-in-out duration-200">
                            MONGODB
                        </div>
                    </div>
                </div>
            </div>

            <div className=" bg-white w-full flex justify-center items-center flex-col">
                <div
                    className="w-full rounded-xl  -mt-[10rem] md:-mt-[6rem]   p-20 bg-gradient-to-b from-[#3C0AA5] via-[#3C0AA5] to-white">
                    <img src={screenshot} alt="Screenshot" />
                </div>
                <div className="mt-8 p-16 font-display font-custom">
                    <p className="text-3xl text-gray-500">
                        Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum 
                        Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                    </p>
                </div>
            </div>
            </div>

        </div>
        
    )
}

export default ProjectGetToWork;