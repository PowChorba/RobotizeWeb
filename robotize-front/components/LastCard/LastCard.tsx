import Link from "next/link";

export default function LastCard(){
    return(
        <Link href='/seccion/title' className="p-2 gap-2 flex flex-col">
            <p>- 23 13</p>
            <h4 className="font-semibold">El oficialismo entro en estado de deliberacion, pero Massa se queda hasta el final del mandato en Economia</h4>
            {/* <h4 className="font-semibold te">El oficialismo entro en estado de deliberacion, pero Massa se queda hasta el final del mandato en Economia</h4> */}
        </Link>)
}