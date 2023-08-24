import Link from "next/link";
import Navbar from "../Navbar/Navbar";
import NewsCard from "../NewsCard/NewsCard";
import LastCard from "../LastCard/LastCard";
import SectionPolitica from "./Politica/Politica";
import SectionDeportes from "./Deportes/Deportes";
import SectionNoticias from "./Economia/Economia";
import Footer from "../Footer/Footer";
import { DolarModel, NewModel } from "@/type";

interface Props{
    data: NewModel[]
    dataDolar: DolarModel[]
    weatherCity: string
    dataPolitica: NewModel[]
    dataEconomia: NewModel[]
    dataDeportes: NewModel[]
}

export default function Home({data, dataDolar, weatherCity, dataPolitica, dataEconomia, dataDeportes}: Props){
    const recentNews = data.slice(0,6)
    const allNews = data.slice(6,data.length)
    return(
            <>
            
                <div className="flex justify-between py-2 border-b-2 border-[#441eae]">
                    <div className="flex text-left gap-6">
                    <Link href='/economia'>Dólar oficial <strong>${dataDolar[0].sell}</strong></Link>
                    <Link href='/economia'>Dólar blue <strong>${dataDolar[1].sell}</strong></Link>
                    <Link href='/economia'>Dólar turista <strong>${dataDolar[3].sell}</strong></Link>
                    <Link href='/economia'>Dólar CCL <strong>${dataDolar[5].sell}</strong></Link>
                    </div>
                    <Link href='/clima'>Capital Federal <strong>{weatherCity}</strong></Link>
                </div>
            <section className="flex w-full py-10 border-b-2 border-[#441eae]">
                {/* Esto va a la izqueirda, renderizando todas las notas del dia */}
                <div className="w-3/4 grid grid-cols-3 gap-4">
                    {
                        recentNews.map(e => {
                            return <NewsCard key={e._id} _id={e._id} title={e.title} keytitle={e.keytitle} pretitle={e.pretitle} subtitle={e.subtitle} content={e.content} img={e.img} date={e.date} section={e.section}/>
                        })
                    }
                </div>
                {/* Esto va a la derecha, mostrando las ultimas noticias */}
                <aside className="w-1/4 px-4">
                    <h4 className="py-2 text-center border-b-2 border-[#441eae] text-[#441eae]">ULTIMAS NOTICIAS</h4>
                    <LastCard/>
                    <LastCard/>
                    <LastCard/>
                    <LastCard/>
                    <LastCard/>
                </aside>
            </section>
            <section className="w-full py-4 border-b-2 border-[#441eae]">
                <SectionPolitica politica={dataPolitica}/>
            </section>
            <section className="w-full py-4 border-b-2 border-[#441eae]">
                <SectionDeportes deportes={dataDeportes}/>
            </section>
            <section className="w-full py-4 border-b-2 border-[#441eae]">
                <SectionNoticias economia={dataEconomia}/>
            </section>
            <Footer/>
            </>
        )
}