import { DolarModel, NewModel, WeatherModel } from "@/type";
import BigCard from "../Seccion/BigCard/BigCard";
import BigDolar from "../Seccion/BigDolar/BigDolar";
import Weather from "../Seccion/Weather/Weather";
import BigHoroscopo from "../Seccion/BigHoroscopo/BigHoroscopo";

interface Props {
  dataDolar: DolarModel[];
  dataWeather: WeatherModel[];
  firstTwo: NewModel[];
  seccion: string;
}

export const RenderSection = ({seccion,dataDolar,firstTwo,dataWeather,}: Props) => {
  if (seccion.toLowerCase() === "economia") {
    return (
      <>
        <BigDolar dataDolar={dataDolar} />
        <article className="grid grid-cols-2 gap-10 border-b-2 py-4 max-sm:grid-cols-1">
          {firstTwo.map((e) => {
            return (
              <BigCard key={e._id} _id={e._id} section={e.section} img={e.img} title={e.title} date={e.date} keytitle={e.keytitle} pretitle={e.pretitle}/>
            );
          })}
        </article>
      </>
    );
  } else if (seccion.toLowerCase() === "clima") {
    return (
      <>
        <Weather dataWeather={dataWeather} />
        <article className="grid grid-cols-2 gap-10 border-b-2 py-4 max-sm:grid-cols-1">
          {firstTwo.map((e) => {
            return (
              <BigCard key={e._id} _id={e._id} section={e.section} img={e.img} title={e.title} date={e.date} pretitle={e.pretitle} keytitle={e.keytitle}/>
            );
          })}
        </article>
      </>
    );
  }else if(seccion.toLowerCase() === "horoscopo") {
    return (
      <>
        <BigHoroscopo />
        <article className="grid grid-cols-2 gap-10 border-b-2 py-4 max-sm:grid-cols-1">
          {firstTwo.map((e) => {
            return (
              <BigCard key={e._id} _id={e._id} section={e.section} img={e.img} title={e.title} date={e.date} pretitle={e.pretitle} keytitle={e.keytitle}/>
            );
          })}
        </article>
      </>
    );
  }
  else {
    return <article className="grid grid-cols-2 gap-10 border-b-2 py-4 max-sm:grid-cols-1">
      {firstTwo.map((e) => {
        return (
          <BigCard key={e._id} _id={e._id} section={e.section} img={e.img} title={e.title} date={e.date} keytitle={e.keytitle} pretitle={e.pretitle}/>
        );
      })}
    </article>;
  }
};
