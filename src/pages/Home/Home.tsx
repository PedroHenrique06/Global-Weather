import { SearchBar } from "../../components/SearchBar/SearchBar";
import "./Home.css";

export function Home() {
    return(
        <>
        <div className="container-home">
            <SearchBar></SearchBar>
        </div>
        </>
    );
}