
import axios from "axios";
import { FilmScript } from "phosphor-react";
import { useEffect, useState } from "react";
import { Film } from "./ListFilmes"

type GenreFilmsProps = {
    film: Film,
}

type Genres = {
    id: number,
    name: string
}

type GenresFilm = {
    genres: Genres[],
}


export default function GenreFilms(props: GenreFilmsProps) {
    const [genresList, setGenresList] = useState<Genres[]>([]);

    const genreURL = "https://api.themoviedb.org/3/genre/movie/list?api_key=c53174418b2a81eacf8a7966fa850c98&language=pt-BR"

    useEffect(() => {
        axios.get<GenresFilm>(genreURL)
            .then((response) => {
                setGenresList(response.data.genres)
            });
    }, []);

    return (
        <>
            <div className="p-2 text-center leading-5 text-gray-700 bg-white">
                <>
                    {
                        props.film.genre_ids.map(id => {
                            {}
                        })
                    }
                </>
            </div>
        </>
    )
}