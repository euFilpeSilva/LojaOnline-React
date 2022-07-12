
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
        <div className="border-l-[0.05vw] dark:bg-gray-800 top-15 right-0 fixed border-slate-600 mt-24" style={styles}>
          <div className="h-[35vw]">
            <h2 className="text-2-xl text-white p-5">Carrinho:</h2>
          </div>
            <p className="text-white pl-1">Total:</p>
            <button className="bg-blue-600 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded ml-1 mt-1 transform motion-safe:hover:scale-105 ... transition-all shadow-sm" style={styles}>
                  Finalizar compra
            </button>
        </div>
    </>
    )
}


