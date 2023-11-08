'use client'
import RelacionCard from "../NotaCompleta/RelacionCard/RelacionCard";
import Footer from "../Footer/Footer";
import { DolarModel, NewModel, WeatherModel } from "@/type";
import { RenderSection } from "../PersonalComponent/RenderSection";
import { useState } from "react";
import { getMoreNews } from "./service/seccion.service";

interface Props {
    seccion: string
    dataDolar: DolarModel[]
    dataSection: NewModel[]
    dataWeather: WeatherModel[]
}

export default function Seccion({seccion, dataDolar, dataSection, dataWeather}: Props){
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
            {
                <RenderSection seccion={seccion} dataDolar={dataDolar} dataWeather={dataWeather} firstTwo={firstTwo}/>
            }
            <article className="grid grid-cols-4 gap-10 py-4 max-sm:grid-cols-2">
                {
                    lastArticles.map(e => {
                        return <RelacionCard key={e._id} img={e.img} _id={e._id} section={e.section} keytitle={e.keytitle} pretitle={e.pretitle} title={e.title}/>
                    })
                }
            </article>
            {
                !limit && <div className="text-center p-2 rounded-lg bg-[#441eae] text-white"><button onClick={getNews}>Ver mas</button></div>
            }
            <Footer/>
        </section>)
}