import Navbar from "@/components/Navbar/Navbar";
import NotaCompleta from "@/components/NotaCompleta/NotaCompleta";
import { getArticle } from "./service/article.service";
import { getSectionNotes } from "../service/section.service";
import { Metadata } from 'next'

type Props = {
    params: { title: string,seccion: string }
    searchParams: { [key: string]: string | string[] | undefined }
  }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
      const dataTitle = await getArticle(params.title,params.seccion)
      return {
          title: dataTitle.title,
        }
  }


export default async function NotaApp({params}:Props){
    const data = await getArticle(params.title,params.seccion)
    const dataSection = await getSectionNotes(params.seccion)

    return(
        <>  
            <head>
                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:site" content="@AutoDolar"/> 
                <meta name="twitter:title" content={data.title}/>
                <meta name="twitter:description" content={data.subtitle}/>
                <meta name="twitter:image" content={data.img}/>
            </head>
            <Navbar/>
            <main className="w-full mx-auto p-2 max-sm:w-full">
                <NotaCompleta data={data} seccion={params.seccion} dataSection={dataSection}/>
            </main>
        </>)
}
