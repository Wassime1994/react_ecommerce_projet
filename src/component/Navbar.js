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
                    <NavLink className="navlink" exact to="/panier" >  <i id='bag' class="fas fa-shopping-bag"></i>
                         <span>{props.panierlen}</span> 
                    </NavLink>
                        </li>
                        <li>
                            <NavLink className="navlink" exact to="/coeur" ><i id="like" onClick={seePanier} class="far fa-heart"></i>   
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