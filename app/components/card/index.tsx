'use client'

import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Card() {
    const [card, setCard] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            let token = sessionStorage.getItem('data');
            if (!token) {
                console.log('No user token found');
                return null; 
            }
            token = JSON.parse(token).userToken;

            const res = await axios.post('http://localhost:3000/api/card/usercard', {token})

            console.log(res.data[0].updatedAt);
            
            setCard(res.data);
        }

        fetchData()
    },[])


    
    return (
        <div className='text-white grid grid-cols-4 gap-4 p-10'>
            {card.map((card: { id: number, title: string, intro: string, updatedAt:string }) => (
                <div key={card.id} className='card p-5 rounded-2xl relative'>
                    <h2 className='p-2 text-xl'>{card.title}</h2>
                    <p className='px-2'>{card.intro}</p>
                    <p className='absolute right-3 bottom-3 text-sm'>{new Date(card.updatedAt).toLocaleDateString()}</p>
                </div>
            ))}
        </div>
    )
}