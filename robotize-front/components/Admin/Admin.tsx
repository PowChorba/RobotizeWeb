'use client'
import { ArticlesCMSType, ArticlesCardType, NewModel } from "@/type"
import AdminCard from "./helpers/AdminCard"
import { useState } from "react"
import { getAllAdmin } from "./service/admin.service"
import { useRouter } from "next/navigation"
import AdminCMS from "./helpers/AdminPrueba"


interface Props {
    data: ArticlesCMSType[]
}

export default function Admin({data}: Props){
    const [search, setSearch] = useState('')
    const router = useRouter()

    // Para agregar mas notas
    const [moreNews, setMoreNews] = useState<ArticlesCMSType[]>(data)
    const [limit,setLimit] = useState<boolean>(false)
    const [counter,setCounter] = useState<number>(2)

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }
    // data = data.filter(e => e.section === section)

    const dataFilter = moreNews.filter(e => e.title.toLowerCase().includes(search.toLowerCase()))

    const getNews = async () => {
        const articlesPage: ArticlesCMSType[] = await getAllAdmin(counter.toString())
        setCounter(counter + 1)
        if(articlesPage[0]?.title === 'No hay mas data'){
            setLimit(true)
        }else {
            let arrayNews: ArticlesCMSType[] = [...moreNews,...articlesPage]
            setMoreNews(arrayNews)
        }
    }

    return(
        <>
            <section>
                <div className="flex justify-between items-center gap-2 w-3/4 mx-auto p-4 border-b-2 border-b-[#441eae]">
                    <div className="flex justify-center items-center gap-4">
                    <h2 className="font-bold text-6xl cursor-pointer text-[#441eae] max-sm:text-4xl" onClick={() => router.push('/home')}>Robotize</h2>
                    </div>
                    <div>
                        <input type="text" value={search} placeholder="Busca el titulo maricon" onChange={handleSearch} className="rounded-lg border-2 border-[#441eae] px-4"/>
                    </div>
                </div>
                <div className="w-3/4 mx-auto flex flex-col justify-center items-center gap-4">
                    <div className="w-full grid grid-cols-5 text-center py-4 border-b-2 gap-4">
                        <input type="checkbox" id="scales" name="scales" className="w-[15px]"/>
                        <p className="font-bold">Estado</p>
                        <p className="font-bold">Titulo</p>
                        <p className="font-bold">Seccion</p>
                        <p className="font-bold">Zonas</p>
                    </div>
                    {
                        search === '' ? moreNews.map(e => {return <AdminCMS key={e._id} _id={e._id} section={e.section} title={e.title} date={e.date} publico={e.publico}/>})
                        : dataFilter.map(e => {return <AdminCMS key={e._id} _id={e._id} section={e.section} title={e.title} date={e.date} publico={e.publico}/>})
                    }
                </div>
                {
                !limit && <div className="w-1/6 mx-auto text-center my-4 p-2 rounded-lg bg-[#441eae] text-white"><button onClick={getNews}>Ver mas</button></div>
                }
            </section>
        </>)
}