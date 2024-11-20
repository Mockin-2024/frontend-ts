import {ExchangeCode} from "../../../enums/ExchangeCode";
import useRestAPI from "../../../hooks/useRestAPI";
import {Endpoint} from "../../../enums/Endpoint";
import {Http} from "../../../enums/Http";

interface psamountData{
    ord_psbl_qty: string
}

const usePsAmount = (exchangeCode: ExchangeCode, stockId: string, price:string) => {
    const {data, loading, error} = useRestAPI(Endpoint.GET_PSAMOUNT, Http.GET, {
        overseasExchangeCode: exchangeCode,
        itemCode: stockId,
        overseasOrderUnitPrice: price
    })

    if (loading) {
        return { psamount: null, loading: true, error: null };
    }

    if (error) {
        return { psamount: null, loading: false, error };
    }

    const psamount: psamountData = data.output;
    return { psamount, loading: false, error: null };
}

export default usePsAmount;