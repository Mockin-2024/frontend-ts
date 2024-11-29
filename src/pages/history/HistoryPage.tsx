import React from 'react'

import HistoryTopNavBar from "./components/HistoryTopNavBar";
import HistoryList from "./components/HistoryList";

import useHistoryList from "./hooks/useHistoryList";
import useNotHistoryList from "./hooks/useNotHistoryList";
import NotHistoryList from "./components/NotHistoryList";

const HistoryPage = () => {
    const {history} = useHistoryList();
    const {notHistory} = useNotHistoryList()
    return (
        <div>
            <HistoryTopNavBar/>
            <div className={"pt-16"}>
                <HistoryList history={history}/>
                <NotHistoryList history={notHistory}/>
            </div>
        </div>
    )
}

export default HistoryPage