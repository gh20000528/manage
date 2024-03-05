"use client"

import React, { ReactNode, useState } from 'react';



interface Props {
    children: ReactNode
}

export default function NewCardModal ({children}: Props) {

    const [isOpen, setIsOpen] = useState(true);

    const toggleModal = () => {
    setIsOpen(!isOpen);
    };
    return (
        <>
        {isOpen && (
          <div>
              <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50" onClick={toggleModal}></div>
                  <div className="relative p-4 rounded-lg w-1/3 h-5/6">
                      {children}
                  </div>
              </div>
          </div>
        )}
      </>
    )
}