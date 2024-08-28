import { useState } from "react";
import DevInternModal from "./DevInternModal";
import SeniorAnalystModal from "./SeniorAnalystModal";
import IFiveOContract from "./IFiveOContract";
import IFiveOCoop from "./IFiveOCoop";
import ITCoop from "./ITCoop";

function Timeline() {
    // State to track if each element is hovered, initialized with an array of false values.
    const [hovered, setHovered] = useState<boolean[]>([false, false, false, false, false]);

    const [isDevInternModalVisible, setIsDevInternModalVisible] = useState(false);
    const [isSeniorAnalystModalVisible, setIsSeniorAnalystModalVisible] = useState<boolean>(false);
    const [isIFiveOContract, setIsIFiveOContract] = useState<boolean>(false);
    const [isIFiveOCoop, setIsIFiveOCoop] = useState<boolean>(false);
    const [isITCoop, setIsITCoop] = useState<boolean>(false);


    const onHovering = (index: number) => {
        // Toggle the hover state for the specific item
        setHovered((prev) =>
            prev.map((item, i) => (i === index ? !item : item))
        );
    };

    const toggleModal = (setStateFn: React.Dispatch<React.SetStateAction<boolean>>) => {
        setStateFn(prev => !prev); // Toggles the state
    };

    const closeModal = (setStateFn: React.Dispatch<React.SetStateAction<boolean>>) => {
        setStateFn(false); // Sets the state to false, closing the modal
    };

    return (
        <div className="h-screen flex flex-col justify-center items-center">
            <div className={`h-48 w-full p-16 font-display font-custom text-7xl ${isDevInternModalVisible ? 'blur-xl' : ''} ${isSeniorAnalystModalVisible ? 'blur-xl' : ''} ${isIFiveOContract ? 'blur-xl' : ''} ${isIFiveOCoop ? 'blur-xl' : ''} ${isITCoop ? 'blur-xl' : ''}`}>
                <p>Experience</p>
            </div>

            <div className={`h-full w-full py-32 px-16 font-display ${isDevInternModalVisible ? 'blur-xl' : ''} ${isSeniorAnalystModalVisible ? 'blur-xl' : ''} ${isIFiveOContract ? 'blur-xl' : ''} ${isIFiveOCoop ? 'blur-xl' : ''} ${isITCoop ? 'blur-xl' : ''}`}>
                {/* Timeline */}
                <ol className="relative flex after:content-[''] after:absolute after:w-full after:h-1 after:bg-gray-200 after:top-[25%] after:left-0">

                    {/* AB InBev, Internship */}
                    <li
                        onMouseEnter={() => onHovering(0)}
                        onMouseLeave={() => onHovering(0)}
                        onClick={() => {
                            toggleModal(setIsDevInternModalVisible)
                        }}
                        className={`relative flex flex-col items-center mb-10 w-1/5 transition-transform duration-300 hover:scale-105 hover:cursor-pointer ${hovered[0] ? 'scale-105' : ''}`}
                    >
                        {/* Date at the top */}
                        <h3 className={`p-2 rounded-3xl text-xl font-display font-custom text-gray-900 mb-4 ${hovered[0] ? 'bg-[#DFFF9C]' : ''}`}>July 2020</h3>

                        {/* Bullet in the middle */}
                        <div className="size-3 z-40 bg-gray-500 rounded-full border border-white"></div>

                        {/* Title at the bottom */}
                        <div className="flex flex-col items-center justify-center">
                            <h3 className={`p-2 mt-16 text-4xl font-display font-custom leading-none text-gray-700 ${hovered[0] ? 'bg-[#DFFF9C]' : ''} rounded-3xl`}>AB InBev</h3>
                            <h3 className="mt-1 text-lg font-display font-custom tracking-wide text-gray-500">INTERNSHIP</h3>
                        </div>
                    </li>

                    {/* AB InBev, FullTime */}
                    <li
                        onMouseEnter={() => onHovering(1)}
                        onMouseLeave={() => onHovering(1)}
                        onClick={() => {
                            toggleModal(setIsSeniorAnalystModalVisible)
                        }}
                        className={`relative flex flex-col items-center mb-10 w-1/5 transition-transform duration-300 hover:scale-105 hover:cursor-pointer ${hovered[1] ? 'scale-105' : ''}`}
                    >
                        {/* Date at the top */}
                        <h3 className={`p-2 rounded-3xl text-xl font-display font-custom text-gray-900 mb-4 ${hovered[1] ? 'bg-[#DFFF9C]' : ''}`}>August 2021</h3>

                        {/* Bullet in the middle */}
                        <div className="size-3 z-40 bg-gray-500 rounded-full border border-white"></div>

                        {/* Title at the bottom */}
                        <div className="flex flex-col items-center justify-center">
                            <h3 className={`p-2 mt-16 text-4xl font-display font-custom leading-none text-gray-700 ${hovered[1] ? 'bg-[#DFFF9C]' : ''} rounded-3xl`}>AB InBev</h3>
                            <h3 className="mt-1 text-lg font-display font-custom tracking-wide text-gray-500">FULL-TIME</h3>
                        </div>
                    </li>

                    {/* i-5O, Contract */}
                    <li
                        onMouseEnter={() => onHovering(2)}
                        onMouseLeave={() => onHovering(2)}
                        onClick={() => {
                            toggleModal(setIsIFiveOContract)
                        }}
                        className={`relative flex flex-col items-center mb-10 w-1/5 transition-transform duration-300 hover:scale-105 hover:cursor-pointer ${hovered[2] ? 'scale-105' : ''}`}
                    >
                        {/* Date at the top */}
                        <h3 className={`p-2 rounded-3xl text-xl font-display font-custom text-gray-900 mb-4 ${hovered[2] ? 'bg-[#DFFF9C]' : ''}`}>September 2022</h3>

                        {/* Bullet in the middle */}
                        <div className="size-3 z-40 bg-gray-500 rounded-full border border-white"></div>

                        {/* Title at the bottom */}
                        <div className="flex flex-col items-center justify-center">
                            <h3 className={`p-2 mt-16 text-4xl font-display font-custom leading-none text-gray-700 ${hovered[2] ? 'bg-[#DFFF9C]' : ''} rounded-3xl`}>i-5O</h3>
                            <h3 className="mt-1 text-lg font-display font-custom tracking-wide text-gray-500">CONTRACT</h3>
                        </div>
                    </li>

                    {/* i-5O, Co-op */}
                    <li
                        onMouseEnter={() => onHovering(3)}
                        onMouseLeave={() => onHovering(3)}
                        onClick={() => {
                            toggleModal(setIsIFiveOCoop)
                        }}
                        className={`relative flex flex-col items-center mb-10 w-1/5 transition-transform duration-300 hover:scale-105 hover:cursor-pointer ${hovered[3] ? 'scale-105' : ''}`}
                    >
                        {/* Date at the top */}
                        <h3 className={`p-2 rounded-3xl text-xl font-display font-custom text-gray-900 mb-4 ${hovered[3] ? 'bg-[#DFFF9C]' : ''}`}>January 2023</h3>

                        {/* Bullet in the middle */}
                        <div className="size-3 z-40 bg-gray-500 rounded-full border border-white"></div>

                        {/* Title at the bottom */}
                        <div className="flex flex-col items-center justify-center">
                            <h3 className={`p-2 mt-16 text-4xl font-display font-custom leading-none text-gray-700 ${hovered[3] ? 'bg-[#DFFF9C]' : ''} rounded-3xl`}>i-5O</h3>
                            <h3 className="mt-1 text-lg font-display font-custom tracking-wide text-gray-500">CO-OP</h3>
                        </div>
                    </li>

                    {/* Pernod Ricard, Co-op */}
                    <li
                        onMouseEnter={() => onHovering(4)}
                        onMouseLeave={() => onHovering(4)}
                        onClick={() => {
                            toggleModal(setIsITCoop)
                        }}
                        className={`relative flex flex-col items-center mb-10 w-1/5 transition-transform duration-300 hover:scale-105 hover:cursor-pointer ${hovered[4] ? 'scale-105' : ''}`}
                    >
                        {/* Date at the top */}
                        <h3 className={`p-2 rounded-3xl text-xl font-display font-custom text-gray-900 mb-4 ${hovered[4] ? 'bg-[#DFFF9C]' : ''}`}>September 2023</h3>

                        {/* Bullet in the middle */}
                        <div className="size-3 z-40 bg-gray-500 rounded-full border border-white"></div>

                        {/* Title at the bottom */}
                        <div className="flex flex-col items-center justify-center">
                            <h3 className={`p-2 mt-16 text-4xl font-display font-custom leading-none text-gray-700 ${hovered[4] ? 'bg-[#DFFF9C]' : ''} rounded-3xl`}>Pernod Ricard</h3>
                            <h3 className="mt-1 text-lg font-display font-custom tracking-wide text-gray-500">CO-OP</h3>
                        </div>
                    </li>
                </ol>
            </div>

            {/* Render the modals conditionally */}
            {isDevInternModalVisible && (
                <div className="fixed inset-0 flex items-center justify-center z-70 w-full">
                    <DevInternModal closeModal={() => {
                        closeModal(setIsDevInternModalVisible)}} />
                </div>
            )}

            {isSeniorAnalystModalVisible && (
                <div className="fixed inset-0 flex items-center justify-center z-70 w-full">
                    <SeniorAnalystModal closeModal={() => {
                        closeModal(setIsSeniorAnalystModalVisible)}} />
                </div>
            )}

            {isIFiveOContract && (
                <div className="fixed inset-0 flex items-center justify-center z-70 w-full">
                    <IFiveOContract closeModal={() => {
                        closeModal(setIsIFiveOContract)}} />
                </div>
            )}

            {isIFiveOCoop && (
                <div className="fixed inset-0 flex items-center justify-center z-70 w-full">
                    <IFiveOCoop closeModal={() => {
                        closeModal(setIsIFiveOCoop)}} />
                </div>
            )}

            {isITCoop && (
                <div className="fixed inset-0 flex items-center justify-center z-70 w-full">
                    <ITCoop closeModal={() => {
                        closeModal(setIsITCoop)}} />
                </div>
            )}
        </div>
    );
}

export default Timeline;
