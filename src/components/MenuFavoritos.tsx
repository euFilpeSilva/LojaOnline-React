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
      <div className="fixed border-l-[0.05vw] dark:bg-gray-800 right-0 pt-20 border-slate-600 mt-28 h-[100%] md:bottom-0 transform " style={styles} >
        <div>
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


