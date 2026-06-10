import { useContext } from 'react';
import { SearchContext } from '../contexts/SearchContext'; 

export function useSearchBar() {
    const context = useContext(SearchContext);

    if (!context) {
        throw new Error('useSearchBar deve ser usado dentro do SearchProvider');
    }

    return context;
}