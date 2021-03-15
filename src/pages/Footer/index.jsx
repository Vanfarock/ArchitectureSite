import React from 'react';
import Button from '../../components/Button';
import { FooterContainer,
         FooterContent,
         FooterColumn,
         FooterRow,
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
                    <FooterRow>
                        <FontAwesomeIcon size="2x" icon={["fab", "facebook"]}  />
                        <FontAwesomeIcon size="2x" icon={["fab", "instagram"]}  />
                    </FooterRow>
                </FooterColumn>
                <FooterColumn>
                    <FooterMenuTitle>Endereço</FooterMenuTitle>
                    <FooterMenuContent>Rua XXXXXXXXX, 111</FooterMenuContent>
                    <FooterMenuContent>Blumenau, Santa Catarina, Brasil</FooterMenuContent>
                </FooterColumn>
                <FooterColumn>
                    <Button>Solicitar orçamento</Button>
                </FooterColumn>
            </FooterContent>
        </FooterContainer>
    );
}