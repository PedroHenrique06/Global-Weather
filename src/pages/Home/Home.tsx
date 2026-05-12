import { FavoriteSession } from "../../components/FavoriteSession/FavoriteSession";
import { RecentSession } from "../../components/RecentSession/RecentSession";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import "./Home.css";

export function Home() {
    return(
        <>
            <div className="container-home">
                <SearchBar></SearchBar>
                <RecentSession></RecentSession>
                <FavoriteSession></FavoriteSession>
            </div>
        </>
    );
}