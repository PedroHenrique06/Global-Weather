
/**
 * @description Representa a estrutura dos dados de interesse retornados pela API.
 */
export interface IWeatherResponse {
    name: string;
    
    main: {
        temp: number;
        feels_like: number;
    };

    sys: {
        country: string;
    };

    weather: {
        icon: string;
        description: string;
    }[];
};