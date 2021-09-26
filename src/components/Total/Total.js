import React from 'react';
import './Total.css'

const Total = (props) => {
    
    const {count} = props;
    
    let total = 0;
    let name = '';

    for( const cost of count) {
        total = total + cost.Salary;
        name = cost.Name;
    }
    
    
    return (
        <div className="total-cart-design">
            <h3>President Added: {props.count.length}</h3>
            <h3>Total Cost: ${total} </h3>
            <h3>{name}</h3>
        </div>
    );
};

export default Total;