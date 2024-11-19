import React from 'react'

interface Props{
    name:string;
    price:string;
    type:string;
    currency:string;
}

const StockInfo: React.FC<Props> = ({name, price, type, currency}) => {
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
                {/*TODO: 한국 통화 기준으로 보여주고, 원래 가격은 작게 표시하기*/}
                {price}{currency}  
                
            </div>
        </div>
    )
}

export default StockInfo;