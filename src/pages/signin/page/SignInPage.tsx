import React from "react";
import { useState } from "react";
import InputField from "../../../components/common/InputField";
import Button from "../../../components/common/Button";
import useSignInClickHandler from "../hooks/useSignInClickHandler";
import {Link} from "react-router-dom";

const SignInPage: React.FC = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const buttonOnClick = useSignInClickHandler();

    return (
        <div className={"flex items-center justify-center h-screen flex-col"}>
            <div className={"pb-10 text-indigo-600 text-4xl font-bold"}>
                Mockin
            </div>

            <InputField
                type={"text"}
                placeholder={"이메일"}
                value={email}
                onChange={e => setEmail(e.target.value)}
            />

            <InputField
                type={"password"}
                placeholder={"비밀번호"}
                value={password}
                onChange={e => setPassword(e.target.value)}
            />

            <Button
            value={"로그인하기"}
            onClick={buttonOnClick}
            />

            <div className={"flex p-2 text-indigo-400 text-xl"}>
                <Link to={"/signup"} >회원가입</Link>
            </div>
        </div>
    )
}

export default SignInPage;
