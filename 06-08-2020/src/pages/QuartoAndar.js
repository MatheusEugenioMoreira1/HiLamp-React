import React from 'react';
import CardList4Andar from '../components/CardList4Andar'
import bg from '../logo.svg'
const QuartoAndar= ({ }) => {

    const style = {
        backgroundImage: 'url("' + bg + '")',
    };
    
    return (
        <div className="page" style={style}>
            <CardList4Andar />
        </div>
    )
}
export default QuartoAndar;