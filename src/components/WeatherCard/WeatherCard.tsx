
import "./WeatherCard.css";
import weather_icon from "../../assets/weatherCard/cloudy-sun-icon.png";

export function WeatherCard() {

    return(
        <>
            <div className="container-weather-card">

                <div className="container-city-country">
                    <span className="card-city-text">Natal</span>
                    <span className="card-country-text">Brasil</span>
                </div>
                
                <div className="container-icon-temperature">
                    <img className="card-icon-image" src={weather_icon} alt="" />
                    <div className="card-temperature-text">28°C</div>
                </div>

                <div className="container-real-feel">
                    <span className="card-real-feel-text">Sensação Térmica 33°C</span>
                </div>

            </div>
        </>
    );
}