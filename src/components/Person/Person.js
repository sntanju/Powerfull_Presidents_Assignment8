import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import './person.css'

const Person = (props) => {
    //console.log(props)
    const { img, Name, Age, Country, BirthPlace, Salary} = props.person;  //Used Destructuring
    const btnIcon = <FontAwesomeIcon icon={faShoppingCart} />             //Imported Font Awosme


    //Showed All The Persons Information
    // Set Event Handler And Font Awosome Icon In The Button
    return (
         <div className="person"> 

            <div>                      
            <img src={img} alt="" />
            <h4><b>Name</b>: {Name}</h4>
            <h4><b>Age</b>: {Age}</h4>
            <h4><b>Country</b>: {Country}</h4>
            <h4><b>Birth Place</b>: {BirthPlace}</h4>
            <h4><b>Salary</b>: ${Salary}</h4>
            <button
             onClick={ () => props.handleAddToCart(props.person)} 
             className="btn-regular">
             {btnIcon} Add To Cart</button>     
            
        </div>  
        </div>

    );
};

export default Person;