import React, { useEffect, useState } from 'react';
import Person from '../Person/Person';
import './Cart.css'

const Cart = () => {
    const [data, setData] = useState([]);

    useEffect( () => {
        fetch('./data.JSON')
        .then(res => res.json())
        .then(data => setData(data))
    } ,[])
    return (
        <div className="carts">
            <div className="cart">
            {
                data.map( person => <Person
                person = {person}
                ></Person>)
            }
            </div>
            <div>
                
            </div>
            
        </div>
    );
};

export default Cart;