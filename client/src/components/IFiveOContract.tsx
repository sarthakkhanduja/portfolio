import locationPin from "../assets/location.svg";

interface IFiveOContractProps {
    closeModal: () => void;
  }

function IFiveOContract({ closeModal }: IFiveOContractProps) {
    return (
        <div className="flex items-start justify-center h-screen p-4 mt-28 md:mt-0">
            <div className="w-full md:w-3/4 m-auto border-black border-[1px] rounded-3xl shadow-2xl bg-white z-100 h-[90%] overflow-y-auto ">
                <div className="flex flex-col">
                    <div className="flex flex-row w-full">
                        {/* Title, Company */}
                        <div className="flex flex-col justify-start font-display p-8 w-3/5">
                            <p className="text-3xl lg:text-6xl font-custom">Software Engineer, Contract</p>
                            <div className="w-fit self-start px-4 py-1 mt-4 font-display rounded-3xl border-[1px] border-black bg-[#ffc0bc] hover:cursor-default ease-in-out duration-200 text-xl font-custom tracking-wide">
                                i-5O
                            </div>
                        </div>

                        {/* Dates, Location */}
                        <div className="flex flex-col md:flex-row-reverse justify-start pl-6 text-right w-2/5">
                            <div className="p-4">
                            <button
                                type="button"
                                className="bg-white p-2 inline-flex items-center justify-center rounded-full text-gray-400 hover:text-white hover:bg-black focus:outline-none"
                                onClick={closeModal}
                            >
                                <span className="sr-only">Close menu</span>
                                <svg
                                    className="h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>

                            </div>

                            <div className="flex flex-col justify-center font-display mr-6 text-gray-500">
                                <p className="hidden sm:block text-xs md:text-xl font-custom">September 2022 - December 2022</p>
                                <p className="sm:hidden text-xs md:text-xl font-custom">Sept'22 - Dec'22</p>
                                <div className="flex flex-row items-center justify-end text-right">
                                    <img className="mx-2 size-4 sm:size-5 md:size-6" src={locationPin}></img>
                                    <p className="text-xs md:text-xl mt-2 font-custom sm:tracking-wide">WINDSOR, ON</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-row justify-start items-center mx-8 flex-wrap gap-2">
                        <div className="p-2 font-display text-xs sm:text-base px-4 rounded-3xl border-[1px] border-black mr-4">
                            PYTHON
                        </div>
                        <div className="p-2 font-display text-xs sm:text-base px-4 rounded-3xl border-[1px] border-black mr-4">
                            TENSORFLOW
                        </div>
                        <div className="p-2 font-display text-xs sm:text-base px-4 rounded-3xl border-[1px] border-black mr-4">
                            PYTORCH
                        </div>
                        <div className="p-2 font-display text-xs sm:text-base px-4 rounded-3xl border-[1px] border-black mr-4">
                            cUDA
                        </div>
                        <div className="p-2 font-display text-xs sm:text-base px-4 rounded-3xl border-[1px] border-black mr-4">
                            MACHINE LEARNING
                        </div>
                        <div className="p-2 font-display text-xs sm:text-base px-4 rounded-3xl border-[1px] border-black mr-4">
                            AWS LAMBDA
                        </div>
                        <div className="p-2 font-display text-xs sm:text-base px-4 rounded-3xl border-[1px] border-black mr-4">
                            PYTORCH
                        </div>
                        <div className="p-2 font-display text-xs sm:text-base px-4 rounded-3xl border-[1px] border-black mr-4">
                            AMAZON WEB SERVICES
                        </div>
                        <div className="p-2 font-display text-xs sm:text-base px-4 rounded-3xl border-[1px] border-black mr-4">
                            COMPUTER VISION
                        </div>
                        <div className="p-2 font-display text-xs sm:text-base px-4 rounded-3xl border-[1px] border-black mr-4">
                            OBJECT DETECTION
                        </div>
                        <div className="p-2 font-display text-xs sm:text-base px-4 rounded-3xl border-[1px] border-black mr-4">
                            TEMPORAL ACTION CLASSIFICATION
                        </div>
                        <div className="p-2 font-display text-xs sm:text-base px-4 rounded-3xl border-[1px] border-black mr-4">
                            DEEP LEARNING
                        </div>
                        <div className="p-2 font-display text-xs sm:text-base px-4 rounded-3xl border-[1px] border-black mr-4">
                            ARTIFICIAL INTELLIGENCE
                        </div>
                    </div>

                    {/* Content starts here */}
                    <div className="mt-8 px-8 font-display text-2xl text-gray-500">
                        <p>This was my first professional role after moving to Canada, and although I had no prior experience in Machine Learning, I was determined to succeed. I put in countless extra hours to learn everything I needed, refusing to let my lack of experience hold me back.</p>
                        <p className="mt-4">As an <span className="font-bold underline">AI Consultant</span>, my responsibilities were to assist and enhance the Deep Learning Team's infrastructure.</p>
                    </div>
                    <div className="p-8">
                        <p className="font-display text-2xl font-custom">MLOps Integration</p>
                        <p className="mt-3 font-display text-2xl text-gray-500">Collaborated with a client in East Asia to integrate their warehouse hardware with our MLOps infrastructure using Python and TCP/IP protocols. The hardware was automated to operate based on real-time outputs from our computer vision model, improving operational efficiency by 73%.</p>
                    </div>
                    <div className="p-8">
                        <p className="font-display text-2xl font-custom">Designed a Re-training Application</p>
                        <p className="mt-3 font-display text-2xl text-gray-500">Noticed that small changes in the camera angle feeding video to our models caused significant model drift. To address this, I designed a scalable solution using AWS Lambda to trigger alerts within our MLOps pipeline. This system captured new data from the camera, automatically annotated it using our in-house tools, and retrained the model. After fine-tuning, the team was notified to conduct a unit test before deploying to production, reducing downtime by 45%.</p>
                    </div>
                    <div className="p-8">
                        <p className="font-display text-2xl font-custom">Identified Data Extraction Automation Opportunity</p>
                        <p className="mt-3 font-display text-2xl text-gray-500">Developed a Python script to automatically extract and download video feeds from the client's warehouse cameras, continuously monitoring for annotation. This process was automated to run overnight, ensuring the data was ready for the team to work on the following morning, significantly improving efficiency and workflow continuity.</p>
                    </div>
                    <div className="p-8 flex flex-col justify-end items-end">
                        <p className="font-display text-2xl font-custom italic text-gray-700">"Because of this automation, I can now sleep peacefully at night"</p>
                        <p className="font-display text-2xl font-custom italic text-gray-700">- Colleague, i-5O</p>
                    </div>
                </div>
            </div>
        </div>
    );
  }
  
  export default IFiveOContract;
  