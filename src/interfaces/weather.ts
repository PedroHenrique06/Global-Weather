
/**
 * @description Representa a estrutura dos dados de interesse retornados pela API.
 */
export interface IWeatherResponse {
    /** Identificador único */
    id: number;

    /** Nome da cidade */
    name: string;
    
    main: {
        /** Temperatura */
        temp: number;

        /** Sensação térmica */
        feels_like: number;
    };

    sys: {
        /** Abreviação do nome do país (ex: BR) */
        country: string;
    };

    weather: {
        /** Código do ícone representando o clima */
        icon: string;

        /** Descrição da condição climática */
        description: string;

        /** Condição climática (ex: ensolarado) */
        main: string;
    }[];
};

/**
 * @description Representa as informações climáticas de uma cidade. 
 */
export interface IWeatherCardInfo {
    id: number;
    cityName: string;
    countryName: string;
    temperature: number;
    feelsLike: number;
    weatherStatus: string;
    weatherDescription: string; 
}