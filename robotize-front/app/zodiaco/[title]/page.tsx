import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import NotaCompleta from "@/components/NotaCompleta/NotaCompleta";
import { getHoroscopoWeakly, getSectionNotes } from "../service/section.service";
import NotFound from "@/components/NotFound/NotFound";
import NotaHoroscopo from "@/components/Horoscopo/NotaHoroscopo";


export default async function HoroscopoNotaApp({params}:any){
    const data = await getHoroscopoWeakly(params.title)
    const dataSection = await getSectionNotes('zodiaco')

    return(
        <>
            <Navbar/>
            <main className="w-3/4 mx-auto p-2 max-sm:w-full">
                <NotaHoroscopo data={data} seccion={'zodiaco'} dataSection={dataSection}/>
            </main>
        </>)
}