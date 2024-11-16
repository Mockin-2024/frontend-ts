import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import {useNavigate} from "react-router-dom";

const BackSpace = () => {
    const navigate = useNavigate();

    const handleBBackSpace = () => {
        navigate(-1);
    }

    return (
        <div onClick={handleBBackSpace}>
            <FiArrowLeft/>
        </div>
    )
}

export default BackSpace