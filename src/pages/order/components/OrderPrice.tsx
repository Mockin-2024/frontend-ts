import React, {useRef, useState} from 'react'
import {formatNumber} from "../../../utils/formatNumber";

interface Props{
    price:string;
    setCurPrice: React.Dispatch<React.SetStateAction<number>>;
}

const OrderPrice: React.FC<Props> = ({price, setCurPrice}) => {
    const [isEditing, setIsEditing] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleKeyDown = (e:React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            setIsEditing(false);
        }
    };

    const handleClick = () => {
        setIsEditing(true);
        setTimeout(() => {
            inputRef.current?.focus();
        }, 0);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;

        if (/^\d*$/.test(inputValue)) {
            setCurPrice(Number(inputValue));
        }
    };

    return (
        <div>
            {isEditing ? (
                <input
                    type="number"
                    value={price}
                    onChange={handleChange}
                    onBlur={() => setIsEditing(false)}
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