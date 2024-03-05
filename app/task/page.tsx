"use client"

import { useState, useEffect, ReactNode } from "react";
import axios from 'axios';
import Board from "../components/board";
import Card from "../components/card";
import { GrAdd } from "react-icons/gr";
import NewCard from '../components/card/newcard';
import { useCard } from "../stroe/CardContext";


interface CardInfo {
    id: number, 
    title: string, 
    intro: string, 
    updatedAt:string, 
    finish: boolean
}

export default function TaskPage(){
    const {cardList} = useCard()

    const [openModal, setOpenModal] = useState(false)
    const [card, setCard] = useState([])

    useEffect(() => {
        cardList()
    },[])


    const clickHandler = (e: any) => {
        e.preventDefault()
        setOpenModal(!openModal)
    }
    return (
        <Board>
            {openModal && <NewCard isOpen={openModal} setOpenModal={setOpenModal} />}
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