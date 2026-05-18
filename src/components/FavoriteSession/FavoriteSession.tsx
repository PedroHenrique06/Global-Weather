import { useFavoriteSession } from "../../hooks/useFavoriteSession";
import { WeatherCard } from "../WeatherCard/WeatherCard";
import "./FavoriteSession.css";

export function FavoriteSession() {
    const { favoriteList, loading, error } = useFavoriteSession();

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
            <div className="container-favorite-session">
                <h2 className="title-favorites-session">
                    Favorites
                </h2>
                <div className="row-favorites-cards">
                    {
                        favoriteList.map((weatherData) => (
                            <WeatherCard
                                key={weatherData.id}
                                cityName={weatherData.name}
                                cityTemperature={weatherData.main.temp}
                                countryName={weatherData.sys.country}
                                feelsLike={weatherData.main.feels_like}
                            />
                        ))
                    }
                </div>
            </div>
        </>
    );
}