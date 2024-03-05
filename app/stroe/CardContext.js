"use client"

import React, { createContext, useState, useContext, useEffect } from "react";
import axios from 'axios';

export const CardContext = createContext()

export const CardProvider = ({ children }) => {
    const [card, setCard] = useState([])

    const cardList = async () => {
        try {
            let token = sessionStorage.getItem('data');
            if (!token) {
                console.log('No user token found');
                return null; 
            }
            token = JSON.parse(token).userToken;

            const res = await axios.post('http://localhost:3000/api/card/usercard', {token})
            
            setCard(res.data)
        } catch (error) {
            console.log('Card list api error',error);
        }
    }

    const finishCard = async (id) => {
        const cardId = id;
        const res = await axios.post('http://localhost:3000/api/card/cardfinish', {cardId});

        // 更新狀態以反映新的卡片狀態
        if (res.status === 200) {
            const updatedCard = card.map((c) => {
                if (c.id === cardId) {
                    return { ...c, finish: !c.finish };
                }
                return c;
            });
            setCard(updatedCard);
        }
    }
    

    return (
        <CardContext.Provider value={{ cardList, card, finishCard }}>
            {children}
        </CardContext.Provider>
    )
}

export const useCard = () => useContext(CardContext)