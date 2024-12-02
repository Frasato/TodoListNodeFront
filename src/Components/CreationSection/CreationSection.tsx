import { CreationSectionType } from "../../Types/CreationSectionType";
import { CreationButton, CreationSectionBody, TextField, TitleField } from "./CreationSection.styles";

const CreationSection = (props: CreationSectionType) => {
    return(
        <CreationSectionBody>
            <TitleField placeholder="Titulo da Tarefa..." onChange={props.changeTitle}/>
            <TextField placeholder="Descreva a Tarefa..." onChange={props.changeDescription}/>
            <CreationButton onClick={props.click}>Criar Tarefa</CreationButton>
        </CreationSectionBody>
    )
}

export default CreationSection;