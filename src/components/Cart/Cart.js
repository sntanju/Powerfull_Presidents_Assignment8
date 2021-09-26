import React, { useEffect, useState } from 'react';
import Total from '../Total/Total'
import Person from '../Person/Person';
import './Cart.css'

const Cart = () => {
    const [data, setData] = useState([]);
    const [total, setTotal] = useState([]);

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
                key={person.id}
                person = {person}
                ></Person>)
            }
            </div>
            <div>
                <Total></Total>
            </div>
            
        </div>
    );
};

export default Cart;