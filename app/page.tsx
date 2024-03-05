"use client"

import { useRouter } from 'next/navigation';
import Board from './components/board';
import { useEffect } from 'react';


export default async function Home() {  
  const router = useRouter();
  
  return (
    <Board>
      <div>

      </div>
    </Board>
  );
}
