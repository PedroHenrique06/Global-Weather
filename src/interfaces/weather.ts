
/**
 * @description Representa a estrutura dos dados de interesse retornados pela API.
 */
export interface IWeatherResponse {
    id: number;
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
        main: string;
    }[];
};