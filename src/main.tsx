import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { WeatherProvider } from './context/WeatherProvider.tsx'
import { FavoriteSessionProvider } from './context/FavoriteSessionProvider.tsx'

createRoot(document.getElementById('root')!).render(
    <FavoriteSessionProvider>
        <WeatherProvider>
            <App />
        </WeatherProvider>
    </FavoriteSessionProvider>
)
