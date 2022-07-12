
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

    const genreURL = "https://api.themoviedb.org/3/genre/movie/list?api_key=c53174418b2a81eacf8a7966fa850c98&language=pt-BR"

    useEffect(() => {
        axios.get<GenreFilms>(genreURL)
            .then((response) => {
                setGenresList(response.data.genres)
            });
    }, []);

    // Para cada filme, substitui o array de ids de genero por um novo array apenas com a primeira posição do antigo
    props.film.genre_ids = [props.film.genre_ids[0]]

        return (

            <div className="pl-3 pt-0 pb-5 text-center leading-5 text-gray-700 bg-white flex gap-1 text-xs ">
                    <strong className="">Gênero:</strong>
                {
                    genresList.map(genre => (
                        props.film.genre_ids.includes(genre.id) ? <div>{genre.name}</div> : <></>
                    ))
                }
            </div>
        )
    }