import useRestAPI from "../../../hooks/useRestAPI";

import {Http} from "../../../enums/Http";
import {Endpoint} from "../../../enums/Endpoint";
import {StockType} from "../../../enums/StockType";
import {convertStockTypeToExchangeCode} from "../../../utils/convertStockTypeToExchangeCode";
import {PriceInfo} from "../type/PriceInfo";

const usePrice = (stockType: StockType, stockId: string) => {
    const {data, loading, error} = useRestAPI(Endpoint.GET_PRICE_DETAIL, Http.GET, {
        AUTH: "",
        EXCD: convertStockTypeToExchangeCode(stockType),
        SYMB: stockId
    })
    if (loading) {
        return { priceInfo: null, loading: true, error: null };
    }

    if (error) {
        return { priceInfo: null, loading: false, error };
    }

    const priceInfo: PriceInfo = data.output;
    return { priceInfo, loading: false, error: null };
}

export default usePrice