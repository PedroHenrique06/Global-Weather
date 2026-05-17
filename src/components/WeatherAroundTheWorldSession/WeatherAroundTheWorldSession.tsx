
import { WeatherTable } from "../WeatherTable/WeatherTable";
import "./WeatherAroundTheWorldSession.css";

export function WeatherAroundTheWorldSession() {
    return(
        <>
            <div className="container-weather-around-the-world-session">
                <h2 className="title-weather-around-the-world-session">
                    Weather Around The World
                </h2>
                <div className="container-weather-table">
                    <WeatherTable></WeatherTable>
                </div>
            </div>
        </>
    );
}