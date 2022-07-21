import Navbar from './components/Navbar'
import { useState } from "react"
import ListFilmes from './components/ListFilmes';

export default function App() {
  {/*posso usar o isOpen em todos os componentes que estão sendo importados aqui.*/ }
  const [isOpen, setIsOpen] = useState(false);
  const showSidebar = () => setIsOpen(!isOpen)

  const [isFavorite, setIsFavorite] = useState(true)
  const showFavorite = () => setIsFavorite(!isFavorite)

  return (
    <div >
      <div >
        {/*cartAction reebendo a função showSidebar que atualiza o estado do isOpen*/}
        <Navbar cartAction={showSidebar} favoriteAction={showFavorite} />
      </div>
      <div>
        <ListFilmes isOpen={isOpen} isFavorite={isFavorite} />
      </div>
    </div>

  )
}


