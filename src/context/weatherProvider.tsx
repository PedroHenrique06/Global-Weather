import { useEffect, useState } from "react";
import type { IWeatherResponse } from "../interfaces/weather";
import { getWeatherByCityName } from "../services/weatherService";
import { WeatherContext } from "./WeatherContext";

interface IWeatherProviderProps {
    children: React.ReactNode;
}

export function WeatherProvider({ children }:IWeatherProviderProps) {
    const [weatherList, setweatherList] = useState<IWeatherResponse[]>([]);
    
      useEffect(() => {
        async function loadWeather() {
          const listOfCities:string[] = ['London', 'Tokyo', 'Paris', 'Roma'];
        
          const responses = await Promise.all(
            listOfCities.map((cityName) => getWeatherByCityName(cityName))
          );
        
          setweatherList(responses);
        }
    
        loadWeather();
      }, []); 

      return(
        <WeatherContext.Provider value={{ weatherList }}>
            { children }
        </WeatherContext.Provider>

      );
}