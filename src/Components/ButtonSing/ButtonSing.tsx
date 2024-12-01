import { ButtonSignType } from "../../Types/ButtonSignType";
import { ActionButton, TextButton } from "./ButtonSing.styles";

const ButtonSing = (props: ButtonSignType) => {
    return (
        <>
            <ActionButton>{props.buttonText}</ActionButton>
            <TextButton>{props.textButton}</TextButton>
        </>
    )
}

export default ButtonSing;