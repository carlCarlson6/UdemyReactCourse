import styled from '@emotion/styled';

export const HeaderControlContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const HeaderContainer = styled.div`
    max-width: 1200px;
    width: 95%;
    margin: 0 auto;
    @media(min-width:768px) {
        display: flex;
        justify-content: space-between;
    }
`;

export const HeaderStyled = styled.header`
    border-bottom: 2px solid var(--grey3);
    padding: 1rem 0;
`;