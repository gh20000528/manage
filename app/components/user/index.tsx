'use client'
import { ReactNode } from 'react';

interface Props {
    data: { userData: userData } | null | undefined;
}

interface userData {
    name: string
}

export default function UserInfo({ data }: Props) {


    return (
        <div className='text-cyan-50 flex flex-col p-10 text-2xl'>
             <p>{data ? `${data.userData.name}` : 'Welcome to Manage'}</p>
        </div>
    )
}