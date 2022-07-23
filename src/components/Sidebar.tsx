import { Carrinho } from "./Carrinho"
import { Film } from "./ListFilmes";

type SideBarProps = {
  isOpen: boolean,
  carrinhoLista: Film[],
  removerItemCarrinho: (filme: Film) => void,
  addFilmesCart: (filme: Film) => void,
}

export default function Sidebar(props: SideBarProps) {

  let styles = {
    width: props.isOpen ? "400px" : "0px",
    transition: "1000ms",
  }
  return (
    <>
      <div className="fixed border-l-[0.05vw] dark:bg-gray-800 right-0 pt-20 border-slate-600 mt-28 h-[100%] md:bottom-0 transform " style={styles} >
        <div >
          <h2 className="text-2-xl text-white p-5">
            <Carrinho
              carrinhoLista={props.carrinhoLista}
              removerItemCarrinho={props.removerItemCarrinho} 
              addFilmesCart={props.addFilmesCart}
              />
          </h2>
        </div>
      </div>
     
    </>
  )
}


