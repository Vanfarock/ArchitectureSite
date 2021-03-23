import React, { useState, useEffect, useRef } from 'react';
import Card from '../Card';
import { DashboardContainer,
         Arrow,
         CardContainer } from './styles';

export default function Dashboard(props) {
    const [position, setPosition] = useState(0);
    const [items, setItems] = useState(props.data);
    const [hideArrows, setHideArrows] = useState(false);

    const cardContainer = useRef(null);

    const POSITION_MOVEMENT = 400;
    
    const updatePosition = newPosition => {
        let totalWidth = totalCardWidth();
        
        const offset = cardContainer.current.offsetWidth - totalWidth;
        if (newPosition <= 0) {
            if (newPosition < offset) {
                newPosition = offset;
            }
        }
        else if (newPosition > 0) {
            newPosition = 0;
        }
        setPosition(newPosition);
    }

    const totalCardWidth = () => {
        const children = cardContainer.current.children;
        let totalWidth = 0;
        for (let i = 0; i < children.length; i++) {
            totalWidth += children[i].offsetWidth;
        }
        return totalWidth;
    }

    useEffect(() => {
        setHideArrows(totalCardWidth() < cardContainer.current.offsetWidth);
        setItems(props.data);
    }, [props.data]);

    return (
        <DashboardContainer>
            <Arrow icon="chevron-left" 
                   side="left" 
                   hide={hideArrows} 
                   className="squared"
                   onClick={() => updatePosition(position + POSITION_MOVEMENT)} />
            <CardContainer ref={cardContainer} position={position}>
                
                {items.map((item, index) => 
                    <Card key={`dashboard_card_${props.name}_${index}`} data={item} />    
                )}

            </CardContainer>
            <Arrow icon="chevron-right" 
                   side="right" 
                   hide={hideArrows} 
                   className="squared"
                   onClick={() => updatePosition(position - POSITION_MOVEMENT)} />
        </DashboardContainer>
    )
}