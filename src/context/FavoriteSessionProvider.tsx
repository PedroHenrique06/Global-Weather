import { useEffect, useState } from "react";
import type { IWeatherResponse } from "../interfaces/weather";
import { getWeatherByCityName } from "../services/weatherService";
import { FavoriteSessionContext } from "./FavoriteSessionContext";

interface IFavoriteSessionProviderProps {
    children: React.ReactNode;
}

export function FavoriteSessionProvider({ children }:IFavoriteSessionProviderProps) {
    const [favoriteList, setFavoriteList] = useState<IWeatherResponse[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function loadFavoriteList() {
            const listOfFavorites = ['Natal', 'Barcelona'];
            
            try {
                setLoading(true);
                setError(null);
                const responses = await Promise.all(listOfFavorites.map((cityName) => getWeatherByCityName(cityName)));
                setFavoriteList(responses);
            }
            catch {
                setError('Erro ao carregar informações climáticas.');
            }
            finally {
                setLoading(false);
            }
        }

        loadFavoriteList();
    }, []);

    return(
        <>
            <FavoriteSessionContext.Provider value={{ favoriteList, loading, error }}>
                { children }
            </FavoriteSessionContext.Provider>    
        </>
    );
}