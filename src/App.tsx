import Navbar from './components/Navbar'
import React, { useState } from "react"
import ListFilmes from './components/ListFilmes';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const showSidebar = () => setIsOpen(!isOpen)

  return (
    <div className=''>
      <div>
        <Navbar cartAction={showSidebar} />
      </div>
      <div>
        <ListFilmes isOpen={isOpen} />
      </div>
    </div>

  )
}


