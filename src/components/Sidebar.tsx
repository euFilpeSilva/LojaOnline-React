import React, { useState } from "react"

export default function Sidebar() {
    const [isOpen, setIsOpen] =useState(true);

    return (
        <>
        {!isOpen ?
        (<p>not open</p>) :
        (
        <div className="border-l-2 border-gray-700 top-15 right-0 h-full fixed bg-gray-600 w-[20vw] p-10">
            <h2 className="text-2-xl text-white">This is Sidebar</h2>
        </div>
        )    
    }
        </>
    )
}