import React from 'react';
import './Total.css'

const Total = (props) => {
    
    const {count} = props;
    let total = 0;
    let name = [];

    // Used Loop For Updating Persons Number And Salary
    for( const data of count) {
        total = total + data.Salary;
        name.push(data.Name);
        name.push(<br/>);
    }
    
    //Showed Total Cart Information
    return (
        <div className="total-cart-design">
            <h3 className="person-count">President Added: {props.count.length}</h3>
            <h3 className="total-salary">Total Cost: ${total} </h3>
            <h3 className="person-name">{name}</h3>
        </div>
    );
};

export default Total;