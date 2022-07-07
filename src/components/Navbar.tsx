import { Heart, ShoppingCart } from 'phosphor-react';

export default function Navbar() {

    return (
        <div >
            <nav className=" bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-800">
                <div className="flex  justify-between items-center ">
                    <a href="https://flowbite.com/" className="flex items-center">
                        <div className="text-white ">
                            <p>LOGO</p>
                        </div>
                    </a>
                    <div className="content">
                        <input type="text" id="search-navbar" className=" w-96 block p-2 pl-10  text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
                    </div>
                    <div >
                        <div className="flex space-x-5 mx-5">
                            <Heart size={32} color="#ffffff" weight="fill" />
                            <ShoppingCart size={32} color="#ffffff" weight="fill" />
                        </div>
                    </div>
                </div>
            </nav>
        </div>
       
    );
}