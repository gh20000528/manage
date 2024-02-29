"use client"

import Modal from "../components/tools/modal"
import Login from './login';
import Signup from './signup';
import { useAuth } from '../stroe/AuthContext';
import { useState } from 'react';

export default function AuthPage() {
    const [switchPage, isSwitchPage] = useState(false)
    const { isLongin } = useAuth()

    const swichPage = (e: any) => {
        e.preventDefault()
        isSwitchPage(!switchPage)
    }

    return (
        <Modal>
            <section className="dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto">
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                { switchPage? '註冊' : '登入' }
                            </h1>
                            {switchPage? <Signup/> : <Login/>}    
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                {switchPage? '已經有帳號嗎?' : '還沒有帳號嗎?'} 
                                <a className="font-medium text-primary-600 hover:underline dark:text-primary-500 cursor-pointer" onClick={swichPage}>{switchPage? '登入' : '註冊'}</a>
                            </p>   
                        </div>
                    </div>
                </div>
            </section>
        </Modal>
    )
}