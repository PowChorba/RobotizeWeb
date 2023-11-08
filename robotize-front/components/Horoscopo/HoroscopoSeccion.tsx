
'use client'
import RelacionCard from "../NotaCompleta/RelacionCard/RelacionCard";
import Footer from "../Footer/Footer";
import { HoroscopoModel, NewModel } from "@/type";
import { useState } from "react";
import { getMoreNews } from "../Seccion/service/seccion.service";
import BigHoroscopo from "./BigHoroscopo";
import BigCard from "../Seccion/BigCard/BigCard";

interface Props {
    seccion: string
    dataSection: NewModel[]
    data: HoroscopoModel[]
}

export default function HoroscopoSeccion({seccion, dataSection, data}: Props){
    // Para agregar mas notas
    const [moreNews, setMoreNews] = useState<NewModel[]>(dataSection)
    const [limit,setLimit] = useState<boolean>(false)
    const [counter,setCounter] = useState<number>(2)
    const firstTwo = moreNews?.slice(0,2)
    const lastArticles = moreNews.slice(2, moreNews.length)

    // Para traer mas notas 
    const getNews = async () => {
        const articlesPage: NewModel[] = await getMoreNews({'section': seccion, 'page': counter.toString()})
        setCounter(counter + 1)
        if(articlesPage[0]?.title === 'No hay mas data'){
            setLimit(true)
        }else {
            let arrayNews: NewModel[] = [...moreNews,...articlesPage]
            setMoreNews(arrayNews)
        }
    }
    
    return(
        <section>
            <p className="text-2xl py-4"><strong>{seccion.toUpperCase()}</strong></p>
            {/* <BigHoroscopo data={data}/> */}
                <article className="grid grid-cols-2 gap-10 border-b-2 py-4 max-sm:grid-cols-1">
                {firstTwo.map((e) => {
                    return (
                    <BigCard key={e._id} _id={e._id} section={e.section} img={e.img} title={e.title} date={e.date} pretitle={e.pretitle} keytitle={e.keytitle}/>
                    );
                })}
                </article>
            <article className="grid grid-cols-4 gap-10 py-4 max-sm:grid-cols-2">
                {
                    lastArticles.map(e => {
                        return <RelacionCard key={e._id} img={e.img} _id={e._id} section={e.section} keytitle={e.keytitle} pretitle={e.pretitle}/>
                    })
                }
            </article>
            {
                !limit && <div className="text-center p-2 rounded-lg bg-[#441eae] text-white"><button onClick={getNews}>Ver mas</button></div>
            }
            <Footer/>
        </section>)
}