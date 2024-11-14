import React from "react";
import { useState } from "react";
import InputField from "../../components/common/InputField";
import Button from "../../components/common/Button";
import useSignInClickHandler from "./hooks/useSignInClickHandler";

const SignUpPage: React.FC = () => {
    const [email, setEmail] = useState<string>("");
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [passwordRe, setPasswordRe] = useState<string>("");
    const [verifyCode, setVerifyCode] = useState<string>("");
    const buttonOnClick = useSignInClickHandler();

    return (
        <div className={"flex flex-col items-center justify-center w-full pt-4"}>
            <div className={"pb-10 text-indigo-600 text-4xl font-bold"}>
                회원가입
            </div>

            <InputField
                type={"text"}
                placeholder={"이메일"}
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            
            <Button
                value={"이메일 인증하기"}
                onClick={buttonOnClick}
            />

            <InputField
                type={"text"}
                placeholder={"인증코드"}
                value={verifyCode}
                onChange={e => setVerifyCode(e.target.value)}
            />

            <Button
                value={"인증코드 검증하기"}
                onClick={buttonOnClick}
            />

            <InputField
                type={"text"}
                placeholder={"이름"}
                value={username}
                onChange={e => setUsername(e.target.value)}
            />

            <InputField
                type={"password"}
                placeholder={"비밀번호"}
                value={password}
                onChange={e => setPassword(e.target.value)}
            />

            <InputField
                type={"password"}
                placeholder={"비밀번호 확인"}
                value={passwordRe}
                onChange={e => setPasswordRe(e.target.value)}
            />

            <div className={"flex text-indigo-400 text-xl p-2"}>
                비밀번호가 일치합니다!
            </div>

            <Button
            value={"가입하기"}
            onClick={buttonOnClick}
            />
        </div>
    )
}

export default SignUpPage