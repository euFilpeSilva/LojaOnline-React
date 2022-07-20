import { ListaFavoritos } from "./ListaFavoritos";
import { Film } from "./ListFilmes";

type SideBarProps = {
  isFavorite: boolean,
  favoriteLista: Film[]
  removerItemFavorito: (filme: Film) => void;
}

export default function Favoritos(props: SideBarProps) {

  let styles = {
    width: props.isFavorite ? "400px" : "0px",
    transition: "1000ms",

  }
  return (
    <>
      <div className="fixed border-l-[0.05vw] dark:bg-gray-800 top-15 right-0 pt-20 mt-28 border-slate-600  h-[100%] md:bottom-0 " style={styles} >
        <div className="">
          <h2 className="text-2-xl text-white p-5">
            <ListaFavoritos
              favoriteLista={props.favoriteLista}
              removerItemFavorito={props.removerItemFavorito} 
              />
          </h2>
        </div>
      </div>
    </>
  )
}


