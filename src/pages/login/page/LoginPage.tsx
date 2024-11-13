import React from "react";
import { useState } from "react";
import InputField from "../../../components/InputField";

const LoginPage: React.FC = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    return (
        <div className={"flex items-center justify-center h-screen flex-col"}>
            <div className={"pb-10 text-indigo-600 text-4xl font-bold"}>
                Sign in
            </div>

            <InputField
                type={"text"}
                placeholder={"email"}
                value={email}
                onChange={e => setEmail(e.target.value)} />

            <InputField
                type={"password"}
                placeholder={"password"}
                value={password}
                onChange={e => setPassword(e.target.value)} />

            <div className={"flex p-2 justify-center w-full"}>
                <button
                className={"p-4 bg-indigo-600 text-white text-2xl outline-none rounded-3xl border-none w-3/4"}>
                    Sign In
                </button>
            </div>
        </div>
    )
}

export default LoginPage