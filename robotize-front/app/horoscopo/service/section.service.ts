import axios from 'axios'

export const getSectionNotes = async (section: string) => {
    try {
        const apiData = await axios.get(`${process.env.PETICION_BACK}/news/${section}/1`)
        return apiData.data
    } catch (error) {
        console.log(error)
    }
}

export const getWeather = async () => {
    try {
        const apiData = await axios.get(`${process.env.PETICION_BACK}/weather`)
        return apiData.data         
    } catch (error) {
        console.log(error)
    }
}