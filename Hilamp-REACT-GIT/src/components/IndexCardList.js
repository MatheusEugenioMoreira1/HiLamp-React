import React from 'react';
import Card from './Card'
import { Row, Container } from 'react-bootstrap';

const CardList = ({ }) => {
    return (
        <Container>
            <Row>
                <Card text="Geral" />
                <Card text="Garagem" />
                <Card text="Caixa d'água" />
                <Card text="1º Andar" />
            </Row>
            <Row>
                <Card text="2º Andar" />
                <Card text="3º Andar" />
                <Card text="4º Andar" />
                <Card  text="Ar condicionado" />
            </Row>
  
        </Container>
    )
}


export default CardList