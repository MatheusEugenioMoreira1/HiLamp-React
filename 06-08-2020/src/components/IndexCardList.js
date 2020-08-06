import React from 'react';
import Card from './Card'
import CardA from './CardA'
import { Row, Container } from 'react-bootstrap';

const CardList = ({ }) => {
    return (
        <Container>
            <Row>
                <Card  text="Geral" />
                <Card text="Garagem" />
                <Card text="1º Andar" />
                <Card text="2º Andar" />
                
            </Row>
            <Row>
                 <Card text="3º Andar" />
                <Card text="4º Andar" />
                <Card text="Caixa d'água" />
                <Card  text="Ar condicionado" />
            </Row>
            
  
        </Container>
    )
}


export default CardList