'use client'
import { HoroscopoModel, NewModel } from "@/type"
import Image from "next/image"
import Robotize from '../../assets/robotizeicono.jpeg'
import { getDay } from "./service/service.horoscopo"
import RelacionCard from "@/components/NotaCompleta/RelacionCard/RelacionCard"
import Link from "next/link"
import Footer from "@/components/Footer/Footer"
import { useRouter } from "next/navigation"

interface Props {
    data: HoroscopoModel
    dataSection: NewModel[]
    seccion: string
}

export default function NotaHoroscopo({data, seccion, dataSection}: Props){
    // const img = data.img?.replace('cambiar', '')
    const date = getDay()
    const router = useRouter()
    // Primer letra en mayuscula
    seccion = seccion[0].toUpperCase() + seccion.substring(1)

    return(
        <section>
            <article className="py-4 flex flex-col gap-4">
                <p className="pb-6 text-lg text-left"><Link href='/'>Robotize</Link> {'>'} <span onClick={() => router.push(`/${seccion.toLowerCase()}`)} className="cursor-pointer">Horoscopo</span>{' > '}Semanal</p>
                <h2 className="text-4xl lg:text-2xl font-bold text-center max-sm:text-2xl">Horóscopo de {data.name} de la semana</h2>
                <p className="text-lg lg:text-sm text-center max-sm:text-sm">No te pierdas lo que te deparan los astros para esta semana, según tu signo. Conocé el horóscopo de la semana y todos los detalles.</p>
                <div className="flex gap-2 items-center">
                    <Image src={Robotize} alt='Icono' width={50} height={50} className="rounded-[50%]"/>
                    <span>Por <strong>Robotize</strong></span>
                </div>
                <p className="w-full mx-auto text-left" dangerouslySetInnerHTML={{ __html: data.content }}></p>
            </article>
            <h4 className="font-semibold text-lg">Te puede interesar</h4>
            <article className="border-t-2 grid grid-cols-5 text-center gap-6 border-b-2 border-[#441eae] py-4 max-sm:grid-cols-3">
                {
                    dataSection.map(e => {
                        return <RelacionCard key={e._id} img={e.img} keytitle={e.keytitle} pretitle={e.pretitle} section={e.section} _id={e._id}/>
                    })
                }
            </article>
            <Footer/>   
        </section>
        )
}