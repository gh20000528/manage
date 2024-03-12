'use client'
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { useCard } from '@/app/stroe/CardContext';
import axios from 'axios';
import { useEffect, useState, ReactNode } from 'react';
import { FaPlus } from "react-icons/fa";
import ChackModal from '../tools/checkmodal';

interface CardInfo {
    id: number, 
    title: string, 
    intro: string, 
    updatedAt:string, 
    createdAt:string,
    finish: boolean
}

interface CardProps {
    openModal: () => void;
}


export default function Card({ openModal }: CardProps) {
    const { card, finishCard } = useCard()
    const [check, setCheck] = useState(false)
    
    
    const clickHandler = async (id: number) => {
        finishCard(id)
        setCheck(!check)
    };

    const cardInfo = async () => {
        
    }

    return (
        <div className='text-white grid grid-cols-4 gap-4 p-6 h-screen relative'>
            {card.map((card: CardInfo) => (
                <div key={card.id} className='card p-3 rounded-2xl relative h-44'>
                    <h2 className='p-2 text-xl'><a onClick={cardInfo}>{card.title}</a></h2>
                    <p className=' p-2 h-20'>{card.intro}</p>
                    <p className='absolute right-3 bottom-3 text-sm'>{new Date(card.createdAt).toLocaleDateString()}</p>
                    <button className='setting'><HiOutlineDotsHorizontal /></button>
                    <button className={`px-10 py-1 rounded-2xl ${card.finish? 'bg-green-500': 'bg-red-500'}`} onClick={() => clickHandler(card.id)}>{card.finish? "完成" : "進行中"}</button>
                </div>
            ))}
            <button className='bg-while border-2 border-dashed rounded-2xl flex items-center justify-center h-44' onClick={openModal}>新增任務<FaPlus /></button>
        </div>
    )
}