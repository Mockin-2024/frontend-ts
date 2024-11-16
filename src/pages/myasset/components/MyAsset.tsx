import React from 'react'

const MyAsset:React.FC = () => {
    return (
        <div className={"bg-gray-100 w-full p-4"}>
            <div className={"flex flex-col pb-4"}>
                <div>
                    내 투자
                </div>
                <div className={"text-3xl"}>
                    {}원
                </div>
            </div>
            <div className={"flex justify-between"}>
                <div>원금</div>
                <div>{}원</div>
            </div>
            <div className={"flex justify-between"}>
                <div>총 수익</div>
                <div>{}원</div>
            </div>
            <div className={"flex justify-between"}>
                <div>일간 수익</div>
                <div>{}원</div>
            </div>
        </div>
    )
}

export default MyAsset;