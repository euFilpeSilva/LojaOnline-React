import axios from "axios";
import { useEffect, useState } from "react";
import{ Film } from './ListFilmes';

type SearchProps = {
    filmes: Film[],
}

export default function Search(props: SearchProps) {
    // console.log('filmes Search', props.filmes);
    
    const [search, setSearch] = useState('');
    
    // Cria um backup da lista de filmes
    const filmesList = [...props.filmes]

    // console.log(search);

    function onChange(e: any) {
        // console.log(e.target.value);
        console.log(props.filmes);

        props.filmes.map( (filme, index) => {
            if(!filme.title.includes(e.target.value)) {

                props.filmes.pop();
            }
          });

          // Se a pesquisa estiver vazia, copiar o conteúdo do backup para voltar com a lista original
          if(e.target.value.length < 1) {
              () =>props.filmes = filmesList;
          }
    }

    
    return (
        <div className="flex items-center w-96 ml-8" >
            <div className="relative w-full">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" ></path></svg>
                </div>
                <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search"
                    onChange={onChange}
                    // value={search}
                />   
            </div>
        </div>
    )
}
