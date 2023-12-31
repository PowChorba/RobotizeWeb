import Navbar from "@/components/Navbar/Navbar";
import Seccion from "@/components/Seccion/Seccion";
import { getDolar } from "../home/service/home.service";
import { getSectionNotes, getWeather } from "./service/section.service";

export default async function SecctionApp({params}: {params: {seccion: string}}){
    const dataDolar = await getDolar()
    const dataWeather = await getWeather()
    const dataSection = await getSectionNotes(params.seccion)


    return(
        <>
            <Navbar/>
            <main className="w-3/4 mx-auto p-2 max-sm:w-full">
                <Seccion seccion={params.seccion} dataDolar={dataDolar} dataSection={dataSection} dataWeather={dataWeather}/>
            </main>
        </>)
}