import { WeatherModel } from "@/type"
import WeatherCard from "./WeatherCard"

interface Props{
    dataWeather: WeatherModel[]
}

export default function Weather({dataWeather}: Props){

    return(<article className="grid grid-cols-6 lg:grid-cols-4 gap-6">
        {
            dataWeather.map(e =>{
                return <WeatherCard key={e._id} city={e.city} description={e.description} actual_temp={e.actual_temp} min_temp={e.min_temp} max_temp={e.max_temp} icon={e.icon} />
            })
        }
    </article>)
}