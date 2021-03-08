import React from 'react';
import { StyledTitle } from './styles';

export default function Title(props) {
    return (
        <>
            <StyledTitle>{ props.children }</StyledTitle>
        </>
    )
}