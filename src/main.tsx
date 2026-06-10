import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { WeatherProvider } from './contexts/WeatherProvider.tsx'
import { FavoriteSessionProvider } from './contexts/FavoriteSessionProvider.tsx'
import { SearchProvider } from './contexts/SearchProvider.tsx'

createRoot(document.getElementById('root')!).render(
    <SearchProvider>
        <FavoriteSessionProvider>
            <WeatherProvider>
                <App />
            </WeatherProvider>
        </FavoriteSessionProvider>
    </SearchProvider>
)
