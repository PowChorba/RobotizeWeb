import Image from "next/image";
import Link from "next/link";
import { CardBajada, CardTitle } from "../PersonalComponent/title";

interface Props {
    _id: string
    title:string
    subtitle:string
    content: string
    img: string
    date: string
    section:string
    keytitle: string
    pretitle:string
}

export default function NewsCard({_id,title,subtitle,img,date,content,section, keytitle, pretitle}: Props){
    let titleUrl = title?.replace(/ /g, "-")

    return(
        <Link href={`/${section}/${_id}`} className="text-center">
            {/* Titulo */}
            <Image src={img} alt="asd" width={250} height={250} className="w-full p-2 min-h-[250px] lg:min-h-[150px]"/>
            <CardTitle title={pretitle} keytitle={keytitle}/>
            {/* Bajada */}
            {/* <CardBajada subtitle={subtitle} /> */}
            <p className="text-left p-2 text-sm">Por <strong>Robotize</strong></p>
        </Link>)
}