import React from 'react';
import './Card.css';

export default function Card(props){
    return (
        <div className='Card'>
            <button onClick={e => props.deleteCard(props.id)}
            type='button'
            >
                Delete
            </button>
    {/* add curly braces to make it a string */}
          <h3>{props.title}</h3>
          <p>{props.content}</p>
        </div>
    )}