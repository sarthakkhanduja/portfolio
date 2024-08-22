type NavbarListItemProps = {
    label: string,
}

function NavbarListItem(props: NavbarListItemProps) {
    return(
        <div className="px-4 text-xl h-3/5 font-display rounded-3xl hover:bg-gray-800 hover:text-white transition duration-200 ease-in-out cursor-pointer flex items-center mx-3">
            {props.label}
        </div>
    )
}

export default NavbarListItem;