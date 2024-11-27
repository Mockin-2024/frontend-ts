import React, {useContext, useEffect, useState} from "react";
import apiRequest from "../utils/apiRequest";
import {Endpoint} from "../enums/Endpoint";
import {Http} from "../enums/Http";
import useRestAPI from "../hooks/useRestAPI";
import {Favorite} from "../pages/favorite/types/Favorite";
import Alert from "../components/common/Alert";
import {AlertIcon} from "../enums/AlertIcon";

interface FavoriteContextType {
    favoriteList:Favorite[];
    toggleFavorite:(excd:string, symb:string) => Promise<boolean>;
}

const FavoriteContext = React.createContext<FavoriteContextType| undefined>(undefined);
export const FavoriteProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [favoriteList, setFavoriteList] = useState<Favorite[]>([]);

    useEffect(() => {
        const fetchFavoriteList = async () => {
            const {data, error} = await apiRequest(Endpoint.GET_FAVORITE_READ, Http.GET, {}, true)
            if (error) return;
            setFavoriteList(data.output1)
        }
        fetchFavoriteList()
    }, [])

    const toggleFavorite = async (excd:string, symb:string): Promise<boolean> => {
        const {data, error} = await apiRequest(Endpoint.POST_FAVORITE_SELECT, Http.POST, {
            excd: excd,
            symb: symb,
        }, true)

        if (error) {
            await Alert("즐겨찾기 추가/삭제 실패", error.toString(), AlertIcon.ERROR)
            return false
        }

        return data.message === "Add Complete";
    }

    return (
        <FavoriteContext.Provider value={{favoriteList, toggleFavorite}}>
            {children}
        </FavoriteContext.Provider>
    );
};

export const useFavorite = () => {
    const context = useContext(FavoriteContext);
    if (!context) {
        throw new Error('useFavorite must be used within a CurrencyProvider');
    }
    return context;
};
