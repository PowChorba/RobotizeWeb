import axios from 'axios'


export const getAllAdmin = async (counter:string) => {
    try {
        const apiData = await axios.get(`${process.env.PETICION_BACK}/news/${counter}`)
        return apiData.data
    } catch (error) {
        console.log(error)
    }
}