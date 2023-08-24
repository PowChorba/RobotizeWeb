import Navbar from "@/components/Navbar/Navbar";
import Seccion from "@/components/Seccion/Seccion";
import { getDolar } from "../service/home.service";
import { getSectionNotes, getWeather } from "./service/section.service";

export default async function SecctionApp({params}: any){
    const dataDolar = await getDolar()
    const dataWeather = await getWeather()
    const dataSection = await getSectionNotes(params.seccion)


    return(
        <>
            <Navbar/>
            <main className="w-3/4 mx-auto p-2">
                
            <Seccion seccion={params.seccion} dataDolar={dataDolar} dataSection={dataSection} dataWeather={dataWeather}/>
            </main>
        </>)
}