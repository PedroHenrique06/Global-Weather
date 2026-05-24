import type { IWeatherCardInfo, IWeatherResponse } from "../interfaces/weather";
import { mapWeatherResponseToCardInfo } from "../mappers/weatherMapper";
import { api } from "./api";

export async function getWeatherByCityName(cityName: string):Promise<IWeatherCardInfo> {

    try {
        const response = await api.get<IWeatherResponse>('/weather', {
        params: {
            q: cityName,
            appid: import.meta.env.VITE_OPENWEATHER_API_KEY,
            units: 'metric',
            lang: 'pt_br'
        }
        });
        
        return mapWeatherResponseToCardInfo(response.data);
    }
    catch(error) {
        console.error(error);
    }
}