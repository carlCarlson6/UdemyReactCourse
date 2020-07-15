import React from 'react';

const Gasto = ({gasto}) => {
    return (
        <li className='gastos'>
            <p>
                {gasto.concept}
                <span className="gasto">$ {gasto.amount}</span>
            </p>
        </li>
    );
}
 
export default Gasto;