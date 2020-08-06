
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import lampOff from '../lamp_off.svg'
import lampOn from '../lamp_on.svg'
import { Col } from 'react-bootstrap';


const Card = ({ text }) => {
    const [lampicon, setLampIcon] = useState(lampOff)
    const clickHandler = () => {
        if (lampicon === lampOff) {
            setLampIcon(lampOn)
        }
        else {
            setLampIcon(lampOff)
        }
        
    }
    return (
        <Col>
            <div className="card" onClick={clickHandler}>
                <img className="card-img-top card-img" src={lampicon} />
                <div className="card-body">
                    <p className="andares"><b>{text}</b></p>
                    <div className="d-flex justify-content-between align-items-center">

                    </div>
                </div>
            </div>
        </Col>
    )
}


Card.propTypes = {
    text: PropTypes.string,
};

Card.defaultProps = {
    text: '',

};
export default Card