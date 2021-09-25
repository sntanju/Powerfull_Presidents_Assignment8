import React from 'react';
import './person.css'

const Person = (props) => {
    const { img, Name, Age, Country, Salary} = props.person;
    return (
        <div className="person">
            <div>
            <img src={img} alt="" />
            <h4><b>Name</b>: {Name}</h4>
            <h4><b>Age</b>: {Age}</h4>
            <h4><b>Country</b>: {Country}</h4>
            <h4><b>Salary</b>: {Salary}</h4>
            <button className="btn-regular">Add To Cart</button>
        </div>  
        </div>

    );
};

export default Person;