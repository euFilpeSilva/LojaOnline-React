import { Film } from "./ListFilmes";
import ActionButton from "./ActionButton";

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
            <div className="flex flex-col mr-2">
                <p>Carrinho:</p>
                <ul className="">
                    {props.carrinhoLista.map(filme => (
                        <li className=" rounded border-solid border-2 mt-1 text-xs border-slate-600"  >
                                <div className="flex space-x-4 ... pb-2 pt-2 pl-2 overflow-hidden ">
                                    <div className="flex w-[100%]">
                                        <img src={`${image_path}${filme.poster_path}`} className=" w-20 h-20 mr-3" />
                                        <div className="mt-8">{filme.title}</div>
                                    </div>
                                    <div className=" transform motion-safe:hover:scale-110 ... shadow-md transition-all">
                                        <ActionButton
                                            icon={<button className="bg-red-600 rounded p-1 text-xs mr-2">Remover</button>}
                                            onTap={() => {
                                                props.removerItemCarrinho(filme);
                                            }}
                                        />
                                    </div>
                                </div>
                        </li>
                    ))}

                </ul>
                <div className="absolute bottom-5 left-8 ... w-[100%] pr-[4vw] ">
                    <p className="text-white pl-1 pb-1.5">Total:</p>
                    <button className="w-full bg-blue-600 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded ml-1 mt-1 transition-all  " style={styles1}>
                        Finalizar compra
                    </button>
                </div>
            </div>

        </>
    )
}