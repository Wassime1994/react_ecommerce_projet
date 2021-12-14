import React, { useState } from 'react';
import Articles from '../component/Articles';
import Footer from '../component/Footer';
import Navbar from '../component/Navbar';
import SetTableau from '../component/SetTableau';

const Panier = (props) => {
    const [quantite, setQuantite] = useState(1)
    const [prixTotal, setprixTotal] = useState(props.prix)
    const supprime = id => { 
        props.click(id)
       
        
    }
   
    const add = id=>{
        // console.log(id.target.value)
            let quantite = [ ...props.articles ]
            setprixTotal(props.prix)

            let prixTot = prixTotal
            const test = quantite.map(el=>{
                if(el.id==id.target.value && el.quantite>=1 ){
                    
                    el.quantite+=1
                    el.prix = el.prixNew * el.quantite
                    console.log(el.quantite)
                    console.log(el.prix*el.quantite)
                    prixTot += el.prixNew
                    
                }
            })
            setQuantite(test)
            setprixTotal(prixTot)
    }
    const sous = id  =>{
        let quantite = [ ...props.articles ]
        let prixTot = prixTotal

            const test = quantite.map(el=>{
                if(el.id==id.target.value && el.quantite>=2 ){
                    let prixTotal = props.prix
                    el.quantite-=1
                    el.prix = el.prixNew * el.quantite
                    console.log(el.quantite)
                    console.log(el.prix*el.quantite)
                    prixTot -= el.prixNew

                }
            })
            setQuantite(test)
            setprixTotal(prixTot)

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
                           <span> Prix : {el.prix} euros</span>
                           <span>
                               Quantité :{el.quantite}<span>  </span>
                               <span >
                                <button value = {el.id} onClick={add} className="operation">+ </button>
                               <button value = {el.id} onClick={sous} className="operation"> -</button>    
                               </span>
                               

                           </span>
                           <span> <button value = {el.id} onClick = {supprime} className='btn btn-danger p-3'>Rendre</button></span>

                        </li> 
                    )
                })}
                    
            </ul>
            <h1 className="text-center">Prix a payer : <span style={{color : props.prix > 0? "green" : "red"}}> {prixTotal} euros</span> </h1>
            <Footer/>
        </div>
    );
};

export default Panier;