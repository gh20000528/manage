'use client'

import { useCard } from '@/app/stroe/CardContext';
import axios from 'axios';
import { useEffect, useState, ReactNode } from 'react';

interface CardInfo {
    id: number, 
    title: string, 
    intro: string, 
    updatedAt:string, 
    finish: boolean
}

export default function Card() {
    const { card, finishCard } = useCard()
    
    const clickHandler = async (id: number) => {
        finishCard(id)
    };

    return (
        <div className='text-white grid grid-cols-4 gap-4 p-10'>
            {card.map((card: CardInfo) => (
                <div key={card.id} className='card p-3 rounded-2xl relative'>
                    <h2 className='p-2 text-xl'>{card.title}</h2>
                    <p className='px-2 pb-5 h-16'>{card.intro}</p>
                    <p className='absolute right-3 bottom-3 text-sm'>{new Date(card.updatedAt).toLocaleDateString()}</p>
                    <button className={`px-10 py-1 rounded-2xl ${card.finish? 'bg-green-500': 'bg-red-500'}`} onClick={() => clickHandler(card.id)}>{card.finish? "完成" : "進行中"}</button>
                </div>
            ))}
        </div>
    )
}