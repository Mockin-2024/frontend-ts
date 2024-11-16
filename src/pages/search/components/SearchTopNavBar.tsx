import React from "react";
import BackSpace from "../../../components/Icon/BackSpace";
import InputField from "../../../components/common/InputField";

const SearchTopNavBar: React.FC = () => {
    const [stockName, setStockName] = React.useState("");
    return (
        <div className={"fixed top-0 left-0 right-0 z-10 flex p-4 justify-center items-center border-none bg-indigo-600"}>
            <div className={"text-3xl text-white pr-2"}>
                <BackSpace/>
            </div>
            <div className={"flex text-xl  w-full text-black "}>
                <input
                    className={"flex pl-2 w-full outline-none border-none rounded-xl"}
                    type={"text"}
                    placeholder={"원하는 주식을 검색해보세요"}
                    value={stockName}
                    onChange={(e) => setStockName(e.target.value)}/>
            </div>

        </div>
    )
}

export default SearchTopNavBar