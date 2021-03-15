import React from 'react';
import { MenuContainer,
         MenuLeftSide,
         Logo,
         MenuList,
         MenuListItem,
         MenuListItemLink,} from './styles';

export default function Menu() {
    return (
        <MenuContainer>
            <MenuLeftSide>
                <Logo className="teste">Random name</Logo>
            </MenuLeftSide>
            <MenuList>
                <MenuListItem>
                    <MenuListItemLink to="/cases">Cases</MenuListItemLink>
                </MenuListItem>
                <MenuListItem>
                    <MenuListItemLink to="/contacts">Contato</MenuListItemLink>
                </MenuListItem>
                <MenuListItem>
                    <MenuListItemLink to="/budget">Solicitar orçamento</MenuListItemLink>
                </MenuListItem>
            </MenuList>
        </MenuContainer>
    )
}