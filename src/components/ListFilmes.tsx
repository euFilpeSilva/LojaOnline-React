import axios from "axios";
import { useEffect, useState } from 'react';
import Sidebar from './Sidebar'

type Film = {
  id: number,
  title: string,
  poster_path: string,
  vote_average: number,
  genre_ids: number[],
}

type PopularFilms = {
    page: number,
    results: Film[],
    total_pages: number,
    total_results: number,
}

type ListFilmsrProps = {
  isOpen: boolean
}


export default function ListFilmes(props: ListFilmsrProps ) {
  const [filmes, setFilmes] = useState<Film[]>([]);

  const baseURL = "https://api.themoviedb.org/3/movie/popular?api_key=c53174418b2a81eacf8a7966fa850c98&language=pt-BR"
  const image_path = "https://image.tmdb.org/t/p/w500"

  useEffect(() => {
    axios.get<PopularFilms>(baseURL)
      .then((response) => {
        setFilmes(response.data.results)
      });
  }, []);

  return (
    <div className="flex bg-slate-800">
    <div className={props.isOpen? "w-[80vw]  " : " transition-all duration-1000"}>
        <ul className=" flex flex-wrap  justify-center items-center ml-2 ">
      {filmes.map(filme =>   
        (
          <li key={filme.id} className="border-2 border-slate-600 rounded  m-4 mt-10 flex flex-col transform motion-safe:hover:scale-110 ... transition-all shadow-md w-60">
           <img src={`${image_path}${filme.poster_path}`} className="w-60 h-80"></img>
            <strong className="p-2 text-center leading-5 text-gray-700 bg-white">{filme.title}</strong>
            <button className="bg-blue-600 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                Adicionar
            </button>
          </li>
        )
        )}
        </ul>
        </div>
        <Sidebar isOpen={props.isOpen} />
        </div>
  )

}