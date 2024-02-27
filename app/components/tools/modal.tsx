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
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
                <div className="relative bg-white p-4 rounded-lg w-1/3 h-2/3">
                    {children}
                    <button className="absolute bg-white p-3 text-xl cursor-pointer z-50 top-1 right-1" onClick={toggleModal}>
                        關閉
                    </button>
                </div>
            </div>
        </div>
      )}
    </>
  );
};

;
