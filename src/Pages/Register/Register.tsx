import ButtonSing from "../../Components/ButtonSing/ButtonSing";
import TextFields from "../../Components/TextFields/TextFields";
import { RegisterContainer, TitleRegister } from "./Register.styles";
import { IoMail } from "react-icons/io5";
import { IoMdPerson } from "react-icons/io";
import { FaLock } from "react-icons/fa";

const Register = () =>{
    return(
        <RegisterContainer>
            <TitleRegister>Registrar</TitleRegister>
            <TextFields icon={<IoMdPerson />} placeholder="Nome de usuário..."/>
            <TextFields icon={<IoMail />} placeholder="Seu melhor email..."/>
            <TextFields icon={<FaLock />} placeholder="Crie uma senha bem forte..."/>
            <ButtonSing buttonText="Registrar" textButton="Fazer Login"/>
        </RegisterContainer>
    )
}

export default Register;