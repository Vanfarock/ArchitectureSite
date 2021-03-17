import React from 'react';
import IntroductionImage from '../../assets/images/introduction-image.jpg';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';
import { HomeContainer,
         LogoName,
         IntroductionImageElement } from './styles';

export default function HomePage() {
    return (
        <HomeContainer>
            <LogoName>Random name</LogoName>
            <Button><Link to="/cases">Cases</Link></Button>
            <IntroductionImageElement src={IntroductionImage} alt="Imagem de introdução" />
        </HomeContainer>
    )
}