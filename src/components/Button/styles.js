import styled from 'styled-components';

export const StyledButton = styled.button`
    font-size: 16px;
    font-weight: bold;

    background: ${props => props.theme.primaryColor};
    color: ${props => props.theme.fontColorOnPrimary};
    border: none;
    border-radius: 3px;

    margin-bottom: 30px;
    padding: 15px 30px;

    width: ${props => props.width};

    transition: all .4s ease;

    &:hover {
        cursor: pointer;

        background: ${props => props.theme.darkerPrimaryColor};
    }
`;