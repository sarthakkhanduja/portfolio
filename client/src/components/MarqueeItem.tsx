import bulletImg from "../assets/bullet.png";

type MarqueeItemProps = {
    label: string,
}

function MarqueeItem(props: MarqueeItemProps) {
    return(
        <div className="flex flex-row font-display justify-between items-center text-2xl font-bold">
            <p className="px-8">{props.label}</p>
            <img src={bulletImg} className="h-5 w-5 rounded-full object-cover mx-2" alt="Bullet"/>
        </div>
    )
}

export default MarqueeItem;