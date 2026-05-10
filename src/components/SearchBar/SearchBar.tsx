import "./SearchBar.css";
import lupa_icone from "../../assets/lupa-icon.png";

export function SearchBar() {
    return(
        <>
        <div className="container-search-bar">
            <input id="searchBarInput" className="search-bar-input" type="text" placeholder="Pesquise uma cidade..." />
            <button className="search-button">
                <img className="search-button-image" src={lupa_icone} alt="Icone de lupa" />
            </button>
        </div>
        </>
    )
}