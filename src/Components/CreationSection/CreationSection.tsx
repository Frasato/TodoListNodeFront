import { CreationButton, CreationSectionBody, TextField, TitleField } from "./CreationSection.styles";

const CreationSection = () => {
    return(
        <CreationSectionBody>
            <TitleField placeholder="Titulo da Tarefa..."/>
            <TextField placeholder="Descreva a Tarefa..."/>
            <CreationButton>Criar Tarefa</CreationButton>
        </CreationSectionBody>
    )
}

export default CreationSection;