'use client'
import { useEffect, useState } from 'react'
import {AiOutlineSearch, AiOutlineClose} from 'react-icons/ai'
import { useRouter } from 'next/navigation'
import SideBar from '../Sidebar/Sidebar'
import { HiOutlineBars3 } from 'react-icons/hi2'

export default function Navbar(){
    const router = useRouter()
    const [sidebar,setSidebar] = useState(false)
    const [scroll,setScroll] = useState(false)

    useEffect(()=>{
        window.addEventListener("scroll",()=>{
         if(window.scrollY > 0) setScroll(true)
         else setScroll(false)
        })
    },[])
    return(
        <nav className={scroll ? 'border-b-2 border-[#441eae] w-full sticky top-0' : 'w-full sticky top-0'}>
            <div className="flex justify-between items-center mx-auto py-4 bg-white w-3/4 max-sm:w-full max-sm:justify-around">
                <div onClick={() => setSidebar(true)} className='flex justify-center items-center gap-2 border-slate-100 p-2 rounded-lg hover:cursor-pointer hover:bg-slate-100'>
                    <HiOutlineBars3 className='text-lg text-[#441eae]'/>
                    <span className='max-sm:hidden'>SECCIONES</span>
                </div>
                <h1 className="font-bold text-6xl cursor-pointer text-[#441eae] max-sm:text-4xl" onClick={() => router.push('/home')}>Robotize</h1>
                <AiOutlineSearch onClick={() => router.push('/search')} className='flex text-lg cursor-pointer text-[#441eae] max-sm:hidden'/>
            </div> 
                {
                    sidebar && <SideBar setSidebar={setSidebar} sidebar={sidebar}/>
                }
        </nav>
        )
}