
import { createContext } from "react";
import { type IWeatherCardInfo } from "../interfaces/weather";

interface IWeatherContext {
    weatherList: IWeatherCardInfo[];
    loading: boolean;
    error: string;
};

export const WeatherContext = createContext<IWeatherContext | null>(null);