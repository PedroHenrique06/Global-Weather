
import { createContext } from "react";
import { type IWeatherResponse } from "../interfaces/weather";

interface IWeatherContext {
    weatherList: IWeatherResponse[];
};

export const WeatherContext = createContext<IWeatherContext | null>(null);