import React from 'react';
import Articles from '../component/Articles';
import Footer from '../component/Footer';
import Navbar from '../component/Navbar';
import Panier from './Panier';
import { useState } from 'react';

const Services = (props) => {
// console.log(props)

    
    
    return (
        <div>    
                 <Navbar />        
                <Articles
                articles={props.articles} 
                click = {props.click}
                submit = {props.submit}
                inputValue = {props.inputValue}
                like ={props.like}
                tableauSolde= {props.tableauSolde}
                solde = {props.solde}
                zoom={props.zoom}
                

                 />

    
            <Footer />

        </div>
    );
};

export default Services;