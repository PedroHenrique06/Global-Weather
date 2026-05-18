import { useContext } from 'react';
import { FavoriteSessionContext } from '../context/FavoriteSessionContext';

export function useFavoriteSession() {
    const context = useContext(FavoriteSessionContext);

    if (!context) {
        throw new Error('useFavoriteSession deve ser usado dentro do FavoriteSessionProvider');
    }

    return context;
}