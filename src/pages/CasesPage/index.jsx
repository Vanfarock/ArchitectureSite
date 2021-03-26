import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Title from '../../components/Title';
import { MainContainer,
         CasesContainer,
         Case } from './styles';

export default function CasesPage() {
    const [cases, setCases] = useState([]);

    useEffect(() => {
        fetchImages();
    }, []);
 
    const fetchImages = async () => {
        const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/image`)
        const updatedCases = response.data.map(c => {
            return {
                img: `data:${c.contentType};base64,${Buffer.from(c.content.data).toString('base64')}`,
                caseName: c.description
            }
        })
        setCases(updatedCases)
    }

    return (
        <MainContainer>
            <Title>Cases</Title>
            <CasesContainer>
                {
                    cases.map((c, index) => <Case key={`case_img_${index}`} src={c.img} alt={c.caseName} />)
                }
            </CasesContainer>
        </MainContainer>
    );
}