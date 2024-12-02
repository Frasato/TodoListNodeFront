import styled from "styled-components";

export const ItemContainer = styled.div`
    background-color: white;
    width: 450px;
    border-radius: 8px;
    padding: 10px;
    margin: 40px 0 0 0;
`;

export const TaskTitle = styled.h1`
    font-weight: 600;
    font-size: 20px;
    margin-bottom: 10px;
`;

export const TaskText = styled.p`
    margin-bottom: 10px;

`;

export const ActionsButtonsContainer = styled.div`
    .delete_button{
        color: rgba(0, 0, 0, 0.5);
        margin-left: 15px;
        font-size: 17px;
        
        &:hover{
            cursor: pointer;
            color: red;
        }
    }
`;

export const StatusButton = styled.input.attrs({type: "checkbox"})`
    width: 17px;
    height: 17px;
`;