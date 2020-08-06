import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Water1 from '../gota_cheia.svg'
import Water2 from '../gota_metade.svg'
import Water3 from '../gota_vazia.svg'
import { Col } from 'react-bootstrap';


const CardA = ({ text }) => {
    const [Watericon, setWaterIcon] = useState(Water1)
    const clickHandler = () => {
        if (Watericon === Water1) {
            setWaterIcon(Water2)
        }
        else if(Watericon === Water2){
            setWaterIcon(Water3)
        }
        else {
            setWaterIcon(Water1)
        }
       
    }
    return (
        <Col>
            <div className="card-Agua" onClick={clickHandler}>
                <img className="card-img-top card-img-Agua" src={Watericon} />

                <div className="card-body">
                    <p className="andares"><b>{text}</b></p>
                    <div className="d-flex justify-content-between align-items-center">

                    </div>
                </div>
            </div>
        </Col>
    )
}


CardA.propTypes = {
    text: PropTypes.string,
};

CardA.defaultProps = {
    text: '',

};
export default CardA;