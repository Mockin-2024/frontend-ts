import React from 'react'
import HistoryTopNavBar from "./components/HistoryTopNavBar";
import HistoryList from "./components/HistoryList";
import useHistoryList from "./hooks/useHistoryList";

const HistoryPage = () => {
    const {history} = useHistoryList();

    return (
        <div>
            <HistoryTopNavBar/>
            <div className={"pt-16"}>
                <HistoryList history={history}/>
            </div>
        </div>
    )
}

export default HistoryPage