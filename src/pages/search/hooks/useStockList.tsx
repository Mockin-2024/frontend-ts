import {useEffect, useState} from "react";

import {Endpoint} from "../../../enums/Endpoint";
import {Http} from "../../../enums/Http";
import {AlertIcon} from "../../../enums/AlertIcon";
import {ExchangeCodeKor} from "../../../enums/ExchangeCodeKor";

import {SearchDto} from "../dto/SearchDto";
import {StockData} from "../type/StockData";
import Alert from "../../../components/common/Alert";

import useRestAPI from "../../../hooks/useRestAPI";
import apiRequest from "../../../utils/apiRequest";
import {useCurrency} from "../../../context/CurrencyContext";
import {getCurrencyCode} from "../../../utils/getCurrencyCode";
import {convertStockTypeToExchangeCode} from "../../../utils/convertKorToExchangeCode";

const useStockList = () => {
    const [stockList, setStockList] = useState<StockData[]>([]);
    const {data, loading} = useRestAPI(Endpoint.GET_SEARCH, Http.GET, SearchDto)
    const {convertFromKRW} = useCurrency()

    useEffect(() => {
        if (!loading) {
            if (data && data.output2) {
                setStockList(data.output2);
            } else {
                setStockList([]);
            }
        }
    }, [data, loading]);

    const searchByOption = async (
        exchangeCode: ExchangeCodeKor,
        startRangePrice: number,
        endRangePrice: number,
        isCheckPrice: boolean,
        startRangeRate: number,
        endRangeRate: number,
        isCheckRate: boolean,
    ) => {
        const curr = getCurrencyCode(exchangeCode)

        const updatedSearchDto = {
            ...SearchDto,
            EXCD: convertStockTypeToExchangeCode(exchangeCode),
            coYnPricecur: isCheckPrice ? "1" : "",
            coStPricecur: isCheckPrice ? convertFromKRW(startRangePrice, curr).toString() : '',
            coEnPricecur: isCheckPrice ? convertFromKRW(endRangePrice, curr).toString() : '',
            coYnRate: isCheckRate ? "1" : '',
            coStRate: isCheckRate ? startRangeRate.toString() : '',
            coEnRate: isCheckRate ? endRangeRate.toString() : '',

        };
        const {data: dataRe, error} = await apiRequest(Endpoint.GET_SEARCH, Http.GET, updatedSearchDto, true)

        if (error){
            await Alert("검색 실패", "불가능한 검색입니다.", AlertIcon.ERROR)
            return;

        }
        if (dataRe && dataRe.output2) {
            setStockList(dataRe.output2);
        } else {
            setStockList([]);
        }
    }

    return {stockList, searchByOption}
}

export default useStockList