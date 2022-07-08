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
      },[]); 
   
  return(
        <div>
         <ul className=" grid grid-cols-4 gap-2 mt-10 ">
        {filmes.map(filme => (
            <li key={filme.id} className="border-1 border-black rounded">
                 <img src={`${image_path}${filme.poster_path}`}></img>
                 <strong>{filme.title}</strong>
            </li>
        )) }
      </ul>
        </div>
  )
    
}