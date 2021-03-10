import './PageDefault.css';
import React from 'react';
import Menu from '../Menu';
import Footer from '../Footer';

export default (props) => (
    <>
        <Menu/>
        <section>
            {props.children}
        </section>
        <Footer/>
    </>
);