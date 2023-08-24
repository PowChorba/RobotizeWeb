import axios from 'axios'

export const getSectionNotes = async (section: string) => {
    try {
        const apiData = await axios.get(`http://localhost:3001/news/${section}/1`)
        return apiData.data
    } catch (error) {
        console.log(error)
    }
}

export const getWeather = async () => {
    try {
        const apiData = await axios.get('http://localhost:3001/weather')
        return apiData.data         
    } catch (error) {
        console.log(error)
    }
}