import { ItemType } from "../../Types/ItemType";
import { ActionsButtonsContainer, ItemContainer, StatusButton, TaskText, TaskTitle } from "./Item.styles"
import { FaTrash } from "react-icons/fa";

const Item = (props: ItemType) => {
    return(
        <ItemContainer>
            <TaskTitle>{props.title}</TaskTitle>
            <TaskText>{props.description}</TaskText>

            <ActionsButtonsContainer>
                <StatusButton 
                    checked={props.status}
                    onChange={props.statusChange}
                />
                <FaTrash className="delete_button" onClick={props.deleteClick}/>
            </ActionsButtonsContainer>
        </ItemContainer>
    )
}

export default Item;