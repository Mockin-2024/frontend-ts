import React, {useState} from "react";
import InputField from "../../components/common/InputField";
import Button from "../../components/common/Button";
import useSignInClickHandler from "./hooks/useSignInClickHandler";
import useAutoSignIn from "./hooks/useAutoSignIn";
import useNavigator from "../../hooks/useNavigator";
import {AppRoutes} from "../../enums/AppRoutes";

const SignInPage: React.FC = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const {handleClick} = useSignInClickHandler(email, password);
    const {navigateTo} = useNavigator()

    useAutoSignIn()
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
            onClick={handleClick}
            />

            <div className={"flex p-2 text-indigo-400 text-xl"}
            onClick={(e) => navigateTo(AppRoutes.SIGN_UP)}>
                회원가입
            </div>
        </div>
    )
}

export default SignInPage;
