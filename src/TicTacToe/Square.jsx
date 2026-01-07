import { useState } from "react";
import React from 'react';

const Square = ({value, onSquareClick}) => {

    return (
        <div 
        style = {{
            border: '1px solid',
            width: '100px',
            height: '100px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}
        className="square"
        onClick={onSquareClick}>
            <h5>{value}</h5>
        </div>
    )
}

export default Square;