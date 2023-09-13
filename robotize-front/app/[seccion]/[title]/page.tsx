import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import NotaCompleta from "@/components/NotaCompleta/NotaCompleta";
import { getArticle } from "./service/article.service";
import { getSectionNotes } from "../service/section.service";
import NotFound from "@/components/NotFound/NotFound";


export default async function NotaApp({params}:any){
    const data = await getArticle(params.title,params.seccion)
    const dataSection = await getSectionNotes(params.seccion)

    return(
        <>
            <Navbar/>
            <main className="w-3/4 mx-auto p-2 max-sm:w-full">
                <NotaCompleta data={data} seccion={params.seccion} dataSection={dataSection}/>
            </main>
        </>)
}