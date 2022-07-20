import { Film } from "./ListFilmes";
import ActionButton from "./ActionButton";
import { ShoppingCart, Trash } from "phosphor-react";

type FavoriteProps = {
    cartAction: () => void;
    favoriteLista: Film[],
    removerItemFavorito: (filme: Film) => void;

}

export function ListaFavoritos(props: FavoriteProps) {
    const image_path = "https://image.tmdb.org/t/p/w500"

    let styles1 = {
        transition: "1000ms",
    }

    return (
        <>
            <div className="flex flex-col">
                <p>Favoritos:</p>
                <ul className="">
                    {props.favoriteLista.map(filme => (
                        <li className=" rounded border-solid border-2 mt-1 text-xs border-slate-600 transform motion-safe:hover:scale-110 ... transition-all shadow-md"  >
                                <div className="flex space-x-4 ... pb-2 pt-2 pl-2 overflow-hidden ">
                                    <div className="flex w-[100%]">
                                        <img src={`${image_path}${filme.poster_path}`} className=" w-20 h-20 mr-3" />
                                        <div className="mt-8">{filme.title}</div>
                                    </div> 
                                        <div className=" flex gap-2 pt-7">
                                        <ActionButton
                                                icon={<button className="transform motion-safe:hover:scale-110 ... transition-all shadow-md"><ShoppingCart size={22} color="#ffffff" weight="fill" /></button>}
                                                onTap={ props.cartAction }
                                        />
                                            <ActionButton
                                                icon={<button className="bg-red-600 rounded p-1 text-xs transform motion-safe:hover:scale-110 ... shadow-md transition-all mr-5">
                                                    <Trash size={15} color="#ffffff" weight="light" />
                                                </button>}
                                                onTap={() => {
                                                    props.removerItemFavorito(filme);
                                                }}
                                            />
                                    </div>
                                </div>
                        </li>
                    ))}

                </ul>

            </div>

        </>
    )
}