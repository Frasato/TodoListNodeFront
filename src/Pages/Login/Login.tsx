import { IoMail } from "react-icons/io5";
import ButtonSing from "../../Components/ButtonSing/ButtonSing";
import TextFields from "../../Components/TextFields/TextFields";
import { LoginContainer, TitleLogin } from "./Login.style";
import { FaLock } from "react-icons/fa";
import { ChangeEvent, useState } from "react";
import { Navigate } from "react-router";

const Login = () => {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [redirect, setRedirect] = useState<boolean>(false);
    const [toHome, setToHome] = useState<boolean>(false);

    const handlerEmail = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
    const handlerPassword = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);

    const loginButton = async () => {
        if(email && password){

            const bodyRequested = {
                email: email,
                password: password
            }

            try{
                const response = await fetch("https://to-do-list-api-7qr4.onrender.com/auth/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(bodyRequested)
                });

                const data = await response.json();

                localStorage.setItem("user", JSON.stringify(data));

                if(response.ok){
                    setToHome(true);
                }
            }catch(err){
                console.error(err);
            }
        }
    }

    if(toHome){
        return <Navigate to="/"/>
    }

    if(redirect){
        return <Navigate to="/register"/>
    }

    return(
        <LoginContainer>
            <TitleLogin>Entrar</TitleLogin>
            <TextFields icon={<IoMail />} placeholder="Digite seu email" change={(e) => handlerEmail(e)}/>
            <TextFields icon={<FaLock />} placeholder="Digite sua senha" change={(e) => handlerPassword(e)}/>
            <ButtonSing buttonText="Entrar" textButton="Criar uma conta" buttonClick={loginButton} textButtonClick={() => setRedirect(true)}/>
        </LoginContainer>
    )
}

export default Login;