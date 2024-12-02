import { ButtonSignType } from "../../Types/ButtonSignType";
import { ActionButton, TextButton } from "./ButtonSing.styles";

const ButtonSing = (props: ButtonSignType) => {
    return (
        <>
            <ActionButton onClick={props.buttonClick}>{props.buttonText}</ActionButton>
            <TextButton onClick={props.textButtonClick}>{props.textButton}</TextButton>
        </>
    )
}

export default ButtonSing;