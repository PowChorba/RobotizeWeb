import { vMoreArticles } from "@/type";
import axios from "axios";

export const getMoreNews = async (data: vMoreArticles) => {
    try {
        const apiData = await axios.get(`${process.env.NEXT_PUBLIC_PETICION_BACK}/news/${data.section}/${data.page}`)
        return apiData.data
    } catch (error) {
        console.log(error)
    }
}

export const getHoroscopo = async () => {
    try {
        const apiData = await axios.get(`${process.env.NEXT_PUBLIC_PETICION_BACK}/horoscopo`)
        return apiData.data
    } catch (error) {
        console.log(error)
    }
}