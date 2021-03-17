import React from 'react';
import { Link } from 'react-router-dom';
import { MainContainer } from './styles';

export default function BudgetPage() {
    return (
        <MainContainer>
            <h1>Página não encontrada!</h1>
            <h4><Link>Clique aqui para voltar à página inicial</Link></h4>
            <h4>Se você não conseguir solucionar, nos mande uma mensagem que buscaremos resolvê-lo o mais rápido possível</h4>
        </MainContainer>
    );
}