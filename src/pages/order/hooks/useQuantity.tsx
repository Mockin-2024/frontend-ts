import React, {useState} from 'react'

const useQuantity = () => {
    const [quantity, setQuantity] = useState<number>(1);
    const MAX_QUANTITY = 999999999;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value.replace(/,/g, '');

        if (/^\d*$/.test(inputValue) || inputValue === '') {
            const numericValue = Number(inputValue);
            setQuantity(numericValue > MAX_QUANTITY ? MAX_QUANTITY : numericValue);
        }
    };

    return {quantity, handleChange};
}

export default useQuantity;