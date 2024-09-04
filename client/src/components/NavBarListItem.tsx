type NavbarListItemProps = {
    label: string,
    onClick: () => void,
}

function NavbarListItem({ label, onClick }: NavbarListItemProps) {
    return (
        <div
            className="md:px-4 py-2 text-xs md:text-lg h-full font-display rounded-3xl hover:bg-gray-800 hover:text-white transition duration-200 ease-in-out cursor-pointer flex items-center mx-2.5 sm:mx-3"
            onClick={onClick}
        >
            {label}
        </div>
    );
}

export default NavbarListItem;
