import React from 'react';
import Title from '../../components/Title';
import { LocationContainer,
         Map } from './styles';

export default function Location() {
    return (
        <LocationContainer>
            <Title>Localização</Title>
            <Map src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23932.352047746328!2d-49.09362316473539!3d-26.917284061306074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94df18c45a9b46ed%3A0xfb35a99c71d40295!2sCentro%2C%20Blumenau%20-%20SC%2C%2089010-203!5e0!3m2!1spt-BR!2sbr!4v1615227059644!5m2!1spt-BR!2sbr" 
                 title="Localização" 
                 width="600" 
                 height="450" 
                 allowfullscreen="false" 
                 loading="lazy" />
        </LocationContainer>
    )
}