import { Heart, ShoppingCart } from "phosphor-react";
import ActionButton from "./ActionButton";

type NavBarProps = {
    cartAction: () => void,
}

export default function Navbar(props: NavBarProps) {
    return (
        <div className=" bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-800 fixed z-40 w-full">
            <nav className="" >
                <div className="flex  justify-between items-center ">
                    <a href="https://flowbite.com/" className="flex items-center">
                        <div className="text-white ">
                            <p>LOGO</p>
                        </div>
                    </a>
                    <div className="content">

                        <form className="flex items-center w-96 ml-8">
                            <div className="relative w-full">
                                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                    <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                                </div>
                                <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" />
                            </div>
                        </form>

                    </div>
                    <div >
                        <div className="flex space-x-5 mx-5">
                            <ActionButton
                                icon={<button><Heart size={32} color="#ffffff" weight="fill" /></button>}
                                onTap={() => { }}
                            />
                                {/*o CartAction foi criado pra atualizar o isOpen*/}
                            <ActionButton
                                icon={<button><ShoppingCart size={32} color="#ffffff" weight="fill" /></button>}
                                onTap={props.cartAction}
                                />
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}