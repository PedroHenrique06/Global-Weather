import { api } from "./api";

export async function getWeatherByCityName(cityName: string) {

    try {
        const response = await api.get('/weather', {
        params: {
            q: cityName,
            appid: import.meta.env.VITE_OPENWEATHER_API_KEY,
            units: 'metric',
            lang: 'pt_br'
        }
        });
        
        return response.data;
    }
    catch(error) {
        console.error(error);
    }
}