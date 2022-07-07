import React, { useState } from "react"

export default function Sidebar() {
    const [isOpen, setIsOpen] =useState(true);

const showSidebar =() => setIsOpen(!isOpen)

    return (
        <>
        {!isOpen ?
        (<p>not open</p>) :
        (
        <div className="border-l-2 border-gray-700 top-15 right-0 h-full fixed bg-gray-600  p-10 w-[calc(60vw-10rem)] md:w-[25vw] ">
            <h2 className="text-2-xl text-white">This is Sidebar</h2>
        </div>
        )    
    }
        </>
    )
}
