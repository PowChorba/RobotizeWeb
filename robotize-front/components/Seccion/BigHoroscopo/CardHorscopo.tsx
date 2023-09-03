import Image from "next/image";
import Link from "next/link";

interface Props {
    name: string
    icon: string
    section: string
    _id: string
}


export default function CardHoroscopo({name,icon,section,_id}: Props){
    const iconReplace = icon.replace('cambiar', '')

    return (
        <Link href={`/${section}/${name}`} className="flex justify-center items-center border-2 gap-4 rounded-lg">
            <Image src={iconReplace} alt={name} width={50} height={50}/> 
            <h3>{name}</h3>
        </Link>)
}