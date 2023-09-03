import Home from "@/components/Home/Home";
import Navbar from "@/components/Navbar/Navbar";
import { getDolar, getNews, getNewsSection, getWeatherCity } from "./service/home.service";
import { NewModel } from "@/type";

export default async function App() {
  console.log(process.env.PETICION_BACK, 'asdasdasdadas')
  const data = await getNews('1')
  const titleData = data.map((e:NewModel) => e.title)
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


  return (
    <>
      <Navbar />
      <main className="w-3/4 mx-auto p-2 max-sm:w-full">
        <Home data={data} dataDolar={dataDolar} weatherCity={weatherCity} dataDeportes={dataDeportes} dataEconomia={dataEconomia} dataPolitica={dataPolitica}/>
      </main>
    </>
  );
}
