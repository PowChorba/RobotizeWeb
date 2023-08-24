import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import NotaCompleta from "@/components/NotaCompleta/NotaCompleta";
import { getArticle } from "./service/article.service";
import { getSectionNotes } from "../service/section.service";


export default async function NotaApp({params}:any){
    const data = await getArticle(params.title)
    const dataSection = await getSectionNotes(params.seccion)

    return(
        <>
            <Navbar/>
            <main className="w-3/4 mx-auto p-2">
            <NotaCompleta data={data} seccion={params.seccion} dataSection={dataSection}/>

            </main>
        </>)
}