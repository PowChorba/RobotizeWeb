import { NewModel } from "@/type";
import NewsCard from "../../NewsCard/NewsCard";
import Link from "next/link";

interface Props {
    economia: NewModel[]
}

export default function SectionEconomia({economia}: Props){
    return(
        <>
            <Link href='/economia' className="font-semibold text-lg text-[#441eae]">ECONOMIA {'>'}</Link>
            <article className="grid grid-cols-5 lg:grid-cols-4 gap-4 py-6">
            {
                economia.map(e => {
                    return <NewsCard key={e._id} _id={e._id} title={e.title} keytitle={e.keytitle} pretitle={e.pretitle} subtitle={e.subtitle} content={e.content} img={e.img} date={e.date} section={e.section}/>
                })
            }

            </article>
        </>)
}