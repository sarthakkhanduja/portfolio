import upArrow from "../assets/upArrow.svg";

function Contact() {
    return(
        <div className="h-screen w-full bg-black">
            <div className={`h-48 text-white w-full px-16 font-display font-semibold text-[8rem] -pt-32`}>
                <p>Nice to meet you,</p>
                <p className="-mt-16">Let's connect.</p>
            </div>

            <div className="w-full px-16 mt-48">
                <button className="px-8 py-4 w-64 rounded-[3rem] border-[1px] border-white text-3xl text-white font-display font-custom hover:bg-white hover:text-black ease-in-out duration-100">
                    Book a call
                </button>
            </div>

            <div className="w-full px-16 mt-24 flex flex-col justify-end">
                <p className="text-[#6B6D75] text-4xl font-display font-seminold tracking-wide">Find me elsewhere on web,</p>
                <div className="flex flex-row my-6">
                    <div className="font-display font-custom text-white text-4xl mr-16">
                        <p className="py-2 border-b-[1px] border-gray-600 cursor-pointer relative overflow-hidden group"
                        onClick={() => {
                            window.open("https://www.linkedin.com/in/sarthakkhanduja");
                        }}>
                            LinkedIn
                            <span className="absolute left-0 bottom-0 w-full h-[1px] bg-gray-200 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
                        </p>
                    </div>
                    <div className="font-display font-custom text-white text-4xl mr-16">
                        <p className="py-2 border-b-[1px] border-gray-600 cursor-pointer relative overflow-hidden group"
                        onClick={() => {
                            window.open("https://www.github.com/sarthakkhanduja/");
                        }}>
                            GitHub
                            <span className="absolute left-0 bottom-0 w-full h-[1px] bg-gray-200 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
                        </p>
                    </div>
                    <div className="font-display font-custom text-white text-4xl mr-16">
                        <p className="py-2 border-b-[1px] border-gray-600 cursor-pointer relative overflow-hidden group"
                        onClick={() => {
                            window.open("https://drive.google.com/file/d/15RwiWM8LRF64dBgOckrjXuw7Q9h7X_Bq/view?usp=sharing");
                        }}>
                            Resume
                            <span className="absolute left-0 bottom-0 w-full h-[1px] bg-gray-200 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
                        </p>
                    </div>
                    <div className="font-display font-custom text-white text-4xl mr-16">
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

            <div className="h-48 font-display font-custom text-4xl text-white px-16 flex justify-between items-end">
                <div>
                    Made by<span className="mx-2">Sarthak Khanduja</span>
                </div>
                <div className="rounded-full size-24 border-[1px] border-white p-6 hover:bg-[#5d5af7] hover:cursor-pointer">
                    <img src={upArrow}></img>
                </div>
            </div>
        </div>
    )
}

export default Contact; 