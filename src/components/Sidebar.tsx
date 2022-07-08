import ListFilmes from "./ListFilmes"


type SideBarProps = {
    isOpen: boolean
}

export default function Sidebar(props : SideBarProps) {
       

    return (
        <>
            {!props.isOpen ?
                (<p><ListFilmes/></p>) :
                (
                    <div className="border-l-2 border-gray-700 top-15 right-0 h-full fixed bg-gray-600  p-10 w-[calc(60vw-10rem)] md:w-[25vw] { `${isOpen}:transition-all duration-900 easy-linear: ${!isOpen}`}">
                        <h2 className="text-2-xl text-white">This is Sidebar</h2>
                    </div>
                )
            }
        </>

    )
}
