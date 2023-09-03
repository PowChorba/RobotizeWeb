import { vMoreGames } from "@/type";
import axios from "axios";

export const getMoreNews = async (data: vMoreGames) => {
    try {
        const apiData = await axios.get(`${process.env.PETICION_BACK}/news/${data.section}/${data.page}`)
        return apiData.data
    } catch (error) {
        console.log(error)
    }
}

export const getHoroscopo = async () => {
    try {
        const apiData = await axios.get(`${process.env.PETICION_BACK}/horoscopo`)
        return apiData.data
    } catch (error) {
        console.log(error)
    }
}