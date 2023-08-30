import { CardTitle } from "@/components/PersonalComponent/title"
import Image from "next/image"
import Link from "next/link"

interface Props {
    _id: string
    img: string
    keytitle: string
    pretitle:string
    section: string
}

export default function SearchCard({_id,img,keytitle,pretitle, section}: Props){
    return(
        <Link href={`/${section}/${_id}`} className="border-2 rounded-lg flex justify-left items-center">
            <Image src={img} alt={keytitle} width={150} height={150} className="mr-4"/>
            <CardTitle title={pretitle} keytitle={keytitle} />
            {/* <span>{section.toLocaleUpperCase()}</span> */}
        </Link>)
}