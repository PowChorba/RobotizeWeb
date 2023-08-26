import Image from "next/image";
import Link from "next/link";

interface Props {
    img: string
    title: string
    date: string
    keytitle: string
    pretitle: string
    _id: string
    section: string
}

export default function BigCard({img,title,date, keytitle, pretitle, section,_id}: Props){
    let titleUrl = title?.replace(/ /g, "-")
    
    return(
        <Link href={`/${section}/${_id}`}>
            <Image src={img} alt={title} width={200} height={200} className="w-full"/>
            <h2 className="font-bold text-2xl lg:text-lg py-2"><span className="text-[#441eae]">{keytitle}</span> {pretitle}</h2>
            <span className="text-sm">Por <strong>Robotize</strong></span>
            <p className="text-[#5a5a5a] py-2 text-xs">{date}</p>
        </Link>)
}