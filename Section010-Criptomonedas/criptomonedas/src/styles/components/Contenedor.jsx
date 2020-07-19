import styled from '@emotion/styled';

export const Contenedor = styled.div`
    max-width: 900px;
    margin: 0 auto;

    @media (min-width:992px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 2rem;
    }
`;