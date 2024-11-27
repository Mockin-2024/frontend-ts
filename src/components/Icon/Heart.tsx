import React from "react";

import { GoHeartFill } from "react-icons/go";
import { GoHeart } from "react-icons/go";

import {useFavorite} from "../../context/FavoriteContext";

interface Props{
    exists:boolean;
    handleToggleFavorite: () => void;
}

const Heart: React.FC<Props> = ({exists, handleToggleFavorite}) => {

    return (
        <div onClick={handleToggleFavorite}>
            {exists? <GoHeartFill/> : <GoHeart/>}
        </div>
    )
}

export default Heart;