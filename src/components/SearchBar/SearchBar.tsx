import { useState } from "react";
import "./SearchBar.css";
import lupa_icone from "../../assets/lupa-icon.png";

export function SearchBar() {
    const [searchedCityName, setSearchedCityName] = useState<string>("");

    function searchForTheCityData(cityName: string) {
        /* TODO: aciona a busca pelos dados da cidade */
        return cityName;
    }

    return(
        <>
        <div className="container-search-bar">
            <input 
                id="searchBarInput"
                className="search-bar-input"
                type="text"
                onChange={(event) => setSearchedCityName(event.target.value)}
                placeholder="Pesquise uma cidade..."
                />
            <button 
                className="search-button"
                onClick={() => searchForTheCityData(searchedCityName)}
                >
                <img className="search-button-image" src={lupa_icone} alt="Icone de lupa" />
            </button>
        </div>
        </>
    )
}