import useRestAPI from "../../../hooks/useRestAPI";

import {Endpoint} from "../../../enums/Endpoint";
import {Http} from "../../../enums/Http";
import {StockType} from "../../../enums/StockType";
import {convertStockTypeToExchangeCode} from "../../../utils/convertStockTypeToExchangeCode";
import {TimePriceData} from "../type/TimePriceData";

const useTimePrice = (
    stockType: StockType,
    stockId:string,
    NEXT:string = "",
    KEYB:string = ""

) => {
    const {data, loading, error} = useRestAPI(Endpoint.GET_TIME_ITEM_CHART_PRICE, Http.GET, {
        AUTH: "",
        EXCD: convertStockTypeToExchangeCode(stockType),
        SYMB: stockId,
        NMIN: "1",
        PINC: NEXT,
        NEXT: NEXT,
        NREC: "120",
        FILL: "",
        KEYB: KEYB
    })

    if (loading) {
        return { timePriceData: null, loading: true, error: null };
    }

    if (error) {
        return { timePriceData: null, loading: false, error };
    }

    const timePriceDataList: TimePriceData[] = data.output2;
    return { timePriceDataList, loading: false, error: null };
}

export default useTimePrice;