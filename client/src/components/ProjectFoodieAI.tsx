import blinkingAnimation from "../assets/blinkingAnimation.json";
import Lottie from "lottie-react";
import screenshot from "../assets/foodieai.png";

function ProjectFoodieAI() {
    return (
        <div className="md:flex flex-col">
            <div className="min-h-screen w-full bg-[#aa32c2] ">
                <div className="px-5 md:px-14">

                <div className={`h-24 w-full pb-8 pt-32 font-display font-custom text-2xl text-gray-200`}>
                    <p>3 / 3</p>
                </div>

                {/* Hero Section */}
                <div className=" py-8 h-3/5 w-full flex flex-row justify-between">

                    {/* Left Hero Section */}
                    <div className="font-display flex flex-col gap-10 md:gap-12 justify-around  pb-32">
                        {/* Title */}
                        <div className="flex flex-col text-white font-custom">
                            <p className="text-5xl md:texttext-7xl">FoodieAI</p>
                            <p className="mt-2 text-l md:text-2xl tracking-wide bg-gradient-to-r from-gray-100 to-gray-300 text-transparent bg-clip-text">MAKE RECIPES WITH LEFTOVER INGREDIENTS, POWERED BY AI.</p>
                        </div>

                        <div className="max-w-min px-3 pr-6 flex flex-row justify-start font-custom items-center border-2 border-[#4FC153] hover:cursor-pointer rounded-3xl transition-colors duration-800 ease-in-out animate-background"
                            onClick={() => {
                                window.open("https://foodieai.streamlit.app/")
                            }
                            }>
                            <Lottie animationData={blinkingAnimation} loop={true} autoplay={true} className="h-8 w-8" />
                            <p className="text-l font-grotesk font-custom ">LIVE</p>
                        </div>


                        {/* Details about the Project */}
                        <div className="flex flex-col gap-6  lg:gap-24 sm:flex-row font-display items-start">
                            {/* Project */}
                            <div className="flex flex-col justify-between">
                                <p className="text-l md:text-xl font-semibold text-gray-800">Project</p>
                                <p className="mt-2 text-l md:text-xl font-custom text-white">FoodieAI</p>
                            </div>

                            {/* Role */}
                            <div className="flex flex-col justify-between ">
                                <p className="text-l md:text-xl font-semibold text-gray-800">Role</p>
                                <p className="mt-2 text-l md:text-xl font-custom text-white">Developer</p>
                            </div>

                            {/* Date */}
                            <div className="flex flex-col justify-between ">
                                <p className="text-l md:text-xl font-semibold text-gray-800">Date</p>
                                <p className="mt-2 text-l md:text-xl font-custom text-white">June 2024</p>
                            </div>
                        </div>
                    </div>
                    {/* Tags */}
                    <div className="hidden md:flex flex-col  w-2/5 font-display justify-start font-bold items-end">
                        <div className="hidden md:block lg:hidden text-l w-fit self-end tracking-wide py-3 px-5 my-2 font-display rounded-[30px] border-[1px] text-white border-gray-100 hover:cursor-text ease-in-out duration-200">
                            RAG
                        </div>
                        <div className="hidden lg:block text-l w-fit self-end tracking-wide py-3 px-5 my-2 font-display rounded-[30px] border-[1px] text-white border-gray-100 hover:cursor-text ease-in-out duration-200">
                            RAG - RETRIEVAL AUGMENTED GENERATION
                        </div>
                        <div className="text-l w-fit self-end tracking-wide py-3 px-5 my-2 font-display rounded-[30px] border-[1px] text-white border-gray-100 hover:cursor-text ease-in-out duration-200">
                            GENERATIVE AI
                        </div>
                        <div className="text-l w-fit self-end tracking-wide py-3 px-5 my-2 font-display rounded-[30px] border-[1px] text-white border-gray-100 hover:cursor-text ease-in-out duration-200">
                            PYTHON
                        </div>
                        <div className="text-l w-fit self-end tracking-wide py-3 px-5 my-2 font-display rounded-[30px] border-[1px] text-white border-gray-100 hover:cursor-text ease-in-out duration-200">
                            PROMPT ENGINEERING
                        </div>
                    </div>

                </div>
                </div>

                <div className="bg-[#aa32c2] w-full flex justify-center items-center flex-col">
                    <div className="w-full rounded-xl shrink-0 -mt-[8rem] px-4 md:p-20">
                        <img className="rounded-3xl" src={screenshot} alt="Screenshot" />
                    </div>

                    <div className="md:-mt-24 sm:p-16 font-display font-custom">
                        <p className="hidden lg:block text-3xl md:text-5xl bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 text-transparent bg-clip-text">
                            Leftover Recipes on your fingertips.
                        </p>
                    </div>
                </div>
            </div>


        </div>

    )
}

export default ProjectFoodieAI;