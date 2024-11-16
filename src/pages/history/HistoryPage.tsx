import React from 'react'
import HistoryTopNavBar from "./components/HistoryTopNavBar";
import HistoryList from "./components/HistoryList";

const HistoryPage = () => {
    return (
        <div>
            <HistoryTopNavBar/>
            <div className={"pt-16"}>
                <HistoryList/>
            </div>
        </div>
    )
}

export default HistoryPage