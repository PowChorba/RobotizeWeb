import { NewModel } from "@/type";
import NewsCard from "../../NewsCard/NewsCard";
import Link from "next/link";

interface Props {
    politica: NewModel[]
}

export default function SectionPolitica({politica}: Props){
    return(
        <>
            <Link href='/politica' className="font-semibold text-lg text-[#441eae]">POLÍTICA {'>'}</Link>
            <article className="grid grid-cols-5 lg:grid-cols-4 gap-4 py-6 max-sm:grid-cols-1">
                {
                    politica.map(e => {
                        return <NewsCard key={e._id} _id={e._id} title={e.title} keytitle={e.keytitle} pretitle={e.pretitle} subtitle={e.subtitle} content={e.content} img={e.img} date={e.date} section={e.section}/>
                    })
                }
            </article>
        </>)
}