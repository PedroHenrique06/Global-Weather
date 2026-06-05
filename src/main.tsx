import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { WeatherProvider } from './contexts/WeatherProvider.tsx'
import { FavoriteSessionProvider } from './contexts/FavoriteSessionProvider.tsx'

createRoot(document.getElementById('root')!).render(
    <FavoriteSessionProvider>
        <WeatherProvider>
            <App />
        </WeatherProvider>
    </FavoriteSessionProvider>
)
