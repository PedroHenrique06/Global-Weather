import type { IWeatherCardInfo, IWeatherResponse } from "../interfaces/weather";

/**
 * @description Transformação dos dados recebidos pela api para a abstração interna da estrutura utilizada na aplicação. 
 * @param weather Informações climáticas.
 * @returns Objeto transformado para representar as informações climáticas de forma mais legível.
 */
export function mapWeatherResponseToCardInfo(weather: IWeatherResponse): IWeatherCardInfo {
    return {
        id: weather.id,
        cityName: weather.name,
        countryName: weather.sys.country,
        temperature: weather.main.temp,
        feelsLike: weather.main.feels_like,
        weatherStatus: weather.weather[0].main,
        weatherDescription: weather.weather[0].description,
        iconCode: weather.weather[0].icon
    };
}