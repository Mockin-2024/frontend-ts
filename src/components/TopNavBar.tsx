import React from "react";

interface Props<L, F, S, T> {
    types: {
        Left: React.ComponentType<L> | null;
        RightFirst: React.ComponentType<F> | null;
        RightSecond: React.ComponentType<S> | null;
        RightThird: React.ComponentType<T> | null;
    };
    components: {
        Left: L | null;
        RightFirst: F | null;
        RightSecond: S | null;
        RightThird: T | null;
    };
}

const TopNavBar = <L, F, S, T>({ types, components }: Props<L, F, S, T>) => {
    const { Left, RightFirst, RightSecond, RightThird } = types;
    const { Left: leftProps, RightFirst: rightFirstProps, RightSecond: rightSecondProps, RightThird: rightThirdProps } = components;

    return (
        <div className={"fixed top-0 left-0 right-0 z-10 flex justify-between items-center " +
            "p-4 bg-gray-200 border-b border-gray-300"}>
            {Left && leftProps ? <Left {...leftProps} /> : <div className="w-32"/>}
            <div className="flex space-x-2">
                {RightFirst && rightFirstProps ? <RightFirst {...rightFirstProps} /> : <div className="w-16"/>}
                {RightSecond && rightSecondProps ? <RightSecond {...rightSecondProps} /> : <div className="w-16"/>}
                {RightThird && rightThirdProps ? <RightThird {...rightThirdProps} /> : <div className="w-16"/>}
            </div>
        </div>
    )
}

export default TopNavBar;