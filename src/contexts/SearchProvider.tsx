import { useState } from "react";
import type { IWeatherCardInfo } from "../interfaces/weather";
import { getWeatherByCityName } from "../services/weatherService";
import { SearchContext } from "./SearchContext";

interface ISearchProviderProps {
    children: React.ReactNode;
}

export function SearchProvider({ children }:ISearchProviderProps) {
    const [searchResult, setSearchResult] = useState<IWeatherCardInfo | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>("");

    async function searchCityInformationByName(cityName: string) {
        try {
            setLoading(true);
            setError(null);
            const cityInformation = await getWeatherByCityName(cityName);
            setSearchResult(cityInformation);
        } catch {
            setError('Erro ao carregar informações climáticas.');
        }
        finally {
            setLoading(false);
        }
    }

    return(
        <>
            <SearchContext.Provider value={{ searchResult, searchCityInformationByName, loading, error }}>
                { children }
            </SearchContext.Provider>
        </>
    );
}