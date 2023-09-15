import Link from "next/link";

interface Props {
    _id: string
    section: string
    title: string
}


export default function LastCard({_id,section,title}: Props){
    return(
        <Link href={`/${section}/${_id}`} className="p-2 gap-2 flex flex-col">
            <p>- 23 13</p>
            <h4 className="font-semibold">{title}</h4>
            {/* <h4 className="font-semibold te">El oficialismo entro en estado de deliberacion, pero Massa se queda hasta el final del mandato en Economia</h4> */}
        </Link>)
}