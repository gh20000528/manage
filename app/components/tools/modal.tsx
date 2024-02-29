import React, { ReactNode, useState } from 'react';
import Link from 'next/link';

interface ModalProps {
  children?: ReactNode;
}

export default function Modal ({ children }: ModalProps) {
  const [isOpen, setIsOpen] = useState(true);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {isOpen && (
        <div>
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center z-50">
              <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50" onClick={toggleModal}></div>
                <div className="relative p-4 rounded-lg w-1/3 h-2/4">
                    {children}
                </div>
            </div>
        </div>
      )}
    </>
  );
};

;
