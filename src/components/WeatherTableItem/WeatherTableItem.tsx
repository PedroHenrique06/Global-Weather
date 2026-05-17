
import weather_icon from "../../assets/weatherCard/sun-icon.png";
import "./WeatherTableItem.css";

interface IWeatherTableItem {
    cityName: string
}

export function WeatherTableItem({ cityName }:IWeatherTableItem) {
    return(
        <>
            <td className="weather-table-row-item">
                <div className="container-weather-item">
                    <span className="weather-item-city-name">
                        { cityName }
                    </span>
                    <div className="container-weather-item-image-and-weather-item-temperature">
                        <img className="weather-item-image" src={weather_icon} alt="ícone representando o clima" />
                        <span className="weather-item-temperature"> 30°C </span>
                    </div>
                </div>
            </td>
        </>
    );
}