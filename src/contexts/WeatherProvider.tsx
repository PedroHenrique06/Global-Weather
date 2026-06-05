import { useEffect, useState } from "react";
import type { IWeatherCardInfo } from "../interfaces/weather";
import { getWeatherByCityName } from "../services/weatherService";
import { WeatherContext } from "./WeatherContext";

interface IWeatherProviderProps {
    children: React.ReactNode;
}

export function WeatherProvider({ children }:IWeatherProviderProps) {
  const [weatherList, setweatherList] = useState<IWeatherCardInfo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  
    useEffect(() => {
      async function loadWeather() {
        const listOfCities:string[] = ['London', 'Tokyo', 'Paris', 'Mossoró'];
      
        try {
          setLoading(true);
          setError(null);
          const responses = await Promise.all(listOfCities.map((cityName) => getWeatherByCityName(cityName)));
          setweatherList(responses);
        }
        catch {
          setError('Erro ao carregar informações climáticas.');
        }
        finally {
          setLoading(false);
        }
    }
          
    loadWeather();
    
  }, []); 

    return(
      <WeatherContext.Provider value={{ weatherList, loading, error }}>
          { children }
      </WeatherContext.Provider>

    );
}