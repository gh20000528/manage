"use client"

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import AuthPage from '../../auth/page';
import { useAuth } from '../../stroe/AuthContext';


export default function SideBar() {
    const { isLongin, logout } = useAuth()
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        if (isLongin) {
            setIsModalOpen(false);
        }
    }, [isLongin]);
    
    const toggleModal = (e: any) => {
        e.preventDefault()
        
        if (e.target.value === '登入'){
            setIsModalOpen(!isModalOpen);
        } else if (e.target.value === '登出'){
            logout()
        }
    };
    return (
        <div className="w-1/6 bg-cyan-950 h-full mx-2 rounded-xl shadow-2xl">
            {isModalOpen && <AuthPage/>}
            <nav className='text-cyan-50 flex flex-col p-10 text-xl'>
                <Link href='/task' className='py-2 cursor-pointer'>我的任務</Link>
                <Link href='/worklist' className='py-2 cursor-pointer'>任務日誌</Link>
                <Link href='/notes' className='py-2 cursor-pointer'>筆記</Link>
            </nav>


            <button onClick={toggleModal} className='text-cyan-50 flex flex-col p-10 text-xl' value={isLongin? '登出' : '登入'}>{isLongin? '登出' : '登入'}</button>
        </div>
    );
}
