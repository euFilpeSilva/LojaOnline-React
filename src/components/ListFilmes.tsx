import axios from "axios";
import { useEffect, useState } from 'react';

// type Resposta ={
//     id: number,
//     title: string,
// }

export default function ListFilmes() {
  const [filmes, setFilmes] = useState([]);

  const baseURL = "https://api.themoviedb.org/3/movie/popular?api_key=c53174418b2a81eacf8a7966fa850c98&language=pt-BR"
  const image_path = "https://image.tmdb.org/t/p/w500"

  useEffect(() => {
    axios.get(baseURL)
      .then((response) => {
        setFilmes(response.data.results)
      });
  }, []);

  return (
    <div className="w-[80vw] ml-[9vw]">
        <ul className=" grid grid-cols-4 justify-center items-center ml-10">
          {filmes.map(filme => (
            <li key={filme.id} className="border-2 border-slate-600 rounded  p-0 m-10 mb-5 flex flex-col">
              <img src={`${image_path}${filme.poster_path}`} className=""></img>
              <strong className="leading-4 p-2 text-center">{filme.title}</strong>
              <strong>{filme.genero}</strong>
              <button className="bg-blue-600 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                  Adicionar
              </button>
            </li>
          ))}
        </ul>
    </div>
  )

}