import styled from 'styled-components';

export const MenuContainer = styled.nav`
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    -webkit-box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.5);
    -moz-box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.5);
    box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.5);

    padding: 0 var(--base-padding);
    /* padding: 15px 20%; */

    margin-bottom: 30px;
`;

export const MenuLeftSide = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const MenuIcon = styled.span`
    padding: 10px;
    transition: all .4s ease;
    border-radius: 50%;

    &:hover {
        cursor: pointer;

        background: rgba(0, 0, 0, .2);
    }
`;

export const Logo = styled.h1`

`;

export const MenuList = styled.ul`
    display: flex;
    flex-direction: row;
`;

export const MenuListItem = styled.li`
    font-weight: lighter;
    text-decoration: none;
    padding: 20px;
    
    &:hover {
        background-color: ${props => props.theme.primaryColor};

        cursor: pointer;
    }
`;

