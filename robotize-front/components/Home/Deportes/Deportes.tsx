import { NewModel } from "@/type";
import NewsCard from "../../NewsCard/NewsCard";
import Link from "next/link";

interface Props {
    deportes: NewModel[]
}

export default function SectionDeportes({deportes}: Props){
    return(
        <>
            <Link href='/deportes' className="font-semibold text-lg text-[#441eae]">DEPORTES {'>'}</Link>
            <article className="grid grid-cols-5 lg:grid-cols-4 gap-4 py-4 max-sm:grid-cols-1">
            {
                deportes.map(e => {
                    return <NewsCard key={e._id} _id={e._id} title={e.title} keytitle={e.keytitle} pretitle={e.pretitle} subtitle={e.subtitle} content={e.content} img={e.img} date={e.date} section={e.section}/>
                })
            }

            </article>
        </>)
}