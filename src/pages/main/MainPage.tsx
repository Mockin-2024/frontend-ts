import React from "react";

import Balance from "./components/Balance";

import MainTopNavBar from "./components/MainTopNavBar";
import History from "./components/History";
import Favorites from "./components/Favorites";
import NewsPartial from "./components/NewsPartial";

const MainPage: React.FC = () => {

    return (
        <div>
            <MainTopNavBar />
            <div className={"pt-20 p-4"}>
                <Balance/>
                <History />
                <Favorites />
                <NewsPartial />
            </div>
        </div>
    )
}

export default MainPage;