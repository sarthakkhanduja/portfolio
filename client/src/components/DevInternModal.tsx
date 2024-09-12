import locationPin from "../assets/location.svg";

interface DevInternModalProps {
    closeModal: () => void;
}

function DevInternModal({ closeModal }: DevInternModalProps) {
    return (
        <div className="flex items-start justify-center h-screen p-4 mt-28 md:mt-0">
            <div className="w-full md:w-3/4 m-auto border-black border-[1px] rounded-3xl shadow-2xl bg-white h-[90%] z-100 overflow-y-auto">
                <div className="flex flex-col">
                    <div className="flex flex-row w-full">
                        {/* Title, Company */}
                        <div className="flex flex-col justify-start font-display p-8 w-3/5">
                            <p className="text-3xl lg:text-6xl font-custom">Developer, Intern</p>
                            <div className="w-fit self-start px-4 py-1 mt-4 font-display rounded-3xl border-[1px] border-black bg-[#ffc0bc] hover:cursor-default ease-in-out duration-200 text-xl font-custom tracking-wide">
                                AB InBev
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
                                <p className="hidden sm:block text-xs md:text-xl font-custom">July 2020 - July 2021</p>
                                <p className="sm:hidden text-xs md:text-xl font-custom">Jul'20 - Jul'21</p>
                                <div className="flex flex-row items-center justify-end text-right">
                                    <img className="mx-2 size-4 sm:size-5 md:size-6" src={locationPin}></img>
                                    <p className="text-xs md:text-xl mt-2 font-custom sm:tracking-wide">BANGALORE, INDIA</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-row justify-start items-center mx-8 flex-wrap gap-2">
                        <div className="p-2 font-display text-xs sm:text-base px-4 rounded-3xl border-[1px] border-black">
                            PYTHON
                        </div>
                        <div className="p-2 font-display text-xs sm:text-base px-4 rounded-3xl border-[1px] border-black">
                            JAVASCRIPT
                        </div>
                        <div className="p-2 font-display text-xs sm:text-base px-4 rounded-3xl border-[1px] border-black">
                            REACT
                        </div>
                        <div className="p-2 font-display text-xs sm:text-base px-4 rounded-3xl border-[1px] border-black">
                            NODE.JS
                        </div>
                        <div className="p-2 font-display text-xs sm:text-base px-4 rounded-3xl border-[1px] border-black">
                            MICROSOFT AZURE
                        </div>
                        <div className="p-2 font-display text-xs sm:text-base px-4 rounded-3xl border-[1px] border-black">
                            AZURE SQL DATABASE
                        </div>
                        <div className="p-2 font-display text-xs sm:text-base px-4 rounded-3xl border-[1px] border-black">
                            ABBYY OCR
                        </div>
                        <div className="p-2 font-display text-xs sm:text-base px-4 rounded-3xl border-[1px] border-black">
                            BLUE PRISM
                        </div>
                        <div className="p-2 font-display text-xs sm:text-base px-4 rounded-3xl border-[1px] border-black">
                            AUTOMATION ANYWHERE
                        </div>
                        <div className="p-2 font-display text-xs sm:text-base px-4 rounded-3xl border-[1px] border-black">
                            BLUE PRISM
                        </div>
                        <div className="p-2 font-display text-xs sm:text-base px-4 rounded-3xl border-[1px] border-black">
                            POWER BI
                        </div>
                        <div className="p-2 font-display text-xs sm:text-base px-4 rounded-3xl border-[1px] border-black">
                            ANAPLAN
                        </div>
                    </div>

                    {/* Content starts here */}
                    <div className="mt-8 px-8 font-display text-2xl text-gray-500">
                        <p>The year 2020 marked the beginning of a new technological era, as the world grappled with the challenges posed by the COVID-19 pandemic. Undeterred by the global lockdown, I seized the opportunity to <span className="font-bold underline">secure a coveted internship as a Developer at AB InBev.</span></p>
                        <br></br>
                    </div>
                    <div className="p-8">
                        <p className="font-display text-2xl font-custom">Developed Automation Bots</p>
                        <p className="mt-3 font-display text-2xl text-gray-500">Our basic aim was to identify automation opportunities within existing workflows, and automate the redundant and mundane tasks, such as ERP data entry, data extraction, and data validation.
                            <br></br>Hence, building automation bots using RPA tools like Automation Anywhere and Blue Prism was the first method we resorted toward. Eventually, the applications we developed became more sophiticated and we started using Microsoft Power Apps.</p>
                    </div>
                    <div className="p-8">
                        <p className="font-display text-2xl font-custom italic text-gray-700">Soon after we realized that ROI that went into creating and maintaining automation bots was not enough, and hence, my team called out the limitations of RPA.</p>
                    </div>
                    <div className="p-8">
                        <p className="font-display text-2xl font-custom">Engineered Progressive Web Applications(PWAs)</p>
                        <p className="mt-3 font-display text-2xl text-gray-500">Recognizing the limitations of RPA, I spearheaded the transition towards developing full-stack web applications using the MERN stack, which catered to over 3,700 users across various use cases, including COVID-19 tracking, a global complaints portal, and an office seat booking application.</p>
                    </div>
                    <div className="p-8">
                        <p className="font-display text-2xl font-custom">Implemented OCR Technology</p>
                        <p className="mt-3 font-display text-2xl text-gray-500">A very peculiar use case of automation was extracting text from Invoice PDFs and Images, this is where we implemented OCR technology using ABBYY OCR.
                            <br></br>By integrating OCR with the automation bots, I was able to streamline a significant portion of the workflow and release valuable FTEs (full-time equivalents) for the organization.</p>
                    </div>
                    <div className="p-8">
                        <p className="font-display text-2xl font-custom">Data Engineering Principles</p>
                        <p className="mt-3 font-display text-2xl text-gray-500">As the organization's digital solutions continued to grow, I applied my data engineering principles to centralize and visualize the data, creating dashboards for stakeholders using tools like Anaplan and Power BI.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DevInternModal;
