import { Heart, Key, ShoppingCart } from "phosphor-react";
import ActionButton from "./ActionButton";
import { Film } from "./ListFilmes";
import Search from './Search';

type NavBarProps = {
    cartAction: () => void,
    favoriteAction: () => void,
    filmes: Film[],
}

export default function Navbar(props: NavBarProps) {

    console.log('Filmes NavBar: ', props.filmes);
    

    return (
        <div className=" bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-800 fixed z-40 w-full ">
            <nav>
                <div className="flex  justify-between items-center ">
                    <a href="https://flowbite.com/" className="flex items-center">
                        <div className="text-white ">
                            <p>LOGO</p>
                        </div>
                    </a>
                    <div className="content">
                        <Search filmes={props.filmes}/>
                    </div>
                    <div >
                        <div className="flex space-x-5 mx-5 ">
                            <ActionButton
                                // favoriteAction foi criado pra atualizar o isFavorite
                                icon={<div className="transform motion-safe:hover:scale-110 ... transition-all shadow-md"><Heart size={32} color="#ffffff" weight="fill" /></div>}
                                onTap={props.favoriteAction}
                            />
                            {/*o CartAction foi criado pra atualizar o isOpen*/}
                            <ActionButton
                                icon={<div className="transform motion-safe:hover:scale-110 ... transition-all shadow-md"><ShoppingCart size={32} color="#ffffff" weight="fill" /></div>}
                                onTap={props.cartAction}
                            />
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    );
}

