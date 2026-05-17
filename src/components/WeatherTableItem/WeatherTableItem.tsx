
import weather_icon from "../../assets/weatherCard/sun-icon.png";
import "./WeatherTableItem.css";

interface IWeatherTableItem {
    cityName: string;
    cityTemparature: number;
}

export function WeatherTableItem({ cityName, cityTemparature }:IWeatherTableItem) {
    return(
        <>
            <div className="weather-table-row-item">
                <div className="container-weather-item">
                    <span className="weather-item-city-name">
                        { cityName }
                    </span>
                    <div className="container-weather-item-image-and-weather-item-temperature">
                        <img className="weather-item-image" src={weather_icon} alt="ícone representando o clima" />
                        <span className="weather-item-temperature"> {Math.round(cityTemparature)}°C </span>
                    </div>
                </div>
            </div>
        </>
    );
}