import React from 'react'

interface Props{
    name:string;
    price:string;
    type:string;
}

const StockInfo: React.FC<Props> = ({name, price, type}) => {
    return(
        <div className={"flex flex-col"}>
            <div className={"flex flex-row"}>
                <div className={"text-xl"}>
                    {name}
                </div>
                <div className={"text-xs"}>
                    {type}
                </div>
            </div>
            <div className={"text-4xl"}>
                {price}원
            </div>
        </div>
    )
}

export default StockInfo;