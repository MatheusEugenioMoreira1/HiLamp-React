import React from 'react';
import CardList2Andar from '../components/CardList2Andar'
import bg from '../logo.svg'
const SegundoAndar = ({ }) => {

    const style = {
        backgroundImage: 'url("' + bg + '")',
    };
    
    return (
        <div className="page" style={style}>
            <CardList2Andar />
        </div>
    )
}
export default SegundoAndar;