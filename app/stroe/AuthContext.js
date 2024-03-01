"use client"

import React, { createContext, useState, useContext, useEffect } from "react";
import axios from 'axios';

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [isLongin, setIsLogin] = useState(false)

    useEffect(() => {
        const data = sessionStorage.getItem('data');
        if (data) {
            setIsLogin(true);
        }
    }, []);

    const login = async (email, password) => {
        try {
            const res = await axios.post('http://localhost:3000/api/user/login', { email, password })    
            sessionStorage.setItem('data', JSON.stringify(res.data));
            setIsLogin(true)
            
        } catch (error) {
            console.log(error);
        }
    }

    const signup = async (name, email, password) => {
        try {
            const res = await axios.post('http://localhost:3000/api/user/signup', { name, email, password })

            await login(email, password)
        } catch (error) {
            console.log(error);
        }
    }

    const logout = async () => {
        let token = sessionStorage.getItem('data')
        token = JSON.parse(token).userToken;
        try {
            await axios.post('http://localhost:3000/api/user/logout', { token }, { withCredentials: true })
                .then((res) => {
                    console.log(res.status === 200);
                    if (res.status === 200) {
                        sessionStorage.removeItem('data')
                        setIsLogin(false);
                    }
                })
        } catch (error) {
            console.log(error);
        }

    }

    const userList = async () => {
        let token = sessionStorage.getItem('data');
        if (!token) {
            console.log('No user token found');
            return null; // 或者返回適當的預設值
        }
        token = JSON.parse(token).userToken;
        try {
            const res = await axios.post('http://localhost:3000/api/user/userlist', { token }, { withCredentials: true });
            const userData = res.data;
            console.log(userData);
            return userData;
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <AuthContext.Provider value={{ isLongin, login, signup, logout, userList }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)