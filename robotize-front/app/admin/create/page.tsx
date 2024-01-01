import AdminCreate from "@/components/Admin/Create/AdminCreate"
import AdminNavbar from "@/components/Navbar/AdminNavbar"
import Navbar from "@/components/Navbar/Navbar"

export default async function ArticleAdminApp(){
    

    return (
    <>
        <AdminNavbar/>
        <main className="w-3/4 mx-auto p-2 max-sm:w-full">
            <AdminCreate/>
        </main>
    </>)
}