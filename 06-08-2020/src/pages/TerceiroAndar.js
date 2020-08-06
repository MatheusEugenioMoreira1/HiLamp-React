import React from 'react';
import CardList3Andar from '../components/CardList3Andar'
import bg from '../logo.svg'
const TerceiroAndar = ({ }) => {

    const style = {
        backgroundImage: 'url("' + bg + '")',
    };
    
    return (
        <div className="page" style={style}>
            <CardList3Andar />
        </div>
    )
}
export default TerceiroAndar;