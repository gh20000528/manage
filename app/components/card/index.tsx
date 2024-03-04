'use client'

import axios from 'axios';
import { useEffect, useState } from 'react';


interface CardInfo {
    id: number, 
    title: string, 
    intro: string, 
    updatedAt:string, 
    finish: boolean
}

export default function Card() {
    const [card, setCard] = useState<CardInfo[]>([])



    const clickHandler = async (id: number) => {
        const cardId = id;
        const res = await axios.post('http://localhost:3000/api/card/cardfinish', {cardId});

        // 更新狀態以反映新的卡片狀態
        if (res.status === 200) {
            const updatedCard = card.map((c: CardInfo) => {
                if (c.id === cardId) {
                    return { ...c, finish: !c.finish };
                }
                return c;
            });
            setCard(updatedCard);
        }
    };

    
    
    return (
        <div className='text-white grid grid-cols-4 gap-4 p-10'>
            {card.map((card: CardInfo) => (
                <div key={card.id} className='card p-3 rounded-2xl relative'>
                    <h2 className='p-2 text-xl'>{card.title}</h2>
                    <p className='px-2 pb-5'>{card.intro}</p>
                    <p className='absolute right-3 bottom-3 text-sm'>{new Date(card.updatedAt).toLocaleDateString()}</p>
                    <button className={`px-10 py-1 rounded-2xl ${card.finish? 'bg-green-500': 'bg-red-500'}`} onClick={() => clickHandler(card.id)}>{card.finish? "完成" : "進行中"}</button>
                </div>
            ))}
        </div>
    )
}