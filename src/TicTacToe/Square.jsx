import { useState } from "react";
import React from 'react';
import './styles/Square.css';

const Square = ({value, onSquareClick}) => {
    console.log("Square rendered", value);
    return (
        <div 
        className="square" 
        onClick={onSquareClick}>
            <h5>{value}</h5>
        </div>
    )
}

export default Square;