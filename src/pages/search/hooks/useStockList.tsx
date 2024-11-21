import useRestAPI from "../../../hooks/useRestAPI";
import {Endpoint} from "../../../enums/Endpoint";
import {Http} from "../../../enums/Http";
import {SearchDto} from "../dto/SearchDto";
import {useEffect, useState} from "react";
import apiRequest from "../../../utils/apiRequest";
import Alert from "../../../components/common/Alert";
import {AlertIcon} from "../../../enums/AlertIcon";
import {ExchangeCodeKor} from "../../../enums/ExchangeCodeKor";
import {convertStockTypeToExchangeCode} from "../../../utils/convertKorToExchangeCode";
import {StockData} from "../type/StockData";

const useStockList = () => {
    const [stockList, setStockList] = useState<StockData[]>([]);
    const {data, loading} = useRestAPI(Endpoint.GET_SEARCH, Http.GET, SearchDto)

    useEffect(() => {
        if (!loading) {
            if (data && data.output2) {
                setStockList(data.output2);
            } else {
                setStockList([]);
            }
        }
    }, [loading, data]);

    const searchByOption = async (
        exchangeCode: ExchangeCodeKor,
        startRangePrice: number,
        endRangePrice: number,
        isCheckPrice: boolean,
        startRangeRate: number,
        endRangeRate: number,
        isCheckRate: boolean,
    ) => {
        // TODO: 가격 검색은 해당 나라 환율로 넣어야 함..
        const updatedSearchDto = {
            ...SearchDto,
            EXCD: convertStockTypeToExchangeCode(exchangeCode),
            coYnPricecur: isCheckPrice ? "1" : "",
            coStPricecur: isCheckPrice ? startRangePrice.toString() : '',
            coEnPricecur: isCheckPrice ? endRangePrice.toString() : '',
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