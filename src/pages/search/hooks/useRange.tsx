import {ChangeEvent, useState} from "react";

const useRange = (optionName: string, minLimit: number, maxLimit:number) => {
    const [startRange, setStartRange] = useState<number>(0);
    const [endRange, setEndRange] = useState<number>(0);
    const [isCheck, setIsCheck] = useState<boolean>(false);

    const handleStart = (e: ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value.replace(/,/g, '');

        if (/^\d*$/.test(inputValue) || inputValue === '') {
            const numericValue = Number(inputValue);

            if (numericValue < minLimit) {
                setStartRange(minLimit);
            } else if (numericValue > maxLimit) {
                setStartRange(maxLimit);
            } else {
                setStartRange(numericValue);
            }
        }

        if (inputValue) {
            const trimmedValue = String(Number(inputValue));
            e.target.value = trimmedValue;
        }
    }

    const handleEnd = (e: ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value.replace(/,/g, '');

        if (/^\d*$/.test(inputValue) || inputValue === '') {
            const numericValue = Number(inputValue);
            if (numericValue < minLimit) {
                setEndRange(minLimit);
            } else if (numericValue > maxLimit) {
                setEndRange(maxLimit);
            } else {
                setEndRange(numericValue);
            }
        }
        if (inputValue) {
            const trimmedValue = String(Number(inputValue));
            e.target.value = trimmedValue;
        }
    }

    const handleCheck = () => {
        setIsCheck(prev => !prev);
    };

    return {optionName, startRange, endRange, isCheck, handleStart, handleEnd, handleCheck}
}
export default useRange