import { WeatherCard } from "../WeatherCard/WeatherCard";
import "./RecentSession.css";

export function RecentSession() {

    return(
        <>
            <div className="container-recent-session">
                <h2 className="title-recents-session">
                    Recents
                </h2>
                <div className="row-recents-cards">
                    <WeatherCard/>
                    <WeatherCard/>
                    <WeatherCard/>
                </div>
            </div>
        </>
    );
}