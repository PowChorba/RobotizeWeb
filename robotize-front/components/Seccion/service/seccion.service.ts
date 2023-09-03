import { vMoreGames } from "@/type";
import axios from "axios";

export const getMoreNews = async (data: vMoreGames) => {
    console.log('Esta entrando aca')
    try {
        const apiData = await axios.get(`http://localhost:3001/news/${data.section}/${data.page}`)
        return apiData.data
    } catch (error) {
        console.log(error)
    }
}

export const getHoroscopo = async () => {
    try {
        const apiData = await axios.get('http://localhost:3001/horoscopo')
        return apiData.data
    } catch (error) {
        console.log(error)
    }
}