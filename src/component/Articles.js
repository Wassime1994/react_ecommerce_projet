import React from 'react';
import { useState, useEffect, useRef } from 'react';
import article1 from "../accents/images/PRODUCT/1.jpg"
import article2 from "../accents/images/PRODUCT/2.jpg"
import article3 from "../accents/images/PRODUCT/3.jpg"
import article4 from "../accents/images/PRODUCT/4.jpg"
import article5 from "../accents/images/PRODUCT/5.jpg"
import article6 from "../accents/images/PRODUCT/6.jpg"
import article7 from "../accents/images/PRODUCT/7.jpg"
import article8 from "../accents/images/PRODUCT/8.jpg"
import article9 from "../accents/images/PRODUCT/9.jpg"
import { v4 as uuidv4 } from 'uuid';
import Panier from '../pages/Panier';


const Articles = (props) => {
    console.log(props)
const [title, setTitle] = useState('PRODUCT');
const [filter, setfilter] = useState('Filter');


    const inputValue = e => {
        props.inputValue(e)
    }
    const submit = e => {
        props.submit(e)
    }
    const submitValeur = () => {
        if (props.articles.length === 0) {
            console.log('vide')
            setfilter('Veuilez faire un choix')
            // setArticles(nouveauArticles)
        }
        else {
            setfilter('Filter')
        }
    }
    const addCard = id => { 
        props.click(id)
    }
    const changeLike = e =>{
        props.like(e)
    }
     
       
    

    return (
        <div>
            <div className="banniere">
                <h1 className='text-light'>{title}</h1>
                <span className="text-light">New Arrival Women Collection</span>
            </div>
            <div className='d-flex justify-content-between'>
                <h3 className='m-2'>Categories</h3>
                <h4>Nombre de productcs search : {props.articles.length} all</h4>
            </div>
            <div className="grandeDiv container ">
                <div className="listeProduct">
                    <ul class="list-group">
                        <li class="list-group-item" ><a href="" >All</a></li>
                        <li class="list-group-item"><a href="">WOMEN</a></li>
                        <li class="list-group-item"><a href=""> KIDS</a></li>
                        <li class="list-group-item"><a href="">MEN</a></li>
                        <li class="list-group-item"><a href="">ACCESSOIRES</a></li>
                    </ul>
                    <h4>{filter}</h4>
                    <div className="search">
                        <form onSubmit={e => { submit(e) }}>
                            <label className="d-flex">
                                <input type="text" onInput={e => inputValue(e.target.value)} name="name" />
                            </label>
                            <button onClick={submitValeur}>
                                <i class="fas fa-search"></i>
                            </button>
                        </form>                    </div>

                </div>
                <div className='row'>
                    {props.articles.map(el => {               
                        return (
                            <div className="col-xs-12 col-lg-4 map ">
                                <div className='position-relative card'>
                                    <img src={el.liens} alt="" />
                                    <span className={el.toggle ? "new" : el.toggle == null ? "" : "sale"}>
                                        {el.statut}
                                    </span>
                                <button onClick = {addCard} value={el.id} className='achatbtn'>Add to Cart</button>
                                <button onClick={changeLike} value = {el.id} id="like"> ♥ </button>
                                </div>
                                <h3>{el.nom}</h3> 
                                <span style={{ color: el.ancienPrix > 0 ? "red" : "black" }}> <span className='solde'>{el.ancienPrix}</span> ${el.prix}</span>
                            </div>)
                    })}
                </div>
                <div>

                </div>
            </div>


        </div>
    );
};

export default Articles;


// Regler les likes et surtout le hover por ajouter le bouton hover afin de rajouter le add dans les like
// ensuite creer une page de like et y placer tous les rticles ou on a cliqué sur like et les maper dessus , creer button suppromer afin de retier evidemment
// les articles qu'on ne souhaite plus (voir eshoop exemple & la todo pour y rajouter element)
// Regler Home et rajouter les component restants
