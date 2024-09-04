import locationPin from "../assets/location.svg";

interface IFiveOCoopProps {
    closeModal: () => void;
  }

function IFiveOCoop({ closeModal }: IFiveOCoopProps) {
    return (
        <div className="flex items-start justify-center h-screen p-4">
            <div className="w-full md:w-3/4 mt-20 border-black border-[1px] rounded-3xl shadow-2xl  bg-white z-100 h-[90%] overflow-y-auto">
                <div className="flex flex-col">
                    <div className="flex flex-row w-full">
                        {/* Title, Company */}
                        <div className="flex flex-col justify-start font-display p-8 w-3/5">
                            <p className="text-2xl lg:text-3xl font-custom">Software Engineer, Co-op</p>
                            <div className="w-fit self-start px-4 py-1 mt-1 font-display rounded-3xl border-[1px] border-black bg-[#ffc0bc] hover:cursor-default ease-in-out duration-200 text-xl font-custom tracking-wide">
                                i-5O
                            </div>
                        </div>

                        {/* Dates, Location */}
                        <div className="flex flex-col justify-start ml-auto text-right w-2/5">
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

                            <div className="flex flex-col justify-center font-display px-8 text-gray-500">
                                <p className="text-xs md:text-xl font-custom">January 2023 - April 2023</p>
                                <div className="flex flex-row items-center justify-end text-right">
                                    <img className="mx-2 size-6" src={locationPin}></img>
                                    <p className="text-xs md:text-xl mt-2 font-custom tracking-wide">WINDSOR, ON</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex-wrap gap-3 flex flex-row justify-start items-center mx-8">
                        <div className="p-2 font-display text-xs lg:text-lg rounded-3xl border-[1px] border-black mr-4">
                            PYTHON
                        </div>
                        <div className="p-2 font-display text-xs lg:text-lg rounded-3xl border-[1px] border-black mr-4">
                            JAVASCRIPT
                        </div>
                        <div className="p-2 font-display text-xs lg:text-lg rounded-3xl border-[1px] border-black mr-4">
                            JAVA
                        </div>
                        <div className="p-2 font-display text-xs lg:text-lg rounded-3xl border-[1px] border-black mr-4">
                            C#
                        </div>
                        <div className="p-2 font-display text-xs lg:text-lg rounded-3xl border-[1px] border-black mr-4">
                            REACT
                        </div>
                        <div className="p-2 font-display text-xs lg:text-lg rounded-3xl border-[1px] border-black mr-4">
                            NODE.JS
                        </div>
                        <div className="p-2 font-display text-xs lg:text-lg rounded-3xl border-[1px] border-black mr-4">
                            AMAZON WEB SERVICES
                        </div>
                        <div className="p-2 font-display text-xs lg:text-lg rounded-3xl border-[1px] border-black mr-4">
                            AZURE SQL DATABASE
                        </div>
                    </div>

                    {/* Content starts here */}
                    <div className="p-8 font-display text-xl text-gray-500">
                        <p>On the basis of my performance during the first stint of my internship at AB InBev, <span className="font-bold underline">I was offered a full-time position of Senior Analyst</span>.</p>
                        <p className="mt-2">From developing Automation bots, to now architecting the solution of all the projects at hand, my responsibilities had also grown to those of an <span className="w-fit text-black self-start px-4 py-1 mt-1 font-display rounded-3xl border-[1px] border-black bg-[#DFFF9C] hover:cursor-default ease-in-out duration-200 text-xl font-custom tracking-wide">
                        Associate Solution Architect</span>.</p>
                    </div>
                    <div className="p-8">
                        <p className="font-display text-2xl font-custom">Developed Automation Bots</p>
                        <p className="mt-3 font-display text-xl text-gray-500">Built two automation bots using <span className="w-fit self-start px-4 py-1 text-black font-display rounded-3xl border-[1px] border-black bg-[#DFFF9C] hover:cursor-default ease-in-out duration-200 text-xl font-custom tracking-wide">Blue Prism</span>, reducing ERP process complexity by 85%.</p>
                    </div>
                    <div className="p-8">
                        <p className="font-display text-2xl font-custom">Implemented OCR Technology</p>
                        <p className="mt-3 font-display text-xl text-gray-500">Utilized <span className="w-fit self-start px-4 py-1 text-black font-display rounded-3xl border-[1px] border-black bg-[#DFFF9C] hover:cursor-default ease-in-out duration-200 text-xl font-custom tracking-wide">ABBYY OCR</span> to extract data from printed invoices and PDFs into ERP systems, improving data accuracy.</p>
                    </div>
                </div>
            </div>
        </div>
    );
  }
  
  export default IFiveOCoop;
  