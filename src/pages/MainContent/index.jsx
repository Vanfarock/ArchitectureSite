import React from 'react';
import HomePage from '../HomePage';
import LastPosts from '../LastPosts';
import Gallery from '../Gallery';
import Location from '../Location';
import { MainContainer } from './styles';

export default function MainContent() {
    return (
        <MainContainer>
            <HomePage />
            <LastPosts />
            <Gallery />
            <Location />
        </MainContainer>
    )
}