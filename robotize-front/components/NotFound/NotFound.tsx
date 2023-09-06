
interface Props{
    notFound: string
}

export default function NotFound({notFound}: Props){
    return(
        <div className="py-4 text-center h-[60vh] flex justify-center items-center">
            <h4 className="text-[#f16565]">{notFound}</h4>
        </div>)
}