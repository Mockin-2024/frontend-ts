import {useState} from "react";
import {useFavorite} from "../../../context/FavoriteContext";

const useFavoriteExist = (init: boolean, excd:string, symb:string) => {
    const {toggleFavorite} = useFavorite()
    const [isExist, setIsExist] = useState<boolean>(init)

    const handleToggleFavorite = async () => {
        const result = await toggleFavorite(excd, symb);
        setIsExist(result);
    }

    return {isExist, handleToggleFavorite}
}

export default useFavoriteExist