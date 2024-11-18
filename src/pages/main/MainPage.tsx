import React from "react";

import Balance from "./components/Balance";

import MainTopNavBar from "./components/MainTopNavBar";
import News from "./components/News";
import History from "./components/History";

const MainPage: React.FC = () => {
    return (
        <div>
            <MainTopNavBar />
            <div className={"pt-20 p-4"}>
                <Balance/>
                <History />
                <div className={"pt-4"}>
                    <News/>
                </div>
            </div>
        </div>
    )
}

export default MainPage;