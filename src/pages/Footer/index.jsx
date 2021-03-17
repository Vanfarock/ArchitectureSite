import React from 'react';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';
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
                    <FooterMenuTitle><Link to="/contacts">Contatos</Link></FooterMenuTitle>
                    <FooterMenuContent>(47)99999-9999</FooterMenuContent>
                    <FooterMenuContent>(47)99999-9999</FooterMenuContent>
                    <FooterRow>
                        <FontAwesomeIcon size="2x" icon={["fab", "facebook"]}  />
                        <FontAwesomeIcon size="2x" icon={["fab", "instagram"]}  />
                    </FooterRow>
                </FooterColumn>
                <FooterColumn>
                    <FooterMenuTitle><Link to="/contacts">Endereço</Link></FooterMenuTitle>
                    <FooterMenuContent>Rua XXXXXXXXX, 111</FooterMenuContent>
                    <FooterMenuContent>Blumenau, Santa Catarina, Brasil</FooterMenuContent>
                </FooterColumn>
                <FooterColumn>
                    <FooterMenuTitle><Link to="/cases">Cases</Link></FooterMenuTitle>
                </FooterColumn>
                <FooterColumn>
                    <Button>Solicitar orçamento</Button>
                </FooterColumn>
            </FooterContent>
        </FooterContainer>
    );
}