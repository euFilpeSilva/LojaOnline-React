import Navbar from './components/Navbar'
import { useEffect, useState } from "react"
import ListFilmes, { Film, PopularFilms } from './components/ListFilmes';
import addFilmesCart from './components/ListFilmes';
import axios from "axios";

export default function App() {
  {/*posso usar o isOpen em todos os componentes que estão sendo importados aqui.*/ }
  const [isOpen, setIsOpen] = useState(false);



  const showSidebar = () => setIsOpen(!isOpen)

  const [isFavorite, setIsFavorite] = useState(false)
  const showFavorite = () => setIsFavorite(!isFavorite)

  const baseURL = "https://api.themoviedb.org/3/movie/popular?api_key=c53174418b2a81eacf8a7966fa850c98&language=pt-BR&page+=page"
  const [filmes, setFilmes] = useState<Film[]>([]);

  useEffect(() => {
    axios.get<PopularFilms>(baseURL)
      .then((response) => {
        setFilmes(response.data.results)
      });
  }, []);

  
  return (
    <div>
      <div >
        {/*cartAction reebendo a função showSidebar que atualiza o estado do isOpen*/}
        <Navbar
          filmes={filmes}
          cartAction={showSidebar} 
          favoriteAction={showFavorite} />
      </div>
      <div>
        <ListFilmes 
          isOpen={isOpen} 
          isFavorite={isFavorite} 
          addFilmesCart={ () => addFilmesCart}
          filmes={filmes}
        />
      </div>
    </div>

  )
}


