import React, { useState } from 'react';
import Articles from '../component/Articles';
import Footer from '../component/Footer';
import Navbar from '../component/Navbar';
import SetTableau from '../component/SetTableau';
const Panier = (props) => {

    const supprime = id => { 
        props.click(id)
       
        
    }
    
    return (
        <div>
            <Navbar />
            <ul className="panierUl">
                {props.articles.map(el=>{
                    return(
                        <li className = "listePanier" >
                            <span> <img className ="imgPanier" src={el.liens} alt="" /></span>
                           <span>Nom articles :  {el.nom} </span>
                           <span> Prix : {el.prix}</span>
                           <span> <button value = {el.id} onClick = {supprime} className='btn btn-danger p-3'>Rendre</button></span>

                        </li> 
                    )
                })}
                    
            </ul>
            <h1 className="text-center">Prix a payer : <span style={{color : props.prix > 0? "green" : "red"}}> {props.prix} euros</span> </h1>
            <Footer/>
        </div>
    );
};

export default Panier;