
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
        <div className="border-l-[0.05vw] dark:bg-gray-800 top-15 right-0 h-full fixed border-slate-600 mt-24" style={styles}>
            <h2 className="text-2-xl text-white p-5">Carrinho</h2>
        </div>
    </>
    )
}
