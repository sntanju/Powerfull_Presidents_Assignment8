import React, { useEffect, useState } from 'react';
import Total from '../Total/Total'
import Person from '../Person/Person';
import './Cart.css'

const Cart = () => {
    const [data, setData] = useState([]);     // Used UseState For set Fake Data
    const [count, setCount] = useState([]);   // Used UseState For Counting Total Person Salary
 
    useEffect( () => {                        // Used UsedEffect For Loading Fake Data
        fetch('./data.JSON')
        .then(res => res.json())
        .then(data => setData(data))
    } ,[])

    const handleAddToCart = (person) => {      // Used Event Handler For Count Person and Salary
        const newCount = [...count, person];
        setCount(newCount);
    }

   
    return (
        <div className="carts">
            <div className="cart">
            {
                data.map( person =>            // Used Map For Showing Persons Information
                <Person                        // Imported Person Component For Sending Data
                key={person.id}                
                person = {person}              
                handleAddToCart={handleAddToCart}   
                ></Person>)
            }
            </div>
            <div>
                <Total                          // Imported Total Component For Sending Data
                count = {count}                 
                person = {Person}
                ></Total>
            </div>
            
        </div>
    );
};

export default Cart;