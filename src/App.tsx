import Navbar from './components/Navbar'
import React, { useState } from "react"
import ListFilmes from './components/ListFilmes';

export default function App() {
  {/*posso usar o isOpen em todos os componentes que estão sendo importados aqui.*/}
  const [isOpen, setIsOpen] = useState(false);
  const showSidebar = () => setIsOpen(!isOpen)

  return (
    <div >
      <div >
        {/*cartAction reebendo a função showSidebar que atualiza o estado do isOpen*/}
        <Navbar cartAction={showSidebar} />
      </div>
      <div>
        <ListFilmes isOpen={isOpen} />
      </div>
    </div>

  )
}


