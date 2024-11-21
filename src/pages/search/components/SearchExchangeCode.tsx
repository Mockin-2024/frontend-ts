import React, {ChangeEvent} from "react";
import {ExchangeCodeKor} from "../../../enums/ExchangeCodeKor";

interface Props {
    exchangeCodeKor: ExchangeCodeKor;
    selectExchangeCodeKor: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const SearchExchangeCode: React.FC<Props> = ({exchangeCodeKor, selectExchangeCodeKor}) => {
    return (
        <div className={"flex flew-row justify-between bg-gray-100 rounded-2xl items-center p-4 mb-2"}>
            <div className={"text-xl"}>나라</div>
            <div>
                <select
                    value={exchangeCodeKor}
                    onChange={selectExchangeCodeKor}
                    className="border-none text-xl rounded bg-gray-100"
                >
                    {Object.entries(ExchangeCodeKor).map(([key, value]) => (
                        <option key={key} value={value} className={"bg-gray-100"}>
                            {value}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    )
}

export default SearchExchangeCode