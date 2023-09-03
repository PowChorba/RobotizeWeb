import axios from 'axios'

export const getArticle = async (title:string, section:string) => {
    let titleUrl = title.replace(/-/g, ' ')
    titleUrl = titleUrl.replace(/%E2%80%9C/g, '“')
    titleUrl = titleUrl.replace(/%E2%80%9D/g, '“')
    titleUrl = titleUrl.replace(/%C3%B1/g, 'ñ')
    titleUrl = titleUrl.replace(/%3A/g, ':')
    try {
        if(section === 'horoscopo'){
            const apiData = await axios.get(`${process.env.PETICION_BACK}/horoscopo/${title}`)
            return apiData.data
        }else{
            const apiData = await axios.get(`${process.env.PETICION_BACK}/news/article/${titleUrl}`)
            return apiData.data
        }
    } catch (error) {
        console.log(error)
    }
}