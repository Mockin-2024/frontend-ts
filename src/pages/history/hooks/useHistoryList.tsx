import {useEffect, useState} from "react";
import useRestAPI from "../../../hooks/useRestAPI";

import apiRequest from "../../../utils/apiRequest";
import {getTodayDate, getXMonthAgoDate} from "../../../utils/getDate";

import {HistoryData} from "../type/HistoryData";
import {Endpoint} from "../../../enums/Endpoint";
import {Http} from "../../../enums/Http";
import {AlertIcon} from "../../../enums/AlertIcon";

import Alert from "../../../components/common/Alert";


const useHistoryList = () => {
    const [history, setHistory] = useState<HistoryData[]>([])

    const {data, error, loading} = useRestAPI(Endpoint.GET_CCNL, Http.GET, {
        orderStartDate: getXMonthAgoDate(1),
        orderEndDate: getTodayDate(),
        continuousSearchKey200: "",
        continuousSearchCondition200: "",
        transactionContinuation: "N",
    })

    if (error){
        console.log(error.toString())
    }

    useEffect(() => {
        if (!loading) {
            if (data && data.output) {
                setHistory(data.output);
            } else {
                setHistory([]);
            }
        }
    }, [data, loading]);

    const getMoreHistory = async (
        orderStartDate: string,
        orderEndDate: string,
        continuousSearchKey200: string = "",
        continuousSearchCondition200: string = "",
        transactionContinuation: string = "N",
    ) => {
        const {data, error} = await apiRequest(Endpoint.GET_CCNL, Http.GET, {
            orderStartDate: orderStartDate,
            orderEndDate: orderEndDate,
            continuousSearchKey200: continuousSearchKey200,
            continuousSearchCondition200: continuousSearchCondition200,
            transactionContinuation: transactionContinuation,
        }, true);
        if (error){
            await Alert("불러오기 실패", error.toString(), AlertIcon.ERROR)
            return;
        }
        setHistory(data.output)
    }

    return {history, getMoreHistory}
}

export default useHistoryList