import styled from "@emotion/styled";

export const Nav = styled.nav`
    padding-left: 2rem;
    
    a {
        font-size: 1.8rem;
        margin-left: 2rem;
        color: var(--grey2);
        font-family: 'PT Sans', sans-serif;

        &:last-of-type {
            margin-right: 0;
        }
    }
`;