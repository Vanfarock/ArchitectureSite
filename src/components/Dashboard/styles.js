import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const DashboardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    padding: 5px;

    position: relative;

    overflow-x: hidden;
`;

export const CardContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    width: 100%;
    
    transition: all .4s ease;

    transform: translateX(${props => props.position}px);
    
    & > div:not(:last-child) {
        margin-right: 5px;
    }

    &:hover {
    }
`;

export const Arrow = styled(FontAwesomeIcon)`
    &.squared {
        width: 36px;
        height: 36px;
        padding: 2px;
    }

    border-radius: 50%;

    text-align: center;
    
    -webkit-box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.5);
    -moz-box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.5);
    box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.5);

    position: absolute;
    ${props => props.side}: 0;

    background: ${props => props.theme.backgroundColor};

    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    visibility: ${props => props.hide ? 'hidden' : 'visible'};

    transition: all .4s ease;
    top: 50%;
    transform: translateY(-50%);

    z-index: 10;

    &.material-icons.md-36 {
        font-size: 36px;
    }

    &:hover {
        background: ${props => props.theme.darkerBackgroundColor};
        cursor: pointer;
    }
`;
