import Navbar from "@/components/Navbar/Navbar"
import Search from "@/components/Search/Search"
import { getTagsNews } from "./service/tags.service"
import Tags from "@/components/Tags/Tags"
import Footer from "@/components/Footer/Footer"

export default async function TagsApp({params}: any) {
    const data = await getTagsNews(params.tag)

    return (
        <>
            <Navbar />
            <main className="w-1/2 mx-auto p-2 min-h-[70vh] max-sm:w-full">
                <Tags data={data}/>
            </main>
            <div className="w-3/4 mx-auto"><Footer/></div>
        </>)
}