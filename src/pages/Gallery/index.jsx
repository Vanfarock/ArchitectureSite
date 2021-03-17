import React from 'react';
import IntroductionImage from '../../assets/images/introduction-image.jpg';
import Title from '../../components/Title';
import Dashboard from '../../components/Dashboard';
import { GalleryContainer } from './styles';

export default function Gallery() {
    const data = [{
        img: IntroductionImage,
        title: 'Teste title',
        description: 'Teste description'
    },
    {
        img: IntroductionImage,
        title: 'Teste title',
        description: 'Teste description'
    },
    {
        img: IntroductionImage,
        title: 'Teste title',
        description: 'Teste description'
    },
    {
        img: IntroductionImage,
        title: 'Teste title',
        description: 'Teste description'
    },
    {
        img: IntroductionImage,
        title: 'Teste title',
        description: 'Teste description'
    },
    {
        img: IntroductionImage,
        title: 'Teste title',
        description: 'Teste description'
    },];

    return (
        <GalleryContainer id="gallery">
            <Title>Galeria</Title>
            <Dashboard name="Gallery" data={data} />
        </GalleryContainer>
    )
}