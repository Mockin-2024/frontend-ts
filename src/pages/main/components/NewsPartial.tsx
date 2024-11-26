import React from "react";
import NewsItem from "../../../components/item/NewsItem";
import {NewsData} from "../types/NewsData";

interface Props{
    newsList: NewsData[];
    moreNews: (() => void) | undefined;
}

const NewsPartial: React.FC<Props> = ({newsList, moreNews}) => {
    return(
        <div>
            <div className={"pt-12 text-xl"}>
                추천 뉴스
            </div>
            {newsList.length > 0 ? (
                newsList.slice(0, 5).map((item) => (
                    <div>
                        <NewsItem
                            title={item.title}
                            date={item.data_dt}
                            time={item.data_tm}
                            stockName={item.symb_name}
                            source={item.source}
                        />
                    </div>
                ))
            ) : (
                <div>
                    표시할 뉴스가 없습니다.
                </div>
            )}
            <div className={"flex justify-center text-gray-800"}
            onClick={moreNews}>
                더 보기
            </div>
        </div>
    )
}

export default NewsPartial;