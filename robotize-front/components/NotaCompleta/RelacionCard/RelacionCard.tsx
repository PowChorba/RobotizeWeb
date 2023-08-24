import { CardTitle } from "@/components/PersonalComponent/title";
import Image from "next/image";
import Link from "next/link";

interface Props {
    img: string
    section: string
    _id: string
    keytitle: string
    pretitle: string
}

export default function RelacionCard({img, section,_id, keytitle, pretitle}: Props){
    return(
        <Link href={`/${section}/${_id}`}>
            <Image src={img} alt={keytitle} width={100} height={100} className="w-full py-2"/>
            <CardTitle title={pretitle} keytitle={keytitle}/>
        </Link>)
}