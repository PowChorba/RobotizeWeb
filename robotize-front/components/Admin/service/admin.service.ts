
import { NewModel } from "@/type"
import axios from "axios"


export const updateArticle = async (data: NewModel | {title:string, _id: string}) => {
    try {
        const apiData = await axios.patch(`${process.env.NEXT_PUBLIC_PETICION_BACK}/news/${data._id}`, data)
        return apiData.data
    } catch (error) {
        console.log(error)
    }
}

export const getAllAdmin = async (counter:string) => {
    try {
        const apiData = await axios.get(`${process.env.NEXT_PUBLIC_PETICION_BACK}/news/${counter}`)
        return apiData.data
    } catch (error) {
        console.log(error)
    }
}

export const deleteArticle = async (_id: string) => {
    try {
        const apiData = await axios.delete(`${process.env.NEXT_PUBLIC_PETICION_BACK}/news/${_id}`)
        return apiData.data
    } catch (error) {
        console.log(error)
    }
}