// components/board.tsx
import React, { ReactNode } from 'react';

interface BoardProps {
    children: ReactNode;
}

const Board = ({ children }: BoardProps) => {
    return (
        <div className=" relative w-5/6 board h-full mx-2 rounded-xl shadow-2xl">
            {children}
        </div>
    );
};

export default Board;