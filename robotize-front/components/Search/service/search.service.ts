import axios from 'axios'

export const getSearchNews = async (keyword: string) => {
    try {
        const apiData = await axios.get(`http://localhost:3001/search/${keyword}`)
        return apiData.data
    } catch (error) {
        console.log(error)
    }
}