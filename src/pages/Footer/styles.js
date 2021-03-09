import styled from 'styled-components';

export const FooterContainer = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    background: ${props => props.theme.darkerBackgroundColor};

    padding: 5px var(--base-padding);
    margin-top: var(--base-component-distance);
`;

export const FooterContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    
    padding: 30px 0;

    width: 100%;
`;

export const FooterColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    /* flex: 1; */
`;

export const FooterMenuTitle = styled.p`
    font-weight: bold;
    font-size: 18px;

    padding: 5px 0;
`;

export const FooterMenuContent = styled.p`
    padding: 5px 0;

    font-size: 16px;
`;

export const Copyright = styled.p`
    font-size: 12px;
    text-align: center;
`;