import React from 'react'

const Balance = () =>{
    return(
        <div className={"pt-20 p-4"}>
            <div className={""}>
                내 투자
            </div>

            <div className={"text-3xl"}>
                {}원
            </div>
            <div>
                분류 기준
            </div>
            <div className={"flex justify-between"}>
                <div className={"text-xl "}>
                    나스닥
                </div>
                <div className={"flex-col text-xl"}>
                    <div>
                        {}원
                    </div>
                    <div>
                        {}({}%)
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Balance