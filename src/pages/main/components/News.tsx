import React from "react";
import NewsItem from "../../../components/item/NewsItem";

const News = () => {
    return(
        <div >
            <NewsItem title={"제목"} date={"2000"} time={"1010"} stockName={"애플"} source={"한화"}/>
        </div>
    )
}

export default News;