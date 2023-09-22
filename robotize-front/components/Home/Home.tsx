import Link from "next/link";
import NewsCard from "../NewsCard/NewsCard";
import LastCard from "../LastCard/LastCard";
import SectionPolitica from "./Politica/Politica";
import SectionDeportes from "./Deportes/Deportes";
import SectionNoticias from "./Economia/Economia";
import Footer from "../Footer/Footer";
import { CounterNewsModel, DolarModel, NewModel } from "@/type";

interface Props{
    data: NewModel[]
    dataDolar: DolarModel[]
    weatherCity: string
    dataPolitica: NewModel[]
    dataEconomia: NewModel[]
    dataDeportes: NewModel[]
    dataSociedad: NewModel[]
    counterNews: CounterNewsModel
}

export default function Home({data, dataDolar, weatherCity, dataPolitica, dataEconomia, dataDeportes, dataSociedad, counterNews}: Props){
    const recentNews = data.slice(0,6)
    const dataSociedadSplit = dataSociedad.slice(0,5)
    // Este slice es para asegurarme de tener siempre 8 notas en la seccion dentro de la home
    // Porque sino cuando tengo 6 del mismo tema en las recente news, rompe la visual
    dataEconomia = dataEconomia.slice(0,8)
    dataDeportes = dataDeportes.slice(0,8)
    dataPolitica = dataPolitica.slice(0,8)

    return(
            <>
            
                <div className="flex justify-between py-2 border-b-2 border-[#441eae] max-sm:hidden">
                    <div className="flex text-left gap-6">
                    <Link href='/economia' className="lg:text-sm">Dólar oficial <strong>${dataDolar[1].sell}</strong></Link>
                    <Link href='/economia' className="lg:text-sm">Dólar blue <strong>${dataDolar[0].sell}</strong></Link>
                    {/* <Link href='/economia' className="lg:text-sm">Dólar Bolsa <strong>${dataDolar[2].sell}</strong></Link>
                    <Link href='/economia' className="lg:text-sm">Dólar CCL <strong>${dataDolar[3].sell}</strong></Link> */}
                    </div>
                    <Link href='/clima' className="lg:text-sm">Capital Federal <strong>{weatherCity}</strong></Link>
                    <p className="lg:text-sm">Notas automatizadas: <span className='font-bold'>{counterNews.counter}</span></p>
                </div>
                <h3 className="px-2 text-lg hidden max-sm:block py-2 text-[#441eae] font-bold">Noticias destacadas</h3>
            <section className="flex w-full py-10 border-b-2 border-[#441eae] max-sm:py-4">
                {/* Esto va a la izqueirda, renderizando todas las notas del dia */}
                <div className="w-3/4 grid grid-cols-3 gap-4 max-sm:grid-cols-1 max-sm:w-full">
                    {
                        recentNews.map(e => {
                            return <NewsCard key={e._id} _id={e._id} title={e.title} keytitle={e.keytitle} pretitle={e.pretitle} subtitle={e.subtitle} content={e.content} img={e.img} date={e.date} section={e.section}/>
                        })
                    }
                </div>
                {/* Esto va a la derecha, mostrando las ultimas noticias */}
                <aside className="w-1/4 px-4 max-sm:hidden">
                    <h4 className="py-2 text-center border-b-2 border-[#441eae] text-[#441eae]">TENDENCIAS</h4>
                    {/* <LastCard/> */}
                    {
                        dataSociedadSplit.map(e => {
                            return <LastCard key={e._id} title={e.title} section={e.section} _id={e._id} date={e.date}/>
                        })
                    }
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