import { WeatherCard } from "../WeatherCard/WeatherCard";
import "./FavoriteSession.css";

export function FavoriteSession() {

    return(
        <>
            <div className="container-favorite-session">
                <h2 className="title-favorites-session">
                    Favorites
                </h2>
                <div className="row-favorites-cards">
                    <WeatherCard/>
                    <WeatherCard/>
                    <WeatherCard/>
                </div>
            </div>
        </>
    );
}