
import { CreateArticle, NewModel } from "@/type"
import axios from "axios"


export const updateArticle = async (data: NewModel | {title:string, _id: string}) => {
    try {
        const apiData = await axios.patch(`${process.env.NEXT_PUBLIC_PETICION_BACK}/news/${data._id}`, data)
        return apiData.data
    } catch (error) {
        console.log(error)
    }
}

export const getAllAdmin = async (counter:string) => {
    try {
        const apiData = await axios.get(`${process.env.NEXT_PUBLIC_PETICION_BACK}/news/${counter}`)
        return apiData.data
    } catch (error) {
        console.log(error)
    }
}

export const deleteArticle = async (_id: string) => {
    try {
        const apiData = await axios.delete(`${process.env.NEXT_PUBLIC_PETICION_BACK}/news/${_id}`)
        return apiData.data
    } catch (error) {
        console.log(error)
    }
}

export const postArticle = async (data: CreateArticle) => {
    try {
        const apiData = await axios.post(`${process.env.NEXT_PUBLIC_PETICION_BACK}/news`, data)
        return apiData.data
    } catch (error) {
        console.log(error)
    }
}

export const changeSpaces = (content: string) => {
    return content.replace('\n', '<br/><br/>')
}

export const fechaNow = () => {
    const fechaActual = new Date();
    // Lista de meses en español
    const meses = [
        "enero", "febrero", "marzo", "abril", "mayo", "junio",
        "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
    ];
    // Convertir la fecha al formato deseado
    const dia = fechaActual.getDate();
    const mes = meses[fechaActual.getMonth()];
    const año = fechaActual.getFullYear();
    const hora = fechaActual.getHours().toString().padStart(2, '0');
    const minuto = fechaActual.getMinutes().toString().padStart(2, '0');
    const fechaFormateada = dia + " de " + mes + " de " + año + " " + hora + ":" + minuto;
    return fechaFormateada;
}