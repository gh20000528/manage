"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import Modal from '../tools/modal'; // 假設您有一個 Modal 元件
import Auth from '../auth';


export default function SideBar() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = (e: any) => {
        e.preventDefault()
        setIsModalOpen(!isModalOpen);
    };
    return (
        <div className="w-1/4 bg-cyan-950 h-full mx-3 rounded-xl shadow-2xl">
            {isModalOpen && <Auth/>}
            <nav className='text-cyan-50 flex flex-col p-10 text-xl'>
                <Link href='/task' className='py-2 cursor-pointer'>我的任務</Link>
                <Link href='/worklist' className='py-2 cursor-pointer'>任務日誌</Link>
                <Link href='/notes' className='py-2 cursor-pointer'>筆記</Link>
            </nav>


            <button onClick={toggleModal}>登入</button>
        </div>
    );
}
