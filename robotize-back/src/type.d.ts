export interface CreateNew {
  title: string;
  subtitle: string;
  content: string;
  img: string;
  section: string;
  date: string;
  keytitle:string
  pretitle: string
  tags: string[]
  publico: boolean
}

export interface CreateDolar {
    name: string
    buy:string
    sell:string
}

export interface NewsSectionModel {
  section: string
  page: string
}

export interface WeatherSchema {
  city: string
  description: string
  actual_temp: string
  min_temp: string
  max_temp: string
  icon: string
}

export interface HoroscopoModel {
  name: string
  icon: string
  title: string
  content: string
}

export interface CounterModel {
  counter: number
  name: string
}

export interface NewsUpdatedModel {
  _id: string
  title: string;
  summary: string;
  content: string;
  img: string;
  section: string;
  date: string;
  tags: string[]
}

export interface CreateSuscriber {
  email: string
  fullName: string
}

