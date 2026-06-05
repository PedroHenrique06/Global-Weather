import type { IWeatherCardInfo, IWeatherResponse } from "../interfaces/weather";
import { mapWeatherResponseToCardInfo } from "../mappers/weatherMapper";
import { api } from "./api";

/**
 * @description Por uma decisão de projeto o objeto recebido da chamada da api é do tipo IWeatherResponse, porém no retorno da função ele transformado atraves de um mapper para corresponder ao formato esperado pela aplicação.  
 * @param {string} cityName Nome da cidade.
 * @returns {IWeatherCardInfo} Informações climáticas da cidade buscada.
 */
export async function getWeatherByCityName(cityName: string): Promise<IWeatherCardInfo> {

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