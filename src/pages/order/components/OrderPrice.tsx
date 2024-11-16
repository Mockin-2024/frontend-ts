import React from 'react'
import {formatNumber} from "../../../utils/formatNumber";
import useIsEditing from "../hooks/useIsEditing";

interface Props{
    price:string;
    setCurPrice: React.Dispatch<React.SetStateAction<number>>;
}

const OrderPrice: React.FC<Props> = ({price, setCurPrice}) => {
    const {isEditing, handleKeyDown, handleClick, handleChange, handleBlur} = useIsEditing(setCurPrice)

    return (
        <div>
            {isEditing ? (
                <input
                    type="number"
                    value={price}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    onKeyDown={handleKeyDown}
                    className={"text-3xl bg-gray-100 outline-none caret-indigo-600"}
                    autoFocus
                />
            ) : (
                <div className={"text-3xl cursor-pointer"} onClick={handleClick}>
                    {formatNumber(Number(price))}원
                </div>
            )}
        </div>
    )
}

export default OrderPrice