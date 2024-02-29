"use client"

import React, { createContext, useState, useContext, ReactNode } from "react";
import axios from 'axios';

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [isLongin, setIsLogin] = useState(() => {
        const data = sessionStorage.getItem('data');
        return data ? true : false;
    })
    const [uesr, setuser] = useState()

    const login = async (email, password) => {
        try {
            const res = await axios.post('http://localhost:3000/api/user/login', { email, password })    
            sessionStorage.setItem('data', JSON.stringify(res.data));
            setIsLogin(true)
            
            return true
        } catch (error) {
            console.log(error);
        }
    }

    // console.log(isLongin);


    return (
        <AuthContext.Provider value={{ isLongin, login }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)