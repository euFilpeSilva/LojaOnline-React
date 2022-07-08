import axios from "axios";
import { useEffect, useState } from 'react';

// type Resposta ={
//     id: number,
//     title: string,
// }

export default function ListFilmes() {
    const [filmes, setFilmes] = useState([]);

    const baseURL = "https://api.themoviedb.org/3/movie/popular?api_key=c53174418b2a81eacf8a7966fa850c98&language=pt-BR"
    
    useEffect(() => {
        axios.get(baseURL)
        .then((response) => {
        setFilmes(response.data.results)
        });
      },[]); 
   
  return(
        <div>
         <ul className="flex-1">
        {filmes.map(filme => (
            <li key={filme.id}>
                 <strong>{filme.title}</strong>
            </li>
        )) }
      </ul>
        </div>
  )
    
}