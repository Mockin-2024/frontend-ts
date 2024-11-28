import React from "react";
import FavoriteList from "./components/FavoriteList";
import FavoriteTopNavBar from "./components/FavoriteTopNavBar";

const FavoritePage: React.FC = () => {
    return (
        <div>
            <FavoriteTopNavBar/>
            <div className={"pt-16 p-4"}>
                <FavoriteList />
            </div>

        </div>
    )
}

export default FavoritePage;