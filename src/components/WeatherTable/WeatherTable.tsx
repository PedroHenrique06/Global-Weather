
import { WeatherTableItem } from "../WeatherTableItem/WeatherTableItem";
import { useWeather } from "../../hooks/useWeather";
import "./WeatherTable.css";

export function WeatherTable() {
    const { weatherList, loading, error } = useWeather();

    // Será melhorado futuramente.
    if(loading) {
        return <p>Carregando...</p>;
        
    }

    // Será melhorado futuramente.
    if(error) {
        return <p>{ error }</p>;
    }

    return(
        <>
            <div className="weather-grid-table">
                <div className="weather-grid-table-row">
                    {
                        weatherList.map((weatherData) => (
                            <WeatherTableItem
                                key={weatherData.id} 
                                cityName={weatherData.name}
                                cityTemparature={weatherData.main.temp}
                            />
                        ))
                    }
                </div>
        </div>
        </>
    );
}