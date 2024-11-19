import {StockType} from "../../../enums/StockType";
import useRestAPI from "../../../hooks/useRestAPI";
import {Endpoint} from "../../../enums/Endpoint";
import {Http} from "../../../enums/Http";

const useSearchInfo = (stockType: StockType, stockId:string) => {
    const {data} = useRestAPI(Endpoint.GET_SEARCH_INFO, Http.GET, {
        prdtTypeCd: stockType,
        pdno: stockId
    })
    const searchInfo = data.output

    return {searchInfo}
}

export default useSearchInfo