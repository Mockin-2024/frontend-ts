import React, {ChangeEvent, useState} from "react";
import CheckNo from "../../../components/Icon/CheckNo";
import CheckYes from "../../../components/Icon/CheckYes";

interface Props{
    optionName:string;
    startRange: number;
    endRange: number;
    isCheck: boolean;
    handleStart: (value: ChangeEvent<HTMLInputElement>) => void;
    handleEnd: (value: ChangeEvent<HTMLInputElement>) => void;
    handleCheck: () => void;
}

const SearchOption:React.FC<Props> = ({optionName, startRange, endRange, isCheck, handleEnd, handleStart, handleCheck}) => {
    return (
        <div className={"bg-gray-100 p-4 rounded-2xl mb-2"}>
            <div className={"flex flex-row items-center"}
                 onClick={handleCheck}>
                <div className={"text-xl"}>{optionName}</div>
                <div className={"pl-2 text-indigo-600"}>
                    {isCheck ? <CheckYes/> : <CheckNo/>}
                </div>
            </div>

            {isCheck && (
                <>
                    <div className={"flex flex-row justify-between items-center"}>
                        <div className={"w-full"}>시작</div>
                        <input
                            className={"w-full p-2 outline-indigo-600 bg-gray-100 rounded-2xl"}
                            type="number"
                            value={startRange}
                            onChange={handleStart}
                        />
                    </div>
                    <div className={"flex flex-row justify-between rounded-2xl items-center"}>
                        <div className={"w-full"}>끝</div>
                        <input
                            className={"w-full p-2 outline-indigo-600 bg-gray-100 rounded-2xl"}
                            type="number"
                            value={endRange}
                            onChange={handleEnd}
                        />
                    </div>
                </>
            )}
        </div>
    )

}

export default SearchOption