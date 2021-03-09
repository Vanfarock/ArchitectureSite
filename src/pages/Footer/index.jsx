import React from 'react';
import Button from '../../components/Button';
import { FooterContainer,
         FooterContent,
         FooterColumn,
         FooterMenuTitle,
         FooterMenuContent } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Footer() {
    return (
        <FooterContainer>
            <FooterContent>
                <FooterColumn>
                    <FooterMenuTitle>Projetos</FooterMenuTitle>
                    <FooterMenuTitle>Galeria</FooterMenuTitle>
                    <FooterMenuTitle>Últimas postagens</FooterMenuTitle>
                </FooterColumn>
                <FooterColumn>
                    <FooterMenuTitle>Contatos</FooterMenuTitle>
                    <FooterMenuContent>(47)99999-9999</FooterMenuContent>
                    <FooterMenuContent>(47)99999-9999</FooterMenuContent>
                </FooterColumn>
                <FooterColumn>
                    <FooterMenuTitle>Endereço</FooterMenuTitle>
                    <FooterMenuContent>Rua XXXXXXXXX, 111</FooterMenuContent>
                    <FooterMenuContent>Blumenau, Santa Catarina, Brasil</FooterMenuContent>
                </FooterColumn>
                <FooterColumn>
                    <FontAwesomeIcon icon={["fab", "facebook"]}  />
                    <FontAwesomeIcon icon={["fab", "instagram"]}  />
                </FooterColumn>
                <FooterColumn>
                    <Button>Solicitar cotação</Button>
                </FooterColumn>
            </FooterContent>
        </FooterContainer>
    );
}