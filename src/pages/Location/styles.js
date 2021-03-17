import styled from 'styled-components';

export const LocationContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    margin-top: var(--base-component-distance);
    padding: 0 var(--base-padding);
    width: 100%;
`;

export const Map = styled.iframe`
    border: 1px solid ${props => props.theme.darkerBackgroundColor};
    width: 100%;
`;