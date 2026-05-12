import { useState } from "react";
import "./WeatherCard.css";
import weather_icon from "../../assets/weatherCard/cloudy-sun-icon.png";
import star_filled_icon from "../../assets/weatherCard/star-filled-icon.png";
import star_empty_icon from "../../assets/weatherCard/star-empty-icon.png";

/**
 * @description Propriedades do componente WeatherCard.
 */
type weatherCardProps = {
    cityName?: string,
    countryName?: string,
    weatherIcon?: string,
    cityTemperature?: string,
    realFeel?: string
}

/**
 * @description Componente representando o card com as informações sobre a cidade, país, clima, ícone correspondente e sensação térmica.
*/
export function WeatherCard({ cityName="Mossoró", countryName="Brasil", weatherIcon=weather_icon, cityTemperature="30", realFeel="32" }:weatherCardProps) {
    const [isFavorite, setIsFavorite] = useState<boolean>(false);

    function toggleFavoriteCard(){
        setIsFavorite(!isFavorite);
    }

    return(
        <>
            <div className="container-weather-card">

                <div className="container-city-country">
                    <span className="card-city-text">{cityName}</span>
                    <span className="card-country-text">{countryName}</span>
                </div>

                <div className="container-favorite-icon-image">
                    <img 
                        className="card-favorite-icon-image"
                        onClick={toggleFavoriteCard}
                        src={ isFavorite ? star_filled_icon : star_empty_icon }  
                        alt="Ícone de estrela"
                        />
                </div>
                
                <div className="container-icon-temperature">
                    <img className="card-icon-image" src={weatherIcon} alt="" />
                    <div className="card-temperature-text">{cityTemperature}°C</div>
                </div>

                <div className="container-real-feel">
                    <span className="card-real-feel-text">Sensação Térmica {realFeel}°C</span>
                </div>

            </div>
        </>
    );
}