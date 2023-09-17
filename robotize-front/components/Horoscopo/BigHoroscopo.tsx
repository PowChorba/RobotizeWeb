import { HoroscopoModel } from "@/type"
import { getHoroscopo } from "../Seccion/service/seccion.service"
import CardHoroscopo from "./CardHorscopo"


interface Props {
    data: HoroscopoModel[]
}

export default function BigHoroscopo({data}: Props){
    
    return(
        <article className="grid grid-cols-6 gap-4">
            {
                data.map(e => {
                    return <CardHoroscopo key={e._id} name={e.name} icon={e.icon} section='horoscopo' _id={e._id}/>
                })
            }
        </article>)
}