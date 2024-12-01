import { IoMail } from "react-icons/io5";
import ButtonSing from "../../Components/ButtonSing/ButtonSing";
import TextFields from "../../Components/TextFields/TextFields";
import { LoginContainer, TitleLogin } from "./Login.style";
import { FaLock } from "react-icons/fa";

const Login = () => {
    return(
        <LoginContainer>
            <TitleLogin>Entrar</TitleLogin>
            <TextFields icon={<IoMail />} placeholder="Digite seu email"/>
            <TextFields icon={<FaLock />} placeholder="Digite sua senha"/>
            <ButtonSing buttonText="Entrar" textButton="Criar uma conta"/>
        </LoginContainer>
    )
}

export default Login;