import React from "react";

import Balance from "./components/Balance";

import MainTopNavBar from "./components/MainTopNavBar";
import News from "./components/News";
import History from "./components/History";
import useRestAPI from "../../hooks/useRestAPI";

import {Endpoint} from "../../enums/Endpoint";
import {Http} from "../../enums/Http";

const MainPage: React.FC = () => {
    useRestAPI(Endpoint.POST_ACCESS_TOKEN_MOCK, Http.POST, {});
    useRestAPI(Endpoint.POST_ACCESS_TOKEN_REAL, Http.POST, {});

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