'use client'
import { useState } from 'react'
import {AiOutlineSearch, AiOutlineClose} from 'react-icons/ai'
import { useRouter } from 'next/navigation'
import SideBar from '../Sidebar/Sidebar'
import { HiOutlineBars3 } from 'react-icons/hi2'

export default function Navbar(){
    const router = useRouter()
    const [search, setSearch] = useState(false)
    const [sidebar,setSidebar] = useState(false)

    return(
        <nav className='w-full border-b-2 border-[#441eae] sticky top-0'>
            <div className="flex justify-between items-center mx-auto py-4 bg-white w-3/4">
                <div onClick={() => setSidebar(true)} className='flex justify-center items-center gap-2 border-slate-100 p-2 rounded-lg hover:cursor-pointer hover:bg-slate-100'>
                    <HiOutlineBars3 className='text-lg text-[#441eae]'/>
                    <span>SECCIONES</span>
                </div>
                <h1 className="font-bold text-6xl cursor-pointer text-[#441eae]" onClick={() => router.push('/')}>Robotize</h1>
                <AiOutlineSearch onClick={() => setSearch(true)} className={search ? 'hidden' : 'flex cursor-pointer text-[#441eae]'}/>
                <div className={search ? "flex justify-normal items-center cursor-pointer" : 'hidden'}>
                    <input type="text" placeholder="Busqueda" className="border-2 border-black rounded-lg" />
                    <AiOutlineClose onClick={() => setSearch(false)}/>
                </div>
            </div> 
                {
                    sidebar && <SideBar setSidebar={setSidebar} sidebar={sidebar}/>
                }
        </nav>
        )
}