import { useEffect, useState } from "react";
import type { IWeatherCardInfo } from "../interfaces/weather";
import { getWeatherByCityName } from "../services/weatherService";
import { FavoriteSessionContext } from "./FavoriteSessionContext";

interface IFavoriteSessionProviderProps {
    children: React.ReactNode;
}

export function FavoriteSessionProvider({ children }:IFavoriteSessionProviderProps) {
    const [favoriteList, setFavoriteList] = useState<IWeatherCardInfo[]>([]);
    const [favoriteCities, setFavoriteCities] = useState<string[]>(['Natal', 'Barcelona']);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function loadFavoriteList() {
            try {
                setLoading(true);
                setError(null);
                const responses = await Promise.all(favoriteCities.map((cityName) => getWeatherByCityName(cityName)));
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
    }, [favoriteCities]);

    function toggleFavoriteCity(cityName: string) {
        setFavoriteCities((currentListOfFavoriteCities) => {
            const alreadyExist = currentListOfFavoriteCities.includes(cityName);

            if(alreadyExist) {
                removeFromCardInfoList(cityName);
                return currentListOfFavoriteCities.filter((city) => city !== cityName);
            }

            return [...currentListOfFavoriteCities, cityName];
        });
    }

    function removeFromCardInfoList(cityName: string) {
        setFavoriteList(favoriteList.filter((cardInfoItem) => cardInfoItem.cityName !== cityName));
    }

    return(
        <>
            <FavoriteSessionContext.Provider value={{ favoriteList, favoriteCities, toggleFavoriteCity, loading, error }}>
                { children }
            </FavoriteSessionContext.Provider>    
        </>
    );
}