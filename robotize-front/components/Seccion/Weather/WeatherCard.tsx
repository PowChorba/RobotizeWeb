import Image from "next/image"

interface Props {
    city: string
    description: string
    actual_temp: string
    min_temp: string
    max_temp: string
    icon: string
}

export default function WeatherCard({city,description,actual_temp,min_temp,max_temp,icon}:Props){
    return<div className="p-4 border-2">
        {/* <div> */}
            <p className="font-bold">{city}</p>
            <p className="text-sm">{description}</p>
        {/* </div> */}
        <div className="flex justify-center items-center">
            <img src={icon} alt={description} width={75} height={75}/>
            <span className="text-2xl font-bold">{actual_temp}</span>
        </div>
        <div className="flex justify-center items-center gap-2">
            <p>Min: <span className="text-[#126fff] font-bold">{min_temp}</span> </p>
            <p>Max: <span className="text-[#f44336] font-bold">{max_temp}</span></p>
        </div>
    </div>
}