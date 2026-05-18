
import { createContext } from "react";
import { type IWeatherResponse } from "../interfaces/weather";

interface IWeatherContext {
    weatherList: IWeatherResponse[];
    loading: boolean;
    error: string;
};

export const WeatherContext = createContext<IWeatherContext | null>(null);