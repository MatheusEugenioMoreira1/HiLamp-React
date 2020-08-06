import React from 'react';
import Card from './Card'
import { Row, Container } from 'react-bootstrap';

const CardList4Andar = ({ }) => {
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
                <Card text="Banheiro"/>
                
            </Row>
            
  
        </Container>
    )
}


export default CardList4Andar;