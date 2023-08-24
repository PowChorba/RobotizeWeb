import axios from 'axios'

export const getNews = async (page:string) => {
    try {
        const apiData = await axios.get('http://localhost:3001/news/1')
        return apiData.data
    } catch (error) {
        console.log(error)
    }
}

export const getDolar = async () => {
    try {
        const apiData = await axios.get('http://localhost:3001/dolar')
        return apiData.data
    } catch (error) {
        console.log(error)
    }
}

export const getWeatherCity = async (city: string) => {
    try {
        const apiData = await axios.get(`http://localhost:3001/weather/${city}`)
        return apiData.data         
    } catch (error) {
        console.log(error)
    }
}

export const getNewsSection = async (section: string) => {
    try {
        const apiData = await axios.get(`http://localhost:3001/news/section/${section}/1`)
        return apiData.data
    } catch (error) {
        console.log(error)
    }
}