import myPicture from "../assets/me.jpg";

type AboutProps = {
    onClose: () => void;
};

function About({ onClose }: AboutProps) {

    return (
        <div className="fixed top-0 right-0 w-full lg:w-3/5 h-screen bg-white shadow-lg px-2 z-100 overflow-y-auto">

            {/* Picture and Close Button */}
            <div className="h-24 sm:h-48 flex flex-row justify-between items-center pt-8 sm:pt-0">
                <div>
                    <img src={myPicture} className="size-12 sm:size-24 rounded-full object-cover mx-4 sm:mx-8" alt="My Picture" />
                </div>
                <div>
                    <button
                        onClick={onClose}
                        className="mx-4 p-3 sm:p-4 w-24 sm:w-36 rounded-[2rem] border-[1px] border-black text-lg sm:text-2xl font-display font-semibold hover:bg-black hover:text-white ease-in duration-100"
                    >
                        Close
                    </button>
                </div>
            </div>
            
            {/* Tags */}
            <div className="h-16 flex flex-row justify-between sm:justify-start items-start sm:items-center sm:mx-8 text-sm sm:text-xl text-nowrap p-4 sm:p-0">
                <div className="p-2 sm:px-3 font-display text-xs sm:text-lg rounded-3xl border-[1px] border-black mr-1 sm:mr-4">
                    SOFTWARE ENGINEER
                </div>
                <div className="p-2 sm:px-3 font-display text-xs sm:text-lg rounded-3xl border-[1px] border-black ml-1 sm:ml-0 sm:mr-4">
                    BACKEND DEVELOPER
                </div>
            </div>

            {/* Initial head text */}
            <div className="h-auto mx-4 sm:mx-8 mt-8 sm:mt-12 font-display text-2xl md:text-4xl font-semibold flex flex-row items-center">
                <p className="">An experienced software engineer having worked at large-scale FMCG corporates and fast-paced startups.</p>
            </div>


            {/* Additional content sections */}

            {/* Second text */}
            <div className="h-auto mx-4 sm:mx-8 mt-10 font-display text-2xl md:text-4xl font-semibold flex flex-row items-center">
                <p>I'm always eager to dive into new domains and technologies, investing the time and effort needed to master them.</p>
            </div>

            {/* USP */}
            <div className="h-auto mx-4 sm:mx-8 mt-14 font-display flex flex-col">
                <p className="text-2xl  md:text-4xl font-semibold">Unique Selling Point</p>
                <p className="text-xl md:text-4xl mt-6 text-gray-500 font-semibold">
                    I sincerely believe Adaptability is a skill that can be honed to perfection. Be it for hard skills, or work cultures - I'm flexible enough to adapt.                    
                </p>
            </div>


            {/* Brewing Digital Solutions */}
            <div className="h-auto mx-4 sm:mx-8 mt-16 font-display flex flex-col">
                <p className="text-2xl  md:text-4xl font-semibold">Brewing Digital Solutions</p>
                <p className="text-xl md:text-4xl mt-6 text-gray-500 font-semibold">
                    Whether I'm developing software for a global audience or crafting tailored applications for a niche market, my focus remains on delivering impactful results that make a difference.
                </p>
            </div>

            {/* Availability */}
            <div className="h-auto mx-4 sm:mx-8 mt-16 font-display flex flex-col">
                <p className="text-2xl  md:text-4xl font-semibold">Available for Opportunities</p>
                <p className="text-xl md:text-4xl mt-6 text-gray-500 font-semibold">
                    I'm currently on the lookout for Software Engineer or Backend Developer roles. <br />
                    I'm also available as a freelancer, so if you have a project up for grabs, I'm ready to roll up my sleeves and get to work.                    
                </p>
            </div>


            {/* Let's Connect */}
            <div className="h-auto mx-4 sm:mx-8 mt-2 sm:mt-8 font-display flex flex-col">
                <p className="text-2xl md:text-4xl mt-6 font-semibold">Let's connect!</p>
            </div>

            <div className="h-auto mt-3 mb-20 md:my-14 flex flex-row gap-[0.1rem] sm:gap-4 items-start justify-start text-2xl md:text-4xl font-display font-semibold">
                <div className="mx-4 sm:mx-8 text-lg sm:text-4xl">
                    <p className="py-2 border-b-[1px] border-gray-400 cursor-pointer relative overflow-hidden group"
                        onClick={() => {
                            window.open("https://linkedin.com/in/sarthakkhanduja");
                        }}>
                        LinkedIn
                        <span className="absolute left-0 bottom-0 w-full h-[1px] bg-gray-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
                    </p>
                </div>
                <div className="mx-4 sm:mx-8 text-lg sm:text-4xl">
                    <p
                        className="py-2 border-b-[1px] border-gray-400 cursor-pointer relative overflow-hidden group"
                        onClick={() => {
                            window.open("https://github.com/sarthakkhanduja");
                        }}>
                        GitHub
                        <span className="absolute left-0 bottom-0 w-full h-[1px] bg-gray-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
                    </p>
                </div>

                <div className="mx-4 sm:mx-8 text-lg sm:text-4xl">
                    <p className="py-2 border-b-[1px] border-gray-400 cursor-pointer relative overflow-hidden group"
                        onClick={() => {
                            window.open("https://drive.google.com/file/d/1hgu1fB564qWMtqFQLRVILN6QANc5G5UO/view?usp=sharing");
                        }}>
                        Resume
                        <span className="absolute left-0 bottom-0 w-full h-[1px] bg-gray-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
                    </p>
                </div>
                <div className="mx-4 sm:mx-8 text-lg sm:text-4xl">
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
