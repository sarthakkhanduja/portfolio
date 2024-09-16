import upArrow from "../assets/upArrow.svg";

interface ContactProps {
    onScrollToHome: () => void;
}

function Contact({ onScrollToHome }: ContactProps) {
    return(
        <div className="min-h-screen w-full bg-black px-5 md:px-10">
            <div className={`h-48 text-white w-full font-display font-semibold text-4xl sm:text-6xl lg:text-[6rem] pt-28 lg:pt-20`}>
                <p>Nice to meet you,</p>
                <p className="">Let's connect.</p>
            </div>

            <div className="w-full mt-12 md:mt-20 lg:mt-[10rem]">
                <button className="px-8 py-2 sm:py-4 w-22 rounded-[3rem] border-[1px] border-white text-xl text-white font-display font-custom hover:bg-white hover:text-black ease-in-out duration-100"
                        onClick={() => {
                            window.open("https://calendly.com/sarthakkhanduja")
                        }}>
                    Book a call
                </button>
            </div>

            <div className="w-full mt-12 mb-10 flex flex-col justify-end">
                <p className="text-[#6B6D75] text-2xl font-display font-seminold tracking-wide">Find me elsewhere on web,</p>
                <div className="flex flex-col sm:flex-row gap-2 flex-wrap  text-xl md:text-3xl my-6">
                    <div className="font-display font-custom text-white  mr-16 ">
                        <p className="py-2 border-b-[1px] border-gray-600 cursor-pointer relative overflow-hidden group"
                        onClick={() => {
                            window.open("https://www.linkedin.com/in/sarthakkhanduja");
                        }}>
                            LinkedIn
                            <span className="absolute left-0 bottom-0 w-full h-[1px] bg-gray-200 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
                        </p>
                    </div>
                    <div className="font-display font-custom text-white  mr-16">
                        <p className="py-2 border-b-[1px] border-gray-600 cursor-pointer relative overflow-hidden group"
                        onClick={() => {
                            window.open("https://www.github.com/sarthakkhanduja/");
                        }}>
                            GitHub
                            <span className="absolute left-0 bottom-0 w-full h-[1px] bg-gray-200 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
                        </p>
                    </div>
                    <div className="font-display font-custom text-white  mr-16">
                        <p className="py-2 border-b-[1px] border-gray-600 cursor-pointer relative overflow-hidden group"
                        onClick={() => {
                            window.open("https://drive.google.com/file/d/1_F-mDUtRqMc3u8OnhIMRu9NeUGouybsw/view?usp=sharing");
                        }}>
                            Resume
                            <span className="absolute left-0 bottom-0 w-full h-[1px] bg-gray-200 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
                        </p>
                    </div>
                    <div className="font-display font-custom text-white  mr-16">
                        <p className="py-2 border-b-[1px] border-gray-600 cursor-pointer relative overflow-hidden group"
                        onClick={() => {
                            window.open("mailto:sarthakkhanduja98@gmail.com");
                        }}>
                            sarthakkhanduja98@gmail.com
                            <span className="absolute left-0 bottom-0 w-full h-[1px] bg-gray-200 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
                        </p>
                    </div>
                </div>
            </div>

            <div className=" font-display font-custom text-xl text-white pb-5 flex justify-between items-center ">
                <div>
                    Made by<span className="mx-2">Sarthak Khanduja</span>
                </div>
                <div className="rounded-full p-4 size-12 md:size-16 bg-white hover:bg-[#DFFF9C] hover:cursor-pointer group"
                    onClick={onScrollToHome}>
                    <div className="overflow-hidden">
                        <img
                            src={upArrow}
                            className="transition-transform duration-300 transform group-hover:-translate-y-2"
                            alt="Up Arrow"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact; 