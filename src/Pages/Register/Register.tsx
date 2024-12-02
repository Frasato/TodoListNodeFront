import ButtonSing from "../../Components/ButtonSing/ButtonSing";
import TextFields from "../../Components/TextFields/TextFields";
import { RegisterContainer, TitleRegister } from "./Register.styles";
import { IoMail } from "react-icons/io5";
import { IoMdPerson } from "react-icons/io";
import { FaLock } from "react-icons/fa";
import { ChangeEvent, useState } from "react";
import { Navigate } from "react-router";

const Register = () =>{

    const [username, setUsername] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [redirect, setRedirect] = useState<boolean>(false);

    const handlerUsername = (e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value);
    const handlerEmail = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
    const handlerPassword = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);

    const registerUser = async () =>{
        if(username && email && password){

            const bodyRequested = {
                username: username,
                email: email,
                password: password
            }

            try{
                const response = await fetch("https://to-do-list-api-7qr4.onrender.com/auth/register", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(bodyRequested)
                });

                const data = await response.json();

                if(response.ok){
                    setRedirect(true);
                }else{
                    console.log("Error: " + data);
                }
            }catch(err){
                console.error(err);
            }
        }
    }

    if(redirect){
        return <Navigate to="/login"/>
    }

    return(
        <RegisterContainer>
            <TitleRegister>Registrar</TitleRegister>
            <TextFields icon={<IoMdPerson />} placeholder="Nome de usuário..." change={(e: ChangeEvent<HTMLInputElement>) => handlerUsername(e)}/>
            <TextFields icon={<IoMail />} placeholder="Seu melhor email..." change={(e: ChangeEvent<HTMLInputElement>) => handlerEmail(e)}/>
            <TextFields icon={<FaLock />} placeholder="Crie uma senha bem forte..." change={(e: ChangeEvent<HTMLInputElement>) => handlerPassword(e)}/>
            <ButtonSing buttonText="Registrar" textButton="Fazer Login" buttonClick={registerUser} textButtonClick={() => setRedirect(true) }/>
        </RegisterContainer>
    )
}

export default Register;