'use client'

import { useState } from "react"
import { getSearchNews } from "./service/search.service"
import { NewModel } from "@/type"

export default function Search(){
    const [inputText, setInputText] = useState('')
    const [articles, setArticles] = useState<NewModel[]>([])
    const [notFound,setNotFound] = useState<string>('')

    const requestData = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            const data = await getSearchNews(inputText)
            console.log(data)
            if(data[0].title === 'No hay mas data'){
                setNotFound('No encontramos informacion relacionado a ese texto')
            }else {
                setArticles(data)
            }
        } catch (error) {
            console.log(error)
        }
    }
    
    console.log(notFound)
    console.log(articles,'News')
    return(<>
        <form onSubmit={(e) => requestData(e)}>
            <input name='inputText' value={inputText} type="text" placeholder="Busca la informacion que necesites" onChange={(e) => setInputText(e.target.value)}/>
            <button>Search</button>
        </form>
        
    </>)
}