import { createContext } from "react";
import type { IWeatherCardInfo } from "../interfaces/weather";

interface IFavoriteSessionContext {
    favoriteList: IWeatherCardInfo[];
    favoriteCities: string[];
    toggleFavoriteCity: (cityName:string) => void;
    loading: boolean;
    error: string | null;
};

export const FavoriteSessionContext = createContext<IFavoriteSessionContext | null>(null);