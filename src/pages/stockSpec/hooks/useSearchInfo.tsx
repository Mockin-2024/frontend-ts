import {StockType} from "../../../enums/StockType";
import useRestAPI from "../../../hooks/useRestAPI";
import {Endpoint} from "../../../enums/Endpoint";
import {Http} from "../../../enums/Http";

const useSearchInfo = (stockType: StockType, stockId:string) => {
    const {data, loading, error} = useRestAPI(Endpoint.GET_SEARCH_INFO, Http.GET, {
        prdtTypeCd: stockType,
        pdno: stockId
    })

    if (loading) {
        return { searchInfo: null, loading: true, error: null };
    }

    if (error) {
        return { searchInfo: null, loading: false, error };
    }

    const searchInfo = data.output;
    return { searchInfo, loading: false, error: null };
}

export default useSearchInfo