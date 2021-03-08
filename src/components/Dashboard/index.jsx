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
            <Arrow className="material-icons md-36" side="left" hide={hideArrows}
                   onClick={() => updatePosition(position + POSITION_MOVEMENT)}>chevron_left</Arrow>
            <CardContainer ref={cardContainer} position={position}>
                
                {items.map((item, index) => 
                    <Card key={`dashboard_card_${props.name}_${index}`} data={item} />    
                )}

            </CardContainer>
            <Arrow className="material-icons md-36" side="right" hide={hideArrows}
                   onClick={() => updatePosition(position - POSITION_MOVEMENT)}>chevron_right</Arrow>
        </DashboardContainer>
    )
}