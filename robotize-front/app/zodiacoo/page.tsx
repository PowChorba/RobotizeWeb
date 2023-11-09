import Navbar from "@/components/Navbar/Navbar";
import { getSectionNotes } from "./service/section.service";
import HoroscopoSeccion from "@/components/Horoscopo/HoroscopoSeccion";
import { HoroscopoModel } from "@/type";
import { getHoroscopo } from "@/components/Seccion/service/seccion.service";

export default async function HoroscopoApp(){
    const dataSection = await getSectionNotes('zodiaco')
    const data: HoroscopoModel[] = await getHoroscopo()
    return(
        <>
            <Navbar/>
            <main className="w-3/4 mx-auto p-2 max-sm:w-full">
                <HoroscopoSeccion seccion='zodiaco' dataSection={dataSection} data={data}/>
            </main>
        </>)
}