import React from 'react';
import './Card.css';
export default function Card({user}){
  return(
    <div className="card">
      <img src={user.image} alt={user.name} />
      <div className="details">
        <h2 className="name">{user.name}</h2>
        <p className="designation">{user.designation}</p>
        <p className="description">{user.description}</p>
        </div>
        </div>
        );
  }
        

    


        
  