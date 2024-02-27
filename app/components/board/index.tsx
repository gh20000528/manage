// components/board.tsx
import React, { ReactNode } from 'react';

interface BoardProps {
    children: ReactNode;
}

const Board: React.FC<BoardProps> = ({ children }) => {
    return (
        <div className="w-3/4 bg-cyan-950 h-full mx-3 rounded-xl shadow-2xl">
            {children}
        </div>
    );
};

export default Board;