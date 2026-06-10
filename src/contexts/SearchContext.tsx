import { createContext } from "react";
import type { IWeatherCardInfo } from "../interfaces/weather";

interface ISearchContext {
    searchResult: IWeatherCardInfo | null;
    loading: boolean;
    error: string;
    searchCityInformationByName: (cityName: string) => Promise<void>;
}

export const SearchContext = createContext<ISearchContext | null>(null);