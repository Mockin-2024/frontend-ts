import useRestAPI from "../../../hooks/useRestAPI";
import useNavigator from "../../../hooks/useNavigator";

import {Endpoint} from "../../../enums/Endpoint";
import {Http} from "../../../enums/Http";
import {NewsData} from "../types/NewsData";
import {AppRoutes} from "../../../enums/AppRoutes";

const useNews = () => {
    const {navigateTo} = useNavigator()
    const {data, loading, error} = useRestAPI(Endpoint.GET_NEWS_TITLE, Http.GET, {
        queryDate: "",
        queryTime: ""
    })

    if (loading) return {newsList: [], loading: true, error: null}
    if (error) return {newsList: [], loading: false, error: error};

    const newsList: NewsData[] = data.outblock1
    const moreNews = () => {
        navigateTo(AppRoutes.NEWS, newsList)
    }

    return {newsList: newsList, moreNews}
}

export default useNews