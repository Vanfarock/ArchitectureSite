import styled from 'styled-components';

export const LocationContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    margin-top: var(--base-component-distance);
    padding: 0 var(--base-padding);
`;

export const Map = styled.iframe`
    width: 100%;
`;