import Link from 'next/link'
import {AiOutlineClose} from 'react-icons/ai'

interface Props {
    setSidebar: any
    sidebar: boolean
}

export default function SideBar({setSidebar, sidebar}: Props){
    return(
        <div className='absolute left-0 top-0 w-full  h-[100vh] bg-lightBlack'>
            <div className='w-[240px] h-[100vh] bg-white px-2 border-r-2 border-[#441eae]'>
            <div className='flex justify-between py-4'>
                <h2 className='text-2xl max-sm:hidden'>Robotize</h2>
                <h2 className='text-2xl sm:hidden'>Secciones</h2>
                <AiOutlineClose onClick={() => setSidebar(false)} className='cursor-pointer text-2xl text-[#441eae]'/>
            </div>
            <ul className='flex flex-col gap-4'>
                <li><Link href='/politica' className='font-bold text-lg'>Politica</Link></li>
                <li><Link href='/economia' className='font-bold text-lg'>Economia</Link></li>
                <li><Link href='/deportes' className='font-bold text-lg'>Deportes</Link></li>
                {/* <li><Link href='/horoscopo' className='font-bold text-lg'>Horoscopo</Link></li> */}
                <li><Link href='/policial'className='font-bold text-lg'>Policiales</Link></li>
                <li><Link href='/clima'className='font-bold text-lg'>Clima</Link></li>
            </ul>
            </div>
        </div>
        )
}