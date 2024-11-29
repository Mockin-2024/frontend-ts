import {useEffect, useState} from "react";
import useRestAPI from "../../../hooks/useRestAPI";

import {Endpoint} from "../../../enums/Endpoint";
import {Http} from "../../../enums/Http";
import {ExchangeCode} from "../../../enums/ExchangeCode";
import {NotHistoryData} from "../type/NotHistoryData";

const useNotHistoryList = () => {
    const [notHistory, setNotHistory] = useState<NotHistoryData[]>([]);

    const {data, loading, error} = useRestAPI(Endpoint.GET_NCCS, Http.GET, {
        overseasExchangeCode: ExchangeCode.NASDAQ,
        sortOrder: "DS",
        continuousSearchCondition200: "",
        continuousSearchKey200:""
    });

    if (error){
        console.log(error);
    }

    useEffect(() => {
        if (!loading){
            if (data && data.output) {
                setNotHistory(data.output);
            }else{
                setNotHistory([]);
            }
        }
    }, [loading, data])

    return {notHistory};
}

export default useNotHistoryList;