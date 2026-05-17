import { useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';

export function useWeather() {
    const context = useContext(WeatherContext);

    if (!context) {
        throw new Error('useWeather deve ser usado dentro do WeatherProvider');
    }

    return context;
}