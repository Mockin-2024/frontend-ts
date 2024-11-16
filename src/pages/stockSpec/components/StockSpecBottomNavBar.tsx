import React from "react";

type HandleOrderSelectType = (orderType: string) => void;

interface Props{
    handleOrderSelect: HandleOrderSelectType;
}

const StockSpecBottomNavBar: React.FC<Props> = ({handleOrderSelect}) => {
    return (
        <div className={"fixed bottom-0 left-0 right-0 flex justify-between p-4"}>
            <div className={"rounded-2xl bg-blue-600 text-white px-10 py-4 w-full text-center mx-2"}
                 onClick={(e) => handleOrderSelect("판매")}>
                판매하기
            </div>
            <div className={"rounded-2xl bg-red-500 text-white px-10 py-4 w-full text-center mx-2"}
                 onClick={(e) => handleOrderSelect("구매")}>
                구매하기
            </div>
        </div>
    )
}

export default StockSpecBottomNavBar;