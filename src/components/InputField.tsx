import React from 'react';

interface InputFieldProps {
    type: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({ type, placeholder, value, onChange }) => {
    return (
        <div className={"flex p-2 justify-center w-full"}>
            <input
                className={"p-4 bg-indigo-300 text-2xl text-white placeholder-white " +
                    "outline-none rounded-3xl border-none w-3/4"}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

export default InputField;
