import styled from "styled-components";

export const HomeBody = styled.section`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ItemsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const MenuContainer = styled.div`
    margin: 40px 0 10px 0;

    .link{
        color: white;
        margin: 0 15px 0 15px;

        &:hover{
            color: gainsboro;
            text-decoration: underline;
        }
    }
`;