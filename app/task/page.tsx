"use client"

import { useState, useEffect } from "react";
import axios from 'axios';
import Board from "../components/board";
import Card from "../components/card";
import { GrAdd } from "react-icons/gr";
import NewCard from '../components/card/newcard';


interface CardInfo {
    id: number, 
    title: string, 
    intro: string, 
    updatedAt:string, 
    finish: boolean
}

export default function TaskPage(){
    const [openModal, setOpenModal] = useState(false)
    const [card, setCard] = useState<CardInfo[]>([])

    useEffect(() => {
        const fetchData = async () => {
            let token = sessionStorage.getItem('data');
            if (!token) {
                console.log('No user token found');
                return null; 
            }
            token = JSON.parse(token).userToken;

            const res = await axios.post('http://localhost:3000/api/card/usercard', {token})
            
            setCard(res.data);
        }

        fetchData()
    },[])

    const clickHandler = (e: any) => {
        e.preventDefault()
        setOpenModal(true)
    }
    return (
        <Board>
            {openModal && <NewCard />}
            <div className="p-5 relative h-full">
                <h1 className="text-xl text-white">任務列表</h1>
                <select className=" absolute top-5 right-20 block py-2.5 px-0 w-40 text-l text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                    <option value="updatedAt">時間</option>
                    <option value="title">完成</option>
                    <option value="title">進行中</option>
                </select>
                <Card/>

                <button className="newCardBtn" onClick={clickHandler}><GrAdd /></button>
            </div>
        </Board>
    )
}