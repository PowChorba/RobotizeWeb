import Link from "next/link";
import {AiOutlineTwitter, AiFillLinkedin, AiFillMail} from 'react-icons/ai'

export default function Footer(){
    return(
        <footer className="flex max-sm:flex-col max-sm:gap-4 justify-between p-4 text-center items-center border-t-2">
            <div className="flex flex-col gap-2 max-sm:hidden">
                <p className="font-semibold"><u>Secciones:</u></p>
                <Link href='/politica'>Politica</Link>
                <Link href='/deportes'>Deportes</Link>
                <Link href='/horoscopo'>Horoscopo</Link>
                <Link href='/economia'>Economia</Link>
            </div>
            <div>
            <h2 className="text-3xl py-2 text-[#441eae]">ROBOTIZE</h2>
            <span>Copyright 2023 | Todos los derechos reservados</span>
            </div>
            <div className="text-center flex justify-center gap-2">
                <Link href='https://www.linkedin.com/in/robotize-rpa-4177ab287/' target="_blank"><AiFillLinkedin className='text-2xl'/></Link>
                <Link href='https://twitter.com/AutoDolar' target="_blank"><AiOutlineTwitter className='text-2xl'/></Link>
                <AiFillMail className='text-2xl'/>
            </div>
        </footer>)
}