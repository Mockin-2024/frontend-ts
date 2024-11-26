import React from "react";
import {calculateTimeDifference} from "../../utils/calculateTimeDifferece";

interface Props {
    title: string;
    time: string;
    stockName: string;
    source: string;
}
const NewsItem: React.FC<Props> = ({title, time, stockName, source}) => {
    return (
        <div className={"pb-8"}>
            <div className={"text-xs text-indigo-600"}>
                {stockName}
            </div>
            <div className={"text-base"}>
                {title}
            </div>
            <div className={"pt-2 text-xs text-gray-400"}>
                {source}.{calculateTimeDifference(time)}
            </div>
        </div>
    )
}

export default NewsItem