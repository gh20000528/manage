"use client"

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import AuthPage from '../../auth/page';
import { useAuth } from '../../stroe/AuthContext';
import UserInfo from '../user';
import { IoIosLogIn } from "react-icons/io";

export default function SideBar() {
    const { isLongin, logout, userList } = useAuth()
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [user, setUser] = useState<null | undefined>(undefined);
    const router = useRouter(); 
    const path = usePathname()

    useEffect(() => {
        if (isLongin) {
            setIsModalOpen(false);
            const userData = async () => {
                const res = await userList()
                console.log(res);
                
                setUser(res)
            }
    
            userData()
        }
    }, [isLongin]);
    
    const toggleModal = (e: any) => {
        e.preventDefault()
        
        if (e.target.value === '登入'){
            setIsModalOpen(!isModalOpen);
        } else if (e.target.value === '登出'){
            logout()
            setUser(null)
            router.push('/'); 
        }
    };
    return (
        <div className="w-1/6 board h-full mx-2 rounded-xl shadow-2xl flex flex-col justify-between">
            <UserInfo data={user}/>

            {isModalOpen && <AuthPage/>}
            <nav className='text-cyan-50 flex flex-col text-left text-xl'>
                <Link href='/task' className={`py-2 px-10 cursor-pointer ${path === '/task' ? 'linkfocus' : ''}`}>我的任務</Link>
                <Link href='/worklist' className={`py-2 px-10  cursor-pointer ${path === '/worklist' ? 'linkfocus' : ''}`}>任務日誌</Link>
                <Link href='/notes' className={`py-2 px-10  cursor-pointer ${path === '/notes' ? 'linkfocus' : ''}`}>筆記</Link>
            </nav>


            <button onClick={toggleModal} className='text-cyan-50 flex items-center p-10 text-xl' value={isLongin? '登出' : '登入'}><IoIosLogIn className="mr-2 text-2xl" />{isLongin? '登出' : '登入'}</button>
        </div>
    );
}
