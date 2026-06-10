import { useState } from "react";
import "./SearchBar.css";
import lupa_icone from "../../assets/lupa-icon.png";
import { useSearchBar } from "../../hooks/useSearchBar";

export function SearchBar() {
    const [searchedCityName, setSearchedCityName] = useState<string>("");
    const { searchResult, searchCityInformationByName} = useSearchBar();
    
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
                    onClick={() => { searchCityInformationByName(searchedCityName); console.log(`${searchedCityName}: ${searchResult.cityName} - ${searchResult.countryName} - ${searchResult.temperature} `)}}
                    >
                    <img className="search-button-image" src={lupa_icone} alt="Icone de lupa" />
                </button>
            </div>
        </>
    )
}