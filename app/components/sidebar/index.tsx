import Link from 'next/link';

export default function SideBar(){
    return(
        <div className="w-1/4 bg-cyan-950 h-full mx-5 rounded-xl">
            <nav className='text-cyan-50 flex flex-col p-10 text-xl'>
                <Link href='/task' className='py-2'>我的任務</Link>
                <Link href='/worklist' className='py-2'>任務日誌</Link>
                <Link href='/notes' className='py-2'>筆記</Link>
            </nav>
        </div>
    )
}