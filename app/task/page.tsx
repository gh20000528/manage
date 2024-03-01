"use client"

import { useState } from "react";
import Board from "../components/board";
import Card from "../components/card";
import { GrAdd } from "react-icons/gr";
import NewCard from '../components/card/newcard';

export default function TaskPage(){
    const [openModal, setOpenModal] = useState(false)

    const clickHandler = (e: any) => {
        e.preventDefault()
        setOpenModal(true)
    }
    return (
        <Board>
            {openModal && <NewCard />}
            <div className="p-5 ">
                <h1 className="text-xl text-white">任務列表</h1>
                <Card/>

                <button className="newCardBtn" onClick={clickHandler}><GrAdd /></button>
            </div>
        </Board>
    )
}