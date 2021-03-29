import React from 'react';
import { Link } from 'react-router-dom';
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
                <Logo className="teste"><Link to="/">Random name</Link></Logo>
            </MenuLeftSide>
            <MenuList>
                <MenuListItem>
                    <MenuListItemLink to="/cases">Cases</MenuListItemLink>
                </MenuListItem>
                <MenuListItem>
                    <MenuListItemLink to="/contacts">Contato</MenuListItemLink>
                </MenuListItem>
                <MenuListItem>
                    <MenuListItemLink to="/about">Sobre</MenuListItemLink>
                </MenuListItem>
                <MenuListItem>
                    <MenuListItemLink to="/budget">Solicitar orçamento</MenuListItemLink>
                </MenuListItem>
            </MenuList>
        </MenuContainer>
    )
}