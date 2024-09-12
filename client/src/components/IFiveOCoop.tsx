import locationPin from "../assets/location.svg";

interface IFiveOCoopProps {
    closeModal: () => void;
  }

function IFiveOCoop({ closeModal }: IFiveOCoopProps) {
    return (
        <div className="flex items-start justify-center h-screen p-4 mt-28 md:mt-0">
            <div className="w-full md:w-3/4 m-auto border-black border-[1px] rounded-3xl shadow-2xl bg-white z-100 h-[90%] overflow-y-auto">
                <div className="flex flex-col">
                    <div className="flex flex-row w-full">
                        {/* Title, Company */}
                        <div className="flex flex-col justify-start font-display p-8 w-3/5">
                            <p className="text-3xl lg:text-6xl font-custom">Software Engineer, Co-op</p>
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
                                <p className="hidden sm:block text-xs md:text-xl font-custom">January 2023 - April 2023</p>
                                <p className="sm:hidden text-xs md:text-xl font-custom">Jan'23 - Apr'23</p>
                                <div className="flex flex-row items-center justify-end text-right">
                                    <img className="mx-2 size-4 sm:size-5 md:size-6" src={locationPin}></img>
                                    <p className="text-xs md:text-xl mt-2 font-custom sm:tracking-wide">WINDSOR, ON</p>
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
                            REDIS
                        </div>
                        <div className="p-2 font-display text-xs sm:text-base px-4 rounded-3xl border-[1px] border-black">
                            AMAZON WEB SERVICES
                        </div>
                        <div className="p-2 font-display text-xs sm:text-base px-4 rounded-3xl border-[1px] border-black">
                            APACHE KAFKA
                        </div>
                    </div>

                    {/* Content starts here */}
                    <div className="mt-8 px-8 font-display text-2xl text-gray-500">
                        <p>Initially brought on as a contractor at i-5O, my dedication and impactful results led to being <span className="font-bold underline">offered the opportunity to complete my Co-op Work Term with the company as a Software Engineering Co-op.</span> This transition was a rewarding recognition of my hard work and commitment.</p>
                    </div>
                    <div className="px-8 py-12">
                        <p className="font-display text-2xl font-custom">Engineered client-centric Web Portal</p>
                        <p className="mt-3 font-display text-2xl text-gray-500">One of my key responsibilities was to develop the backend for a centralized client portal, enabling real-time tracking of KPIs from our computer vision models. I designed and engineered the backend using <span className="text-gray-800 font-custom">Node.js</span> and integrated <span className="text-gray-800 font-custom">Apache Kafka</span> to manage the flow of real-time data streams efficiently. 
                            <br></br>This solution not only reduced data refresh time for KPI dashboards by 40%, but also improved decision-making speed and operational visibility for clients. By leveraging tools like <span className="text-gray-800 font-custom">Redis</span> for caching and <span className="text-gray-800 font-custom">MongoDB</span> for data storage, I ensured scalability, reliability, and faster performance, empowering clients with up-to-the-minute insights.</p>
                    </div>
                    <div className="p-8">
                        <p className="font-display text-2xl font-custom">MVP for the Re-Training Application</p>
                        <p className="mt-3 font-display text-2xl text-gray-500">Created an MVP for the re-training application using <span className="text-gray-800 font-custom">AWS S3</span> for media storage, <span className="text-gray-800 font-custom">AWS Lambda</span> for serverless processing, and <span className="text-gray-800 font-custom">PyTorch</span> with <span className="text-gray-800 font-custom">Python</span> for model training.The MVP facilitated real-time alerts within our MLOps pipeline, automatically capturing and annotating new data from the camera. This streamlined the retraining process and triggered unit testing before deployment. 
                            <br></br>By leveraging these technologies, I laid the groundwork for scalable development, enabling future enhancements and adaptability as the system evolved.</p>
                    </div>
                </div>
            </div>
        </div>
    );
  }
  
  export default IFiveOCoop;
  