import React, { ReactNode, useState } from 'react';
import { useAuth } from '../../stroe/AuthContext';

interface ModalProps {
  children?: ReactNode;
}

export default function CheckModal ({ children }: ModalProps) {
  const { isLongin } = useAuth()
  const [isOpen, setIsOpen] = useState(true);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {isOpen && (
        <div>
            <div className="fixed top-0 left-0 w-full h-full flex justify-center z-50">
                {children}
            </div>
        </div>
      )}
    </>
  );
};
