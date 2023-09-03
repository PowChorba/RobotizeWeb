import axios from 'axios'

export const getSearchNews = async (keyword: string) => {
    try {
        const apiData = await axios.get(`${process.env.PETICION_BACK}/search/${keyword}`)
        return apiData.data
    } catch (error) {
        console.log(error)
    }
}