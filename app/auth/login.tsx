"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../stroe/AuthContext';


export default function Login({}) {
    const { login, isLongin } = useAuth()
    const router = useRouter(); 

    const [formData, setFormData] = useState({
        email: '',
        password: ''
      });

    const changeHandler = (e: any) => {
        const { name, value } = e.target

        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }))
    }

    // console.log(formData);

    const sumbitHandler = async (e: any) => {
        e.preventDefault()
        await login(formData.email, formData.password)
        router.push('/task'); 
    }   
    
    
    return(
        <>
            <form className="space-y-4 md:space-y-6" action="#" onSubmit={sumbitHandler}>
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">email</label>
                    <input type="email" name="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" onChange={changeHandler} value={formData.email}/>
                </div>
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                    <input type="password" name="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={changeHandler} value={formData.password}/>
                </div>
                <button type="submit" className="w-full text-white bg-slate-800 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">登入</button>
            </form>

        </>
    )
}