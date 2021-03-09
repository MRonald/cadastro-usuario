import './Button.css';
import React from 'react';

export default (props) => (
    <div className="container-button" style={{textAlign: props.align || 'center'}}>
        <input type={props.type} value={props.valueButton} style={{backgroundColor: props.color || 'rgb(201, 59, 89)'}}/>
    </div>
);