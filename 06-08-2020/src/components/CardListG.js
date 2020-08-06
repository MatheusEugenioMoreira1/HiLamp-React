import React from 'react';
import Card from './Card'
import { Row, Container } from 'react-bootstrap';

const CardListG = ({ }) => {
    return (
        <Container>
            <Row>
                <Card text="Geral" />
                <Card text="Garagem subsolo" />
                <Card text="Garagem servidor" />
                <Card text="Garagem corredor" />
            </Row>

        </Container>
    )
}

export default CardListG