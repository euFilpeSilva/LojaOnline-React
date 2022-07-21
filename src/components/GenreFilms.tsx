
import axios from "axios";
import { useEffect, useState } from "react";
import { Film } from "./ListFilmes"

type GenreFilmsProps = {
    film: Film,
}

type Genres = {
    genreList: any;
    id: number,
    name: string
}

type GenreFilms = {
    genres: Genres[],
}


export default function GenreFilms(props: GenreFilmsProps) {
    const [genresList, setGenresList] = useState<Genres[]>([]);
    const genreURL = "https://api.themoviedb.org/3/genre/movie/list?api_key=c53174418b2a81eacf8a7966fa850c98&language=pt-BR";

    useEffect(() => {
        axios.get<GenreFilms>(genreURL)
            .then((response) => {
                setGenresList(response.data.genres)
            });
    }, []);
    // Para cada filme, substitui-se o array de ids de genero por um novo array apenas com a primeira posição do antigo
    props.film.genre_ids = [props.film.genre_ids[0]]

    return (
        <div className="pl-3 pt-0 pb-5 text-center leading-5  dark:bg-gray-800 flex gap-1 text-white ">
            {
                genresList.map(genre => (
                    // o includes(), verifica se existe uma string dentro do meu array e retorna true ou false

                    props.film.genre_ids.includes(genre.id) ? <div key={genre.id} >{genre.name}</div> : ''
                ))
            }
        </div>
    )
}