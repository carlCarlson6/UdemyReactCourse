import styled from "@emotion/styled";

export const H1 = styled.h1`
    text-align: center;
    margin-top: 5rem;
`;

export const ProductContainer = styled.div`
    @media (min-width:768px) {
        display: grid;
        grid-template-columns: 2fr 1fr;
        column-gap: 2rem;
    }
`;

export const CommentsListTitle = styled.h2`
    margin: 2rem 0;
`;

export const VotesContainer = styled.div`
    margin-top: 5rem;
    text-align: center; 
`;
