import useRestAPI from "../../../hooks/useRestAPI";
import {Endpoint} from "../../../enums/Endpoint";
import {Http} from "../../../enums/Http";
import {StockType} from "../../../enums/StockType";
import {convertStockTypeToExchangeCode} from "../../../utils/convertStockTypeToExchangeCode";
import {AskingPriceInfo} from "../type/AskingPriceInfo";

const useAskingPrice = (stockType: StockType, stockId: string) => {
    const {data, loading, error} = useRestAPI(Endpoint.GET_ASKING_PRICE, Http.GET, {
        AUTH: "",
        EXCD: convertStockTypeToExchangeCode(stockType),
        SYMB: stockId
    })
    if (loading) {
        return { askingPriceInfo: null, loading: true, error: null };
    }

    if (error) {
        return { askingPriceInfo: null, loading: false, error };
    }

    const askingPriceInfo: AskingPriceInfo = data.output2;
    return { askingPriceInfo, loading: false, error: null };
}

export default useAskingPrice