export interface NewModel {
  _id: string;
  title: string;
  keytitle: string;
  pretitle: string;
  subtitle: string;
  content: string;
  img: string;
  date: string;
  section: string;
}

export interface DolarModel {
  _id: string;
  name: string;
  buy: string;
  sell: string;
}

export interface WeatherModel {
  _id: string;
  city: string;
  description: string;
  actual_temp: string;
  min_temp: string;
  max_temp: string;
  icon: string;
}


export interface vMoreArticles {
  section: string
  page: string
}

export interface HoroscopoModel {
  _id: string
  name: string
  img: string
  icon: string
  personal: string
  travel: string
  money: string
  career: string
  health: string
  emotions: string
}