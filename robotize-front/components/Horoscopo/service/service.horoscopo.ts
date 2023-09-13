

export const getDay = () => {
    const date = new Date()
    const day = date.getDate();
    const monthNumber = date.getMonth()
    const month = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    const weekDay = ['Domingo','Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes','Sabado']

    return [day,month[monthNumber], weekDay[date.getDay()]]
}