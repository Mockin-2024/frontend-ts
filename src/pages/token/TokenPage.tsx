import React, {useEffect} from "react";

import useRestAPI from "../../hooks/useRestAPI";
import useNavigator from "../../hooks/useNavigator";

import {Endpoint} from "../../enums/Endpoint";
import {Http} from "../../enums/Http";
import {AppRoutes} from "../../enums/AppRoutes";

const TokenPage:React.FC = () => {
    const {navigateTo} = useNavigator()
    const {loading: mock} = useRestAPI(Endpoint.POST_ACCESS_TOKEN_MOCK, Http.POST, {});
    const {loading: real} = useRestAPI(Endpoint.POST_ACCESS_TOKEN_REAL, Http.POST, {});

    useEffect(() => {
        if (!mock && !real) {
            navigateTo(AppRoutes.MAIN, {});
        }
    }, [mock, real, navigateTo]);

    return(
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="loader"></div>
        </div>
    )
}

export default TokenPage