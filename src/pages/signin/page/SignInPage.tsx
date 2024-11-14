import React from "react";
import { useState } from "react";
import InputField from "../../../components/InputField";
import Button from "../../../components/Button";
import useSignInClickHandler from "../hooks/useSignInClickHandler";

const SignInPage: React.FC = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const buttonOnClick = useSignInClickHandler();

    return (
        <div className={"flex items-center justify-center h-screen flex-col"}>
            <div className={"pb-10 text-indigo-600 text-4xl font-bold"}>
                Sign in
            </div>

            <InputField
                type={"text"}
                placeholder={"email"}
                value={email}
                onChange={e => setEmail(e.target.value)}
            />

            <InputField
                type={"password"}
                placeholder={"password"}
                value={password}
                onChange={e => setPassword(e.target.value)}
            />

            <Button
            value={"Sign In"}
            onClick={buttonOnClick}
            />
        </div>
    )
}

export default SignInPage;
