import { useEffect, useState } from "react";
import DevInternModal from "./DevInternModal";
import SeniorAnalystModal from "./SeniorAnalystModal";
import IFiveOContract from "./IFiveOContract";
import IFiveOCoop from "./IFiveOCoop";
import ITCoop from "./ITCoop";
import GoogleModal from "./GoogleModal";

interface TimelineProps {
  setHideNav: React.Dispatch<React.SetStateAction<boolean>>;
  onScrollToExperience: () => void;  
}

export default function Timeline({ setHideNav, onScrollToExperience }: TimelineProps) {
  const [hovered, setHovered] = useState<boolean[]>([false, false, false, false, false, false]);
  const [isDevInternModalVisible, setIsDevInternModalVisible] = useState(false);
  const [isSeniorAnalystModalVisible, setIsSeniorAnalystModalVisible] = useState<boolean>(false);
  const [isIFiveOContract, setIsIFiveOContract] = useState<boolean>(false);
  const [isIFiveOCoop, setIsIFiveOCoop] = useState<boolean>(false);
  const [isITCoop, setIsITCoop] = useState<boolean>(false);
  const [isGoogleModalVisible, setIsGoogleModalVisible] = useState<boolean>(false);

  const onHovering = (index: number) => {
    setHovered((prev) =>
      prev.map((item, i) => (i === index ? !item : item))
    );
  };

  const toggleModal = (setStateFn: React.Dispatch<React.SetStateAction<boolean>>) => {
    onScrollToExperience();
    setTimeout(() => setStateFn(prev => !prev), 500);
  };

  const closeModal = (setStateFn: React.Dispatch<React.SetStateAction<boolean>>) => {
    setStateFn(false);
  };

  const isAnyModalVisible = isDevInternModalVisible || isSeniorAnalystModalVisible || isIFiveOContract || isIFiveOCoop || isITCoop || isGoogleModalVisible;

  useEffect(() => {
    const body = document.body;
    if (isAnyModalVisible) {
      body.style.overflow = 'hidden';  // Disable background scroll
      setHideNav(true);
    } else {
      body.style.overflow = 'auto';  // Re-enable background scroll
      setHideNav(false);
    }

    return () => {
      body.style.overflow = 'auto';  // Cleanup in case of component unmount
    };
  }, [isAnyModalVisible, setHideNav]);

  return (
    <div className="min-h-screen flex flex-col justify-center items-start md:p-8">            
      <div className={`w-full px-4 py-8 md:mb-20 mt-20 md:mt-0 font-display font-custom text-5xl sm:text-6xl md:text-8xl text-left ${isAnyModalVisible ? 'blur-xl' : ''}`}>
        <p>Experience</p>
      </div>

      <div className={`w-full py-8 px-4 font-display ${isAnyModalVisible ? 'blur-xl' : ''}`}>
        {/* Timeline */}
        <ol className="relative flex flex-col md:flex-row md:justify-between after:content-[''] after:absolute after:w-1 md:after:w-full after:h-full md:after:h-1 after:bg-gray-200 after:left-1.5 md:after:left-0 after:top-4 md:after:top-[3.5%]">
          {[
            { date: "November 2024", company: "Google", type: "FULL-TIME", modalSetter: setIsGoogleModalVisible },
            { date: "September 2023", company: "Pernod Ricard", type: "CO-OP", modalSetter: setIsITCoop },
            { date: "January 2023", company: "i-5O", type: "CO-OP", modalSetter: setIsIFiveOCoop },
            { date: "September 2022", company: "i-5O", type: "CONTRACT", modalSetter: setIsIFiveOContract },
            { date: "August 2021", company: "AB InBev", type: "FULL-TIME", modalSetter: setIsSeniorAnalystModalVisible },
            { date: "July 2020", company: "AB InBev", type: "INTERNSHIP", modalSetter: setIsDevInternModalVisible },
          ].map((item, index) => (
            <li
              key={index}
              onMouseEnter={() => onHovering(index)}
              onMouseLeave={() => onHovering(index)}
              onClick={() => toggleModal(item.modalSetter)}
              className={`relative flex flex-col md:items-center mb-12 md:mb-0 pl-12 md:pl-0 md:w-1/6 transition-transform duration-300 hover:scale-105 hover:cursor-pointer ${hovered[index] ? 'scale-105' : ''}`}
            >
              <div className="absolute left-0 top-2.5 md:static size-4 z-40 bg-gray-500 rounded-full border-2 border-white md:mb-4"></div>
              <h3 className={`mb-2 md:mb-4 p-2 rounded-3xl text-sm md:text-xl font-display font-custom text-gray-900 ${hovered[index] ? 'bg-[#DFFF9C]' : ''}`}>{item.date}</h3>
              <div className="flex flex-col items-start md:items-center justify-center">
                <h3 className={`p-2 text-2xl md:text-3xl font-display font-custom leading-none text-gray-700 ${hovered[index] ? 'bg-[#DFFF9C]' : ''} rounded-3xl`}>{item.company}</h3>
                <h3 className="mt-1 pl-2 text-sm md:text-lg font-display font-custom tracking-wide text-gray-500">{item.type}</h3>
              </div>
            </li>
          ))}
        </ol>
      </div>

      {/* Modals */}
      {isGoogleModalVisible && (
        <div className="fixed inset-0 flex items-center justify-center z-70 w-full">
          <GoogleModal closeModal={() => closeModal(setIsGoogleModalVisible)} />
        </div>
      )}
      {isDevInternModalVisible && (
        <div className="fixed inset-0 flex items-center justify-center z-70 w-full">
          <DevInternModal closeModal={() => closeModal(setIsDevInternModalVisible)} />
        </div>
      )}
      {isSeniorAnalystModalVisible && (
        <div className="fixed inset-0 flex items-center justify-center z-70 w-full">
          <SeniorAnalystModal closeModal={() => closeModal(setIsSeniorAnalystModalVisible)} />
        </div>
      )}
      {isIFiveOContract && (
        <div className="fixed inset-0 flex items-center justify-center z-70 w-full">
          <IFiveOContract closeModal={() => closeModal(setIsIFiveOContract)} />
        </div>
      )}
      {isIFiveOCoop && (
        <div className="fixed inset-0 flex items-center justify-center z-70 w-full">
          <IFiveOCoop closeModal={() => closeModal(setIsIFiveOCoop)} />
        </div>
      )}
      {isITCoop && (
        <div className="fixed inset-0 flex items-center justify-center z-70 w-full">
          <ITCoop closeModal={() => closeModal(setIsITCoop)} />
        </div>
      )}
    </div>
  );
}
