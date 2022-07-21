import { Film } from "./ListFilmes";
import ActionButton from "./ActionButton";
import { Trash } from "phosphor-react";

type CarrinhoProps = {
    carrinhoLista: Film[],
    removerItemCarrinho: (filme: Film) => void;

}

export function Carrinho(props: CarrinhoProps) {
    const image_path = "https://image.tmdb.org/t/p/w500"

    let styles1 = {
        transition: "1000ms",
    }

    return (
        <>
            <div className="flex flex-col mr-2 ">
                <p>Carrinho:</p>
                    <div className="h-[32vw]">
                        <div className=" h-[100%] md:overflow-y-scroll scroll-h-0  scrollbar-thumb-gray-800 scrollbar-track-transparent scrollbar-thin scroll-m-0 ">
                        <ul className="p-4">
                            {props.carrinhoLista.map(filme => (
                                <li className=" rounded border-solid border-2 mt-1 text-xs border-slate-600 transform motion-safe:hover:scale-110 ... transition-all shadow-md"  >
                                    <div className="flex space-x-4 ... pb-2 pt-2 pl-2 overflow-hidden ">
                                        <div className="flex w-[100%]">
                                            <img src={`${image_path}${filme.poster_path}`} className=" w-20 h-20 mr-3" />
                                            <div className="mt-8">{filme.title}</div>
                                        </div>
                                        <div className=" transform motion-safe:hover:scale-110 ... shadow-md transition-all">
                                            <ActionButton
                                                icon={<button className="bg-red-600 rounded p-1 text-xs mr-2">
                                                        <Trash size={15} color="#ffffff" weight="light" />
                                                </button>}
                                                onTap={() => {
                                                    props.removerItemCarrinho(filme);
                                                }}
                                            />
                                        </div>
                                    </div>
                                </li>
                            ))}

                        </ul>
                        </div>
                    </div>
                <div className="absolute bottom-5 left-8 ... w-[100%] pr-[4vw] ">
                    <p className="text-white pl-4 pb-1.5 w-[30vw] relative right-4 dark:bg-gray-800">Total:</p>
                    <button className="w-full bg-white hover:bg-gray-400 text-black font-bold py-2 px-4  border-gray-700 hover:border-gray-500 rounded ml-1 mt-1 transition-all  " style={styles1}>
                        Finalizar compra
                    </button>
                </div>
            </div>

        </>
    )
}