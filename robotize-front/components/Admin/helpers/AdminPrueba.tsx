'use client'
import Image from "next/image"
import Robotize from '../../../assets/robotizeicono.jpeg'
import { CardAdminCMSTitle } from "@/components/PersonalComponent/title"
import Link from "next/link"
import { convertDate } from "../service/time.helper"
import { useState } from "react"
import { updateArticle } from "../service/admin.service"
import { useRouter } from "next/navigation"


interface Props {
    title: string
    section: string
    _id: string
    date: string
}

export default function AdminCMS({title,section, _id, date}: Props){
  const newDate = convertDate(date)  
  const [changeTitle,setChangeTitle] = useState(false)
  const [article,setArticle] = useState({
    _id: _id,
    title: title,
  })
  const router = useRouter()

  const handleChange = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
    setArticle({
        ...article,
        [e.target.name]: e.target.value
    })
}


  // Para cambiar el titulo desde la primera visualizacion
  const handelSubmit = async (e: any) => {
    e.preventDefault()
    const submit = await updateArticle(article)
    if(submit === 'updated'){
        router.push('/admin')
    }
}

  return(
        <div className="w-full grid grid-cols-5 text-center gap-4 border-b-2 py-4">
          <div className="flex gap-2 items-center text-left">
                <input type="checkbox" id="scales" name="scales" className="w-[25px]"/>
                <Image src={Robotize} alt='Icono' width={50} height={50} className="rounded-[50%]"/>
                <div className="text-xs">
                <span><strong>Robotize</strong></span>
                <p>{newDate}</p>
                </div>
          </div>
          <div className="gap-2 text-xs">
            <span className="bg-red-400 px-2 rounded-lg">Noticia</span>{' '}
            <span className="bg-blue-400 px-2 rounded-lg">En redaccion</span>
          </div>
          {
            changeTitle 
            ? <div>
              <textarea name='title' cols={30} rows={2} value={article.title} placeholder={title} className="font-semibold text-black" onChange={handleChange}/>
              <div className="flex justify-center gap-2">
                <button className="px-4 bg-robotize rounded-lg text-white" onClick={handelSubmit}>Modificar</button>
                <button className="px-4 bg-red-400 rounded-lg" onClick={() => setChangeTitle(false)}>Cancelar</button>
              </div>
            </div>
            : <div onClick={() => setChangeTitle(true)}><CardAdminCMSTitle title={title}/></div>
          }              
          <div>
            <select name="" id="">
              <option value={section}>{section}</option>
              <option value='deporte'>Deporte</option>
              <option value='policial'>Policial</option>
              <option value='politica'>Politica</option>
              <option value='economia'>Economia</option>
            </select>
          </div>
          <div>
            <Link href={`/admin/${_id}`} className="border-b-robotize border-b-2 w-1/3 text-center">Ver nota</Link>
          </div>
        </div>)
}