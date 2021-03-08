import React from 'react';
import { MenuContainer,
         MenuLeftSide,
        //  MenuIcon,
         Logo,
         MenuList,
         MenuListItem } from './styles';

export default function Menu() {
    return (
        <MenuContainer>
            <MenuLeftSide>
                <Logo className="teste">Bruna Eliza Martins Balestieri</Logo>
            </MenuLeftSide>
            <MenuList>
                <MenuListItem>Cases</MenuListItem>
                <MenuListItem>Contato</MenuListItem>
                <MenuListItem>Solicitar cotação</MenuListItem>
            </MenuList>
        </MenuContainer>
    )
}