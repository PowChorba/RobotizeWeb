import Home from "@/components/Home/Home";
import Navbar from "@/components/Navbar/Navbar";
import { getDolar, getNews, getNewsSection, getWeatherCity } from "./service/home.service";

export default async function App() {
  const data = await getNews('1')
  const dataDolar = await getDolar()
  let weatherCity = await getWeatherCity('Buenos Aires')
  weatherCity = weatherCity.actual_temp
  const dataPolitica = await getNewsSection('politica')
  const dataEconomia = await getNewsSection('economia')
  const dataDeportes = await getNewsSection('deportes')


  return (
    <>
      <Navbar />
      <main className="w-3/4 mx-auto p-2">
        <Home data={data} dataDolar={dataDolar} weatherCity={weatherCity} dataDeportes={dataDeportes} dataEconomia={dataEconomia} dataPolitica={dataPolitica}/>
      </main>
    </>
  );
}
