// components/board.tsx
import React, { ReactNode } from 'react';

interface BoardProps {
    children: ReactNode;
}

const Board = ({ children }: BoardProps) => {
    return (
        <div className="w-5/6 bg-cyan-950 h-full mx-2 rounded-xl shadow-2xl">
            {children}
        </div>
    );
};

export default Board;