
import { WeatherTableItem } from "../WeatherTableItem/WeatherTableItem";
import "./WeatherTable.css";

export function WeatherTable() {
    return(
        <>
            <table className="weather-table">
                <tbody className="weather-table-body">
                    <tr className="weather-table-row">
                       <WeatherTableItem 
                            cityName="Natal"
                       />
                        <WeatherTableItem 
                            cityName="Mossoró"
                        />
                    </tr>
                    <tr className="weather-table-row">
                        <WeatherTableItem 
                            cityName="Barcelona"
                        />
                        <WeatherTableItem 
                            cityName="Pedro Avelino"
                        />
                    </tr>
                </tbody>
            </table>
        </>
    );
}