import React from 'react';
import Card from './Card'
import { Row, Container } from 'react-bootstrap';

const CardList1Andar = ({ }) => {
    return (
        <Container>
            <Row>
                <Card text="Geral" />
                <Card text="Corredor" />
                <Card text="Circuito 1" />
                
            </Row>
            <Row>
                <Card text="Circuito 2" />
                <Card text="Circuito 3" />
                <Card text="Entrada" />
                
            </Row>
            
  
        </Container>
    )
}


export default CardList1Andar