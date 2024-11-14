import React from 'react';

interface Props {
    value: string
}

const Button : React.FC<Props> = ({value}) =>
{
    return(
        <div className={"flex p-2 justify-center w-full"}>
            <button className={"p-4 bg-indigo-600 text-white text-2xl outline-none rounded-3xl border-none w-3/4"}>
                {value}
            </button>
        </div>
    )
}

export default Button