
type SideBarProps = {
    isOpen: boolean
}

export default function Sidebar(props : SideBarProps) {
       
    let styles = {
        width: props.isOpen ? "300px" : "0px",
        transition: "1000ms"
    }

    return (
     <>
        <div className="border-l-2 border-gray-700 top-15 right-0 h-full fixed bg-gray-600 " style={styles}>
            <h2 className="text-2-xl text-white">This is Sidebar</h2>
        </div>
    </>

    )
}
