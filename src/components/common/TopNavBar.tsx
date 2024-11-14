import React from "react";
import {IconType} from "react-icons";

interface Props {
    Left: IconType | null;
    RightFirst: IconType | null;
    RightSecond: IconType | null;
    RightThird: IconType | null;
}

const TopNavBar:React.FC<Props> = ({Left, RightFirst, RightSecond, RightThird}) => {
    return (
        <div className={"fixed top-0 left-0 right-0 z-10 flex justify-between items-center p-4 border-none text-3xl text-white bg-indigo-600"}>
            {Left ? <Left /> : <div className="w-16"/>}
            <div className="flex space-x-4">
                {RightFirst ? <RightFirst/> : <div className="w-16"/>}
                {RightSecond  ? <RightSecond /> : <div className="w-16"/>}
                {RightThird  ? <RightThird /> : <div className="w-16"/>}
            </div>
        </div>
    )
}

export default TopNavBar;