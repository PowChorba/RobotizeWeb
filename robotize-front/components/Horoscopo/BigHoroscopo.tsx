import { HoroscopoModel } from "@/type"
import { getHoroscopo } from "../Seccion/service/seccion.service"
import CardHoroscopo from "./CardHorscopo"



export default async function BigHoroscopo(){
    const data: HoroscopoModel[] = await getHoroscopo()
    
    return(
        <article className="grid grid-cols-6 gap-4">
            {
                data.map(e => {
                    return <CardHoroscopo key={e._id} name={e.name} icon={e.icon} section='horoscopo' _id={e._id}/>
                })
            }
        </article>)
}