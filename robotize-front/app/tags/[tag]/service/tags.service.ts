import axios from "axios"

export const getTagsNews = async (tag:string) => {
    try {
        const apiData = await axios.get(`${process.env.PETICION_BACK}/tags/${tag}`)
        return apiData.data
    } catch (error) {
        console.log(error)
    }
}