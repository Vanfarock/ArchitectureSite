import React, { useState, useEffect } from 'react';
import ImageTeste from '../../assets/images/introduction-image.jpg';
import Title from '../../components/Title';
import LoadingOverlay from 'react-loading-overlay';
import { MainContainer,
         CasesContainer,
         Case } from './styles';

export default function CasesPage() {
    const [cases, setCases] = useState([]);

    useEffect(() => {   
        setCases([{
            img: ImageTeste,
            caseName: 'Projeto 1'
        },
        {
            img: ImageTeste,
            caseName: 'Projeto 2'
        },
        {
            img: ImageTeste,
            caseName: 'Projeto 3'
        },
        {
            img: ImageTeste,
            caseName: 'Projeto 4'
        },
        {
            img: ImageTeste,
            caseName: 'Projeto 5'
        }])
    }, []);
 
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