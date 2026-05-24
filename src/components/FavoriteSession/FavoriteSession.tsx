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
                                cityName={weatherData.cityName}
                                cityTemperature={weatherData.temperature}
                                countryName={weatherData.countryName}
                                feelsLike={weatherData.feelsLike}
                            />
                        ))
                    }
                </div>
            </div>
        </>
    );
}