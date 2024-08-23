import myPicture from "../assets/me.jpg";

type AboutProps = {
    onClose: () => void;
};

function About({ onClose }: AboutProps) {
    return (
        <div className="p-2">
            <div className="h-48 flex flex-row justify-between items-center">
                <div>
                    <img src={myPicture} className="size-24 rounded-full object-cover mx-8" alt="My Picture" />
                </div>
                <div>
                    <button 
                        onClick={onClose} // Call the onClose function when clicked
                        className="mx-4 p-4 w-36 rounded-[2rem] border-[1px] border-black text-2xl font-display font-custom hover:bg-black hover:text-white ease-in duration-100"
                    >
                        Close
                    </button>
                </div>
            </div>
            <div className="h-36">
                {/* Additional content */}
            </div>
        </div>
    );
}

export default About;
