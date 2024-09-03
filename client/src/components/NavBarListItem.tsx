type NavbarListItemProps = {
    label: string,
    onClick: () => void,
}

function NavbarListItem({ label, onClick }: NavbarListItemProps) {
    return (
        <div
            className="px-4 py-2 text-2xl h-3/5 font-display rounded-3xl hover:bg-gray-800 hover:text-white transition duration-200 ease-in-out cursor-pointer flex items-center mx-3"
            onClick={onClick}
        >
            {label}
        </div>
    );
}

export default NavbarListItem;
