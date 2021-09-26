import React, { useEffect, useState } from 'react';
import Total from '../Total/Total'
import Person from '../Person/Person';
import './Cart.css'

const Cart = () => {
    const [data, setData] = useState([]);
    const [count, setCount] = useState([]);

    useEffect( () => {
        fetch('./data.JSON')
        .then(res => res.json())
        .then(data => setData(data))
    } ,[])

    const handleAddToCart = (person) => {
        const newCount = [...count, person];
        setCount(newCount);
    }

   
    return (
        <div className="carts">
            <div className="cart">
            {
                data.map( person => <Person
                key={person.id}
                person = {person}
                handleAddToCart={handleAddToCart}
                ></Person>)
            }
            </div>
            <div>
                <Total count = {count} 
                person = {Person}
                ></Total>
            </div>
            
        </div>
    );
};

export default Cart;