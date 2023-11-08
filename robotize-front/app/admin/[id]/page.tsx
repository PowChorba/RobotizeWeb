import Navbar from "@/components/Navbar/Navbar";

import AdminFullArticle from "@/components/Admin/helpers/AdminArticle";
import { getArticle } from "@/app/[seccion]/[title]/service/article.service";

export default async function ArticleAdminApp({params}: any){
    const data = await getArticle(params.id, '')

    return (
    <>
        <Navbar/>
        <main className="w-3/4 mx-auto p-2 max-sm:w-full">
            <AdminFullArticle data={data} seccion={'Aeropuerto'}/>
        </main>
    </>)
}