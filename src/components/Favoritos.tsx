import { Carrinho } from "./Carrinho"
import { Film } from "./ListFilmes";

type SideBarProps = {
  isOpen: boolean,
  carrinhoLista: Film[]
  removerItemCarrinho: (filme: Film) => void;
}

export default function Favoritos(props: SideBarProps) {

  let styles1 = {
    width: props.isOpen ? "300px" : "0px",
    transition: "1000ms",

  }
  let styles2 = {
    width: props.isOpen ? "400px" : "0px",
    transition: "1000ms",

  }


  return (
    <>
      <div className="fixed border-l-[0.05vw] dark:bg-gray-800 top-15 right-0 pt-20 border-slate-600 mt-28 h-[100%] md:bottom-0 " style={styles2} >
        <div className="">
          <h2 className="text-2-xl text-white p-5">

            <Carrinho
              carrinhoLista={props.carrinhoLista}
              removerItemCarrinho={props.removerItemCarrinho} 
              />
          </h2>
        </div>
       
      </div>
    </>
  )
}


