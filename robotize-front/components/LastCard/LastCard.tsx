import Link from "next/link";
import { CardTitleRight } from "../PersonalComponent/title";

interface Props {
    _id: string
    section: string
    title: string
    date: string
}


export default function LastCard({_id,section,title,date}: Props){
    const splitDate = date.split(' ')
    
    return(
        <Link href={`/${section}/${_id}`} className="p-2 gap-2 flex flex-col">
            <p className="text-sm">{splitDate[5]}</p>
            <CardTitleRight title={title} keytitle={''}/>
        </Link>)
}