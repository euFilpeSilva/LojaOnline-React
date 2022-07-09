import axios from "axios";
import { Heart } from "phosphor-react";
import { useEffect, useState } from 'react';
import ActionButton from "./ActionButton";
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


export default function ListFilmes(props: ListFilmsrProps) {
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
    <div className="flex dark:bg-gray-800">
      <div className={props.isOpen ? "w-[80vw]  " : " transition-all duration-1000"}>

        <ul className=" flex flex-wrap  justify-center items-center ml-2 mt-24">
          {filmes.map(filme =>
          (
              <div className="transform motion-safe:hover:scale-110 ... transition-all shadow-md">
                <div className="absolute pl-2 pr-2 pt-2 bg-blue-500 rounded-full justify-center items-center z-40 right-0 transform motion-safe:hover:scale-110 ... transition-all shadow-md">
                  <ActionButton
                    icon={<button><Heart size={32} color="#ffffff" weight="fill" /></button>}
                    onTap={() => { }}
                  />
                </div>
                <li key={filme.id} className="border-2 border-slate-600 rounded  m-4 flex flex-col  w-60">
                  <img src={`${image_path}${filme.poster_path}`} className="w-60 h-80">
                  </img>
                  <strong className="p-2 text-center leading-5 text-gray-700 bg-white">{filme.title}</strong>
                  <button className="bg-blue-600 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                    Adicionar
                  </button>
                </li>
              </div>
          )
          )}
        </ul>
      </div>
      <Sidebar isOpen={props.isOpen} />
    </div>
  )

}