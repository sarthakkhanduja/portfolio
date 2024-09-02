import myPicture from "../assets/me.jpg";
import gradCap from "../assets/graduationCap.svg";

type AboutProps = {
    onClose: () => void;
};

function About({ onClose }: AboutProps) {

    return (
        <div className="fixed top-0 right-0 w-3/5 h-screen overflow-y-auto bg-white shadow-lg px-2 z-50">
            <div className="h-48 flex flex-row justify-between items-center">
                <div>
                    <img src={myPicture} className="size-24 rounded-full object-cover mx-8" alt="My Picture" />
                </div>
                <div>
                    <button 
                        onClick={onClose}
                        className="mx-4 p-4 w-36 rounded-[2rem] border-[1px] border-black text-2xl font-display font-custom hover:bg-black hover:text-white ease-in duration-100"
                    >
                        Close
                    </button>
                </div>
            </div>
            {/* More content here */}
            <div className="h-16 flex flex-row justify-start items-center mx-8">
                <div className="p-2 font-display rounded-3xl border-[1px] border-black mr-4">
                    SOFTWARE ENGINEER
                </div>
                <div className="p-2 font-display rounded-3xl border-[1px] border-black mr-4">
                    BACKEND DEVELOPER
                </div>
            </div>

            {/* Initial head text */}
            <div className="h-auto mx-8 mt-12 font-display text-5xl font-custom flex flex-row items-center">
                <p>A recent</p>
                <span className="pl-2 pr-6 mx-2 font-display rounded-3xl border-[1px] border-black inline-flex items-center justify-center w-auto bg-[#DFFF9C] hover:cursor-default ease-in-out duration-200">
                    <img src={gradCap} className="size-12 mr-2" alt="Graduation cap" />
                    Master's graduate
                </span>
                <p>with</p>
                </div>
                <div className="h-auto mx-8 font-display text-5xl font-custom">
                <p>experience in large-scale FMCG corporates and fast-paced startups.</p>
            </div>


            {/* Additional content sections */}

            {/* Second text */}
            <div className="h-auto mx-8 mt-20 font-display text-5xl font-custom flex flex-row items-center">
                <p>I'm always eager to dive into new domains and technologies, investing the time and effort needed to master them.</p>
            </div>

            {/* USP */}
            <div className="h-auto mx-8 mt-24 font-display flex flex-col">
                <p className="text-5xl font-custom">Unique Selling Point</p>
                <p className="text-4xl mt-6 text-gray-500 font-semibold">
                    I sincerely believe
                    <span className="px-2 mx-2 font-display rounded-3xl border-[1px] text-black border-black inline-flex items-center justify-center w-auto bg-[#DFFF9C] hover:cursor-default ease-in-out duration-200">
                    Adaptability
                    </span>
                    is a skill that can be honed to perfection. Be it for hard skills, or work cultures - I'm flexible enough to adapt.
                </p>
            </div>


            {/* Brewing Digital Solutions */}
            <div className="h-auto mx-8 mt-20 font-display flex flex-col">
                <p className="text-5xl font-custom">Brewing Digital Solutions</p>
                <p className="text-4xl mt-6 text-gray-500 font-semibold">Whether I'm developing software for a global audience or crafting tailored applications for a niche market, my focus remains on 
                <span className="px-2 mx-2 font-display rounded-3xl border-[1px] text-black border-black inline-flex items-center justify-center w-auto bg-[#DFFF9C] hover:cursor-default ease-in-out duration-200">
                    delivering impactful results
                </span>
                that make a difference.</p>
            </div>

            {/* Availability */}
            <div className="h-auto mx-8 mt-20 font-display flex flex-col">
                <p className="text-5xl font-custom">Available for Opportunities</p>
                <p className="text-4xl mt-6 text-gray-500 font-semibold">
                    I'm currently on the lookout for
                    <span className="px-2 mx-2 font-display rounded-3xl border-[1px] text-black border-black inline-flex items-center justify-center w-auto bg-[#DFFF9C] hover:cursor-default ease-in-out duration-200">
                    Software Engineer
                    </span>
                    or
                    <span className="px-2 mx-2 font-display rounded-3xl border-[1px] text-black border-black inline-flex items-center justify-center w-auto bg-[#DFFF9C] hover:cursor-default ease-in-out duration-200">
                    Backend Developer
                    </span>
                    roles. <br />
                    I'm also available as a freelancer, so if you have a project up for grabs, I'm ready to roll up my sleeves and get to work.
                </p>
            </div>


            {/* Let's Connect */}
            <div className="h-auto mx-8 mt-8 font-display flex flex-col">
                <p className="text-4xl mt-6 text-gray-500 font-semibold">Let's connect!</p>
            </div>

            <div className="h-auto my-14 flex flex-row items-center justify-start text-4xl font-display font-custom">
            <div className="mx-8">
                    <p className="py-2 border-b-[1px] border-gray-400 cursor-pointer relative overflow-hidden group"
                       onClick={() => {
                        window.open("https://linkedin.com/in/sarthakkhanduja");
                    }}>
                        LinkedIn
                        <span className="absolute left-0 bottom-0 w-full h-[1px] bg-gray-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
                    </p>
                </div>
                <div className="mx-8">
                    <p
                        className="py-2 border-b-[1px] border-gray-400 cursor-pointer relative overflow-hidden group"
                        onClick={() => {
                            window.open("https://github.com/sarthakkhanduja");
                        }}>
                        GitHub
                        <span className="absolute left-0 bottom-0 w-full h-[1px] bg-gray-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
                    </p>
                </div>

                <div className="mx-8">
                    <p className="py-2 border-b-[1px] border-gray-400 cursor-pointer relative overflow-hidden group"
                    onClick={() => {
                        window.open("https://drive.google.com/file/d/15RwiWM8LRF64dBgOckrjXuw7Q9h7X_Bq/view?usp=sharing");
                    }}>
                        Resume
                        <span className="absolute left-0 bottom-0 w-full h-[1px] bg-gray-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
                    </p>
                </div>
                <div className="mx-8">
                    <p className="py-2 border-b-[1px] border-gray-400 cursor-pointer relative overflow-hidden group"
                    onClick={() => {
                        window.open("mailto:sarthakkhanduja98@gmail.com");
                    }}>
                        Email
                        <span className="absolute left-0 bottom-0 w-full h-[1px] bg-gray-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;
