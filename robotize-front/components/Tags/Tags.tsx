'use client'

import { useState } from "react"
import { NewModel } from "@/type"
import NotFound from "../NotFound/NotFound"
import SearchCard from "../Search/SearchCard/SearchCard"
import Footer from "../Footer/Footer"

interface Props {
    data: NewModel[]
}

export default function Tags({data}: Props){
    const [notFound,setNotFound] = useState<string>('No encontramos informacion relacionado a ese tag')
    console.log(data.length, 'asdasdasda')
    return(<>
        {
            // data[0]?.title !== 'No hay nada con ese tag'
            data.length !== 0
            ?   <article className="flex flex-col gap-2 py-10">
                    {
                        data && data?.map(e => {
                            return <SearchCard key={e._id} _id={e._id} keytitle={e.keytitle} pretitle={e.pretitle} img={e.img} section={e.section}/>
                        })
                    }
                </article>
            :   <NotFound notFound={notFound}/>
        }
    </>)
}