import React from 'react';
import Footer from '../component/Footer';
import Navbar from '../component/Navbar';

const Like = (props) => {
    // console.log(props.click)
    const supprime = id => { 
        props.click(id)
           
    }
    return (
        <div>
            <Navbar />
            <h1 className='text-center'> Vos coup de coeur !  </h1>
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
            <div className='terre'>
            <h1> Achetez recyclé et vous aussi entrez dans l'action pour la sauvegarde de notre planète !</h1>
            <img className='text-center terreImg' src="https://acegif.com/wp-content/gifs/globe-44.gif" alt="" />
            </div>
            
            <Footer/>
        </div>
    );
};

export default Like;