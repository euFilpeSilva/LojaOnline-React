import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

import React, { useState } from "react"

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const showSidebar = () => setIsOpen(!isOpen)

  return (
    <div className=''>
          <div>
               <Navbar cartAction={showSidebar} />
          </div>
          <div>
                <Sidebar isOpen={isOpen} />
          </div>
    </div>
  )
}


