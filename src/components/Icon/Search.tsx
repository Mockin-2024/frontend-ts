import React from "react";
import {IoSearch} from "react-icons/io5";
import useNavigator from "../../hooks/useNavigator";
import {AppRoutes} from "../../enums/AppRoutes";

const Search = () => {
    const {navigateTo} = useNavigator()

    const handleSearch = () =>{
        navigateTo(AppRoutes.SEARCH, {})
    }
    return (
        <div onClick={handleSearch}>
            <IoSearch/>
        </div>
    )
}

export default Search;