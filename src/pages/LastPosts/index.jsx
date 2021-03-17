import React from 'react';
import IntroductionImage from '../../assets/images/introduction-image.jpg';
import Dashboard from '../../components/Dashboard';
import Title from '../../components/Title';
import { LastPostsContainer } from './styles';

export default function LastPosts() {
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
        <LastPostsContainer id="lastPosts">
            <Title>Últimas postagens</Title>
            <Dashboard name="LastPosts" data={data} />
        </LastPostsContainer>
    )
}