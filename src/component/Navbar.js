import React from 'react';
import { NavLink } from "react-router-dom"
import { useState } from 'react';


const Navbar = (props) => {
    // console.log(props)
    const [toggle, setToggle] = useState(false)
    const seePanier = () => { 
        alert('hello')
    }
    return (
        <>
            <div className="navChange d-flex justify-content-between p-3">
                <div className="titre">
                    <h1>Fashe <span className="text-warning">.</span></h1>
                </div>
                <div>          
                    <ul>
                        <li>
                            <NavLink  className="navlink" exact to="/" >   Home   </NavLink>
                        </li>
                        
                        <li>
                            <NavLink  className="navlink" exact to="/services" > Product </NavLink>
                        </li>
                        <li>
                            <NavLink className="navlink" exact to="/About" >  About </NavLink>
                        </li>
                        <li>
                            <NavLink className="navlink" exact to="/contact" >  Contact </NavLink>
                        </li>
                     </ul>
                 </div>
                <div>
                 <ul>
                    <li>
                    <NavLink className="navlink" exact to="/panier" style ={{backgroundColor: props.panierlen>0? "orange" : "white" , padding: "20px",color : props.panierlen>0? "white" : "black",  }} >  <i style={{animation : props.panierlen>0 ? "bounce 0.7s ease infinite" :"rien"}}id='bag' class="fas fa-shopping-bag"></i>
                         <span>{props.panierlen}</span> 
                    </NavLink>
                        </li>
                        <li>
                            <NavLink className="navlink" exact to="/coeur"  style ={{backgroundColor: props.likelen>0? "pink" : "white" , padding: "20px", color : props.likelen>0? "white" : "black"}}><i   style={{animation : props.likelen>0 ? "bounce 0.7s ease infinite" :"rien"}}      id="like" onClick={seePanier} class="far fa-heart"></i>   
                        <span>{props.likelen}</span>
                        </NavLink>
                        </li>
                     </ul>
                 </div>
                        
                   
           
                </div>
                

           

        </>
    );
};

export default Navbar;