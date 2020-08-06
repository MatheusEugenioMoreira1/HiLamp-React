import CardA from './CardA'
import React, { useState } from 'react';
import PropTypes from 'prop-types';
//import lampOff from '../lamp_off.svg'
//import lampOn from '../lamp_on.svg'
//import { Col } from 'react-bootstrap';
import { Row, Container } from 'react-bootstrap';
import '../App.css'


const CardListAgua = ({ }) => {
    return (
        <Container>
            <Row>
                <CardA text="Nível da Caixa d'Água" />
              
            </Row>  
        </Container>
    )
}


export default CardListAgua;