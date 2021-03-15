import styled from 'styled-components';

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    padding: 0 var(--base-padding);
`;

export const CasesContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 5px;
`;

export const Case = styled.img`
    max-width: 100%;
`;
