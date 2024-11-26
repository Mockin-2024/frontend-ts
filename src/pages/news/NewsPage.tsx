import React from "react";

import {NewsData} from "../main/types/NewsData";
import NewsItem from "../../components/item/NewsItem";
import NewsTopNavBar from "./components/NewsTopNavBar";

import {useLocation} from "react-router-dom";

const NewsPage: React.FC = () => {
    const newsList: NewsData[] = useLocation().state || []
    return (
        <div >
            <NewsTopNavBar />
            <div className="flex flex-col pt-20 p-4">
                <div className={"text-xl"}>
                    종목 뉴스
                </div>

                {newsList.length > 0 ? (
                    newsList.map((item) => (
                        <div>
                            <NewsItem
                                title={item.title}
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
            </div>
        </div>
    )
}

export default NewsPage;