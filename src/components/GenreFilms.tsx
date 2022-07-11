
import axios from "axios";
import { useEffect, useState } from "react";
import { Film } from "./ListFilmes"

type GenreFilmsProps = {
    film: Film,
}

type Genres = {
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

        return (

            <div className="p-2 text-center leading-5 text-gray-700 bg-white">

                {
                    genresList.map(genre => (
                        props.film.genre_ids.includes(genre.id) ? <div>{genre.name}</div> : <></>
                    ))
                }
            </div>
        )
    }