import './PageDefault.css';
import React from 'react';
import Menu from '../Menu';

export default (props) => (
    <>
        <Menu />
        {props.children}
    </>
);