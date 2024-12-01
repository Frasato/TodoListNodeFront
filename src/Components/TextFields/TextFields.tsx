import { TextFieldsType } from "../../Types/TextFieldsType";
import { TextField, TextFieldsContainer } from "./TextFields.styles";

const TextFields = (props: TextFieldsType) =>{
    return(
        <TextFieldsContainer>
            {props.icon}
            <TextField placeholder={props.placeholder}/>
        </TextFieldsContainer>
    )
}

export default TextFields;