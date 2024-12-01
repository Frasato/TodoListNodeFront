import styled from "styled-components";

export const CreationSectionBody = styled.div`
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    padding: 10px;
    gap: 10px;
    width: 450px;
    border-radius: 8px;
    margin-top: 20px;
`;

export const TitleField = styled.input`
    width: 90%;
`;

export const TextField = styled.textarea`
    width: 90%;
    height: 100px;
    resize: none;
`;

export const CreationButton = styled.button`
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    width: 100px;
    height: 40px;
    border-radius: 4px;

    &:hover{
        cursor: pointer;
    }
`;