import axios from 'axios'

export const getNews =  async (page:string) => {
    try {
        const apiData = await axios.get(`${process.env.PETICION_BACK}/news/1`)
        return apiData.data
    } catch (error) {
        console.log(error)
    }
}

export const getDolar = async () => {
    try {
        const apiData = await axios.get(`${process.env.NEXT_PUBLIC_PETICION_BACK}/dolar`)
        return apiData.data
    } catch (error) {
        console.log(error)
    }
}

export const getWeatherCity = async (city: string) => {
    try {
        const apiData = await axios.get(`${process.env.PETICION_BACK}/weather/${city}`)
        return apiData.data         
    } catch (error) {
        console.log(error)
    }
}

export const getNewsSection = async (section: string) => {
    try {
        const apiData = await axios.get(`${process.env.PETICION_BACK}/news/section/${section}/1`)
        return apiData.data
    } catch (error) {
        console.log(error)
    }
}

export const getNewsCounter = async () => {
    try {
        const apiData = await axios.get(`${process.env.NEXT_PUBLIC_PETICION_BACK}/counter`)
        return apiData.data
    } catch (error) {
        console.log(error)
    }
}