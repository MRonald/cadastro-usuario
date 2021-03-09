import './Button.css';
import React from 'react';

export default (props) => (
    <div className="container-button">
        <input type="submit" value={props.valueButton}/>
    </div>
);