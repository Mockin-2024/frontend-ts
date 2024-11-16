import React, {useState} from 'react'

const useIsEditing = (setCurPrice: React.Dispatch<React.SetStateAction<number>>) =>{
    const [isEditing, setIsEditing] = useState(false);
    const MAX_QUANTITY = 999999999;

    const handleKeyDown = (e:React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            setIsEditing(false);
        }
    };

    const handleClick = () => {
        setIsEditing(true);
    };

    const handleBlur = () => {
        setIsEditing(false);
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;

        if (/^\d*$/.test(inputValue) || inputValue === '') {
            const numericValue = Number(inputValue);
            setCurPrice(numericValue > MAX_QUANTITY ? MAX_QUANTITY : numericValue);
        }
    };

    return {isEditing, handleKeyDown, handleClick, handleChange, handleBlur}
}

export default useIsEditing