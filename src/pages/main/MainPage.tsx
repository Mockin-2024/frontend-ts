import React from "react";

import Balance from "./components/Balance";

import MainTopNavBar from "./components/MainTopNavBar";
import NewsPartial from "./components/NewsPartial";
import History from "./components/History";
import useNews from "./hooks/useNews";

const MainPage: React.FC = () => {
    const {newsList, moreNews} = useNews()

    return (
        <div>
            <MainTopNavBar />
            <div className={"pt-20 p-4"}>
                <Balance/>
                <History />
                <NewsPartial newsList={newsList} moreNews={moreNews} />
            </div>
        </div>
    )
}

export default MainPage;