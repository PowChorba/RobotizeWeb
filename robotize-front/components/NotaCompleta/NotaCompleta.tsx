import Image from "next/image";
import Link from "next/link";
import RelacionCard from "./RelacionCard/RelacionCard";
import Footer from "../Footer/Footer";
import { NewModel } from "@/type";
import Robotize from '../../assets/robotizeicono.jpeg'

interface Props {
    data: NewModel
    dataSection: NewModel[]
    seccion: string
}

export default function NotaCompleta({data, seccion, dataSection}: Props){
    const contentComplete = data.content.replace(/ESPACIO/g, '<br><br>')
    // Primer letra en mayuscula
    seccion = seccion[0].toUpperCase() + seccion.substring(1)

    const filterNota = dataSection.filter(e => e.title !== data.title)

    return(
        <section>
            <article className="py-4 flex flex-col gap-4">
                <p className="pb-6 text-lg text-left"><Link href='/'>Robotize</Link> {'>'} <Link href={`/${seccion.toLowerCase()}`}>{seccion}</Link></p>
                {/* Titulo */}
                <h2 className="text-4xl font-bold text-center">{data.title}</h2>
                {/* Bajada */}
                <p className="text-lg text-center">{data.subtitle}</p>
                <p className="text-[#5a5a5a]">{data.date}</p>
                <div className="flex gap-2 items-center">
                    <Image src={Robotize} alt='Icono' width={50} height={50} className="rounded-[50%]"/>
                <span>Por <strong>Robotize</strong></span>
                </div>
                <Image src={data.img} alt="asd" width={200} height={200} className="w-1/2 py-2 mx-auto"/>
                <p className="w-2/3 mx-auto text-left" dangerouslySetInnerHTML={{ __html: contentComplete }}></p>
                <br /><br />
            </article>
                <h4 className="font-semibold text-lg">Te puede interesar</h4>
            <article className="border-t-2 grid grid-cols-5 text-center gap-6 border-b-2 border-[#441eae] py-4">
                {
                    filterNota.map(e => {
                        return <RelacionCard key={e._id} img={e.img} keytitle={e.keytitle} pretitle={e.pretitle} section={e.section} _id={e._id}/>
                    })
                }

                
            </article>
            <Footer/>
        </section>)
}