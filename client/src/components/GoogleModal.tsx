import locationPin from "../assets/location.svg";

interface GoogleModalProps {
    closeModal: () => void;
  }

function GoogleModal({ closeModal }: GoogleModalProps) {
    return (
        <div className="flex items-start justify-center h-screen p-4 mt-28 md:mt-0">
            <div className="w-full md:w-3/4 m-auto border-black border-[1px] rounded-3xl shadow-2xl bg-white z-100 h-[90%] overflow-y-auto">
                <div className="flex flex-col">
                    <div className="flex flex-row w-full">
                        {/* Title, Company */}
                        <div className="flex flex-col justify-start font-display p-8 w-3/5">
                            <p className="text-3xl lg:text-6xl font-custom">Software Developer III</p>
                            <div className="w-fit self-start px-4 py-1 mt-4 font-display rounded-3xl border-[1px] border-black bg-[#ffc0bc] hover:cursor-default ease-in-out duration-200 text-xl font-custom tracking-wide">
                                Google
                            </div>
                        </div>

                        {/* Dates, Location */}
                        <div className="flex flex-col md:flex-row-reverse justify-start pl-6  text-right w-2/5">
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
                                <p className="hidden sm:block text-xs md:text-xl font-custom">November 2024 - Present</p>
                                <p className="sm:hidden text-xs md:text-xl font-custom">Nov'24 - Present</p>
                                <div className="flex flex-row items-center justify-end text-right">
                                    <img className="mx-2 size-4 sm:size-5 md:size-6" src={locationPin}></img>
                                    <p className="text-xs md:text-xl mt-2 font-custom sm:tracking-wide">WATERLOO, ON</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-row justify-start items-center mx-8 flex-wrap gap-2">
                        <div className="p-2 font-display text-xs sm:text-base px-4 rounded-3xl border-[1px] border-black">
                            AGENTIC AI
                        </div>
                        <div className="p-2 font-display text-xs sm:text-base px-4 rounded-3xl border-[1px] border-black">
                            DISTRIBUTED SYSTEMS
                        </div>
                        <div className="p-2 font-display text-xs sm:text-base px-4 rounded-3xl border-[1px] border-black">
                            C++
                        </div>
                        <div className="p-2 font-display text-xs sm:text-base px-4 rounded-3xl border-[1px] border-black">
                            STATISTICS
                        </div>
                    </div>

                    {/* Content starts here */}
                    <div className="mt-8 px-8 font-display text-2xl text-gray-500">
                        <p>I'm a Software Developer III at Google in Waterloo, working in Ads Safety on the metrics team.</p>
                    </div>
                    <div className="p-8">
                        <p className="font-display text-2xl font-custom">Metrics Systems for Ads Safety</p>
                        <p className="mt-3 font-display text-2xl text-gray-500">I work on the systems that let us track metrics within Ads Safety, building the infrastructure that makes accurate measurement possible across our safety systems.</p>
                    </div>
                    <div className="p-8">
                        <p className="font-display text-2xl font-custom">Proactively Disarming Fraudsters</p>
                        <p className="mt-3 font-display text-2xl text-gray-500">By getting accurate metrics, we can be proactive in disarming fraudsters before any harmful impressions are served — stopping malicious activity early, rather than reacting after the fact.</p>
                    </div>
                </div>
            </div>
        </div>
    );
  }
  
  export default GoogleModal;
