import Navbar from "@/components/Navbar/Navbar";
import { getSectionNotes } from "./service/section.service";
import HoroscopoSeccion from "@/components/Horoscopo/HoroscopoSeccion";

export default async function HoroscopoApp(){
    const dataSection = await getSectionNotes('zodiaco')

    return(
        <>
            <Navbar/>
            <main className="w-3/4 mx-auto p-2 max-sm:w-full">
                <HoroscopoSeccion seccion='zodiaco' dataSection={dataSection}/>
            </main>
        </>)
}