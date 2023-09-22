// 'use client'
import Home from "@/components/Home/Home";
import Navbar from "@/components/Navbar/Navbar";
import { getDolar, getNews, getNewsCounter, getNewsSection, getWeatherCity } from "./service/home.service";
import { DolarModel, NewModel } from "@/type";

export const revalidate = 200;

export default async function HomeApp() {
  let data = await getNews('1')
  data = data.filter((e:NewModel) => e.section !== 'sociedad')
  let titleData = data.map((e:NewModel) => e.title).splice(0,6)
  // titleData = titleData.splice(0,6)
  const dataDolar = await getDolar()
  let weatherCity = await getWeatherCity('Buenos Aires')
  weatherCity = weatherCity.actual_temp
  // Filtro las que se encuentren dentro de las primeras 6 que se muestran
  let dataPolitica = await getNewsSection('politica')
  dataPolitica = dataPolitica.filter((e:NewModel) => !titleData.includes(e.title))
  // Filtro las que se encuentren dentro de las primeras 6 que se muestran
  let dataEconomia = await getNewsSection('economia')
  dataEconomia = dataEconomia.filter((e:NewModel) => !titleData.includes(e.title))
  // Filtro las que se encuentren dentro de las primeras 6 que se muestran
  let dataDeportes = await getNewsSection('deportes')
  dataDeportes = dataDeportes.filter((e:NewModel) => !titleData.includes(e.title))
  // Traigo las de sociedad que van a ir al costado
  let dataSociedad = await getNewsSection('sociedad')

  // Counter de todas las noticias que hay en la base de datos
  const counterNews = await getNewsCounter()

  return (
    <>
      <Navbar />
      <main className="w-3/4 mx-auto p-2 max-sm:w-full">
        <Home data={data} dataDolar={dataDolar} weatherCity={weatherCity} dataDeportes={dataDeportes} dataEconomia={dataEconomia} dataPolitica={dataPolitica} dataSociedad={dataSociedad} counterNews={counterNews[0]}/>
      </main>
    </>
  );
}




