import React from "react";

interface Props {
    title: string;
    date: string;
    time: string;
    stockName: string;
    source: string;
}
const NewsItem: React.FC<Props> = ({title, date, time, stockName, source}) => {
    return (
        <div>
            <div className={"text-indigo-600"}>
                {stockName}
            </div>
            <div className={"text-2xl"}>
                {title}
            </div>
            <div className={"text-gray-400"}>
                {source}.{time}
            </div>
        </div>
    )
}

export default NewsItem