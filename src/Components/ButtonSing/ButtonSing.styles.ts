import styled from "styled-components";

export const ActionButton = styled.button`
    width: 10%;
    height: 4%;
    border-radius: 8px;
    background-color: white;

    &:hover{
        cursor: pointer;
        background-color: gainsboro;
    }
`;

export const TextButton = styled.a`
    color: white;
    text-decoration: underline;
    font-size: 14px;

    &:hover{
        cursor: pointer;
        color: gainsboro;
    }
`;