import {ChangeEvent, useState} from "react";
import {ExchangeCodeKor} from "../../../enums/ExchangeCodeKor";

const useExchangeCodeKor = () => {
    const [exchangeCodeKor, setExchangeCodeKor] = useState<ExchangeCodeKor>(ExchangeCodeKor.NAS);

    const selectExchangeCodeKor = (e: ChangeEvent<HTMLSelectElement>) => {
        setExchangeCodeKor(e.target.value as ExchangeCodeKor);
    }

    return {exchangeCodeKor, selectExchangeCodeKor}
}

export default useExchangeCodeKor