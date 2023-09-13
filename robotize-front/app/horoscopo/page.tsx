import Navbar from "@/components/Navbar/Navbar";
import Seccion from "@/components/Seccion/Seccion";
import { getDolar } from "../home/service/home.service";
import { getSectionNotes, getWeather } from "./service/section.service";
import HoroscopoSeccion from "@/components/Horoscopo/HoroscopoSeccion";

export default async function HoroscopoApp(){
    const dataSection = await getSectionNotes('horoscopo')


    return(
        <>
            <Navbar/>
            <main className="w-3/4 mx-auto p-2 max-sm:w-full">
                <HoroscopoSeccion seccion='horoscopo' dataSection={dataSection}/>
            </main>
        </>)
}