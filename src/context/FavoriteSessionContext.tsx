import { createContext } from "react";
import type { IWeatherResponse } from "../interfaces/weather";

interface IFavoriteSessionContext {
    favoriteList: IWeatherResponse[];
    loading: boolean;
    error: string | null;
};

export const FavoriteSessionContext = createContext<IFavoriteSessionContext | null>(null);