
import { WeatherTableItem } from "../WeatherTableItem/WeatherTableItem";
import { useWeather } from "../../hooks/useWeather";
import "./WeatherTable.css";



/*
    array -> [1, 2, 3, 4, 5, 6]

    tr
        td
        td
    tr 
        td
        td
    tr 
        td 
        td
*/


export function WeatherTable() {
    const { weatherList } = useWeather();

    return(
        <>
            <div className="weather-grid-table">
                <div className="weather-grid-table-row">
                    {
                        weatherList.map((weatherData) => (
                            <WeatherTableItem 
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