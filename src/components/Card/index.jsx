import React from 'react';
import { CardContainer,
         Image,
         Title,
         Description, } from './styles';

export default function Card(props) {
    const {img, title, description} = props.data;
    return (
        <CardContainer>
            <Image src={img}></Image>
            {title && <Title>{title}</Title>}
            {description && <Description>{description}</Description>}
        </CardContainer>
    )
}