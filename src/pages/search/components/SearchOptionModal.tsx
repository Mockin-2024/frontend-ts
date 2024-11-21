import React from "react";
import SearchOption from "./SearchOption";
import useRange from "../hooks/useRange";
import useExchangeCodeKor from "../hooks/useExchangeCodeKor";
import SearchExchangeCode from "./SearchExchangeCode";
import {ExchangeCodeKor} from "../../../enums/ExchangeCodeKor";

interface Props{
    closeModal: () => void;
    searchByOption: (
        exchangeCode: ExchangeCodeKor,
        startRangePrice: number,
        endRangePrice: number,
        isCheckPrice: boolean,
        startRangeRate: number,
        endRangeRate: number,
        isCheckRate: boolean,
    ) => void;
}

const SearchOptionModal: React.FC<Props> = ({closeModal, searchByOption}) => {
    const {
        optionName: optionNamePrice,
        startRange: startRangePrice,
        endRange: endRangePrice,
        isCheck: isCheckPrice,
        handleStart: handleStartPrice,
        handleEnd: handleEndPrice,
        handleCheck: handleCheckPrice,

    } = useRange("현재가 조건", 0, 999999999)

    const {
        optionName: optionNameRate,
        startRange: startRangeRate,
        endRange: endRangeRate,
        isCheck: isCheckRate,
        handleStart: handleStartRate,
        handleEnd: handleEndRate,
        handleCheck: handleCheckRate,
    } = useRange("등락율 조건", -100, 100)

    const {
        exchangeCodeKor,
        selectExchangeCodeKor
    } = useExchangeCodeKor()

    return (
        <div className={"fixed inset-0 bg-black bg-opacity-50 flex items-end justify-center"}
        onClick={closeModal}>
            <div className="bg-white rounded-t-lg shadow-lg p-6 w-full sm:w-11/12 max-w-lg" style={{height: '75%'}}
                 onClick={(e) => e.stopPropagation()}>
                <div className={"flex text-2xl justify-center pb-2"}>상세 검색</div>

                <SearchExchangeCode
                    exchangeCodeKor={exchangeCodeKor}
                    selectExchangeCodeKor={selectExchangeCodeKor}
                />

                <SearchOption
                    optionName={optionNamePrice}
                    startRange={startRangePrice}
                    endRange={endRangePrice}
                    isCheck={isCheckPrice}
                    handleStart={handleStartPrice}
                    handleEnd={handleEndPrice}
                    handleCheck={handleCheckPrice}
                />

                <SearchOption
                    optionName={optionNameRate}
                    startRange={startRangeRate}
                    endRange={endRangeRate}
                    isCheck={isCheckRate}
                    handleStart={handleStartRate}
                    handleEnd={handleEndRate}
                    handleCheck={handleCheckRate}
                />

                <div className={"fixed bottom-0 left-0 right-0 p-4 flex flex-row justify-between text-xl"}>
                    <div className={"rounded-2xl bg-gray-400 text-white px-4 py-4 w-full text-center mx-2"}
                         onClick={closeModal}>
                        닫기
                    </div>
                    <div
                        className={`rounded-2xl bg-indigo-600 text-white px-4 py-4 w-full text-center mx-2`}
                        onClick={() => {
                            searchByOption(
                                exchangeCodeKor,
                                startRangePrice,
                                endRangePrice,
                                isCheckPrice,
                                startRangeRate,
                                endRangeRate,
                                isCheckRate
                            );
                            closeModal()}
                    }>
                        검색하기
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchOptionModal