import React from 'react';
import { useState, useEffect, useRef } from 'react';
import leather from "../accents/images/bg_leather.jpg"
import soon1 from "../accents/images/soon1.jpg"
import soon2 from "../accents/images/soon2.png"
import soon3 from "../accents/images/soon3.jpg"
import carrousel from "../accents/images/carrousel_1.jpeg"
import carrousel2 from "../accents/images/carrousel_2.jpg"
import carrousel3 from "../accents/images/carousel_3.jpg"
import { v4 as uuidv4 } from 'uuid';
import { NavLink } from 'react-router-dom';
import Footer from "./Footer"




const Cards = (props) => {
    console.log(props)
    let index = 0
    const addCard = id => {
        props.func(id)
    }
    const changeLike = e => {
        props.like(e)
    }
   
    const imgEnvoie = id => {
        props.zoom(id)
    }
    const bestSeller =e =>{
        props.bestSeller(e)
    }
    const nouveau = e =>{
        props.nouveau(e)
    }
    const old = e =>{
        props.old(e)
    }
    const sale = e=>{
        props.sale(e)
    }


    return (
        <>
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">

                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={carrousel} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={carrousel2} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={carrousel3} class="d-block w-100" alt="..." />
                    </div>
                </div>
                <button class="carousel-control-prev btn" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon btn" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next btn" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon btn" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
           

            <div className=" row main">


                <div className=" parent col-xs-12 col-lg-3" style={{ backgroundImage: `url(${soon1})` }}>      <p>Comming Soon </p>
                </div>
                <div className="parent col-xs-12 col-lg-3" style={{ backgroundImage: `url(${soon2})`, backgroundSize: "100%", backgroundRepeat: "no-repeat" }}>
                    <p>Comming Soon </p>
                </div>
                <div className="parent col-xs-12 col-lg-3" style={{ backgroundImage: `url(${soon3})` }}>
                    <p>Coming Soon </p>
                </div>
            </div>
            <div className='position-relative'>

            </div>
            <h1 className='text-center mb-3'> Our Product</h1>
            <nav class="nav nav-pills nav-justified ">
                <a onClick={e=>{bestSeller(e)}} className="nav-link " aria-current="page" href="#">BestSeller</a>
                <a onClick={e=>{nouveau(e)}}    className="nav-link" href="#">New</a>
                <a onClick={e=>{sale(e)}}   className="nav-link" href="#">Sale</a>
                <a onClick={e=>{old(e)}}    className="nav-link" href="#">Old</a>
            </nav>
            <section className='classTableau d-flex pt-5 container'>

                <div className='row d-flex'>
                    {props.mini.map(el => {
                        if (index < 4) {
                            index++
                            return (
                                <div className="col-xs-12 col-lg-3 map position-relative">
                                    <div className='position-relative card'>                
                                            <img  src={el.liens}  alt="" /> 
                                        <NavLink className="navlink" exact to="/zoom"  >
                                        <button className ="btn_info" onClick={imgEnvoie} value={el.id}>Avoir plus d'infos</button>
                                         </NavLink>
                                        <span className={el.toggle ? "new" : el.toggle == null ? "" : "sale"}>
                                            {el.statut}
                                        </span>
                                        <button onClick={addCard} value={el.id} className='achatbtn'>Add to Cart</button>
                                        <button onClick={changeLike} value={el.id} id="like"> ♥ </button>

                                    </div>
                                    <h3>{el.nom}</h3>
                                    <span style={{ color: el.ancienPrix > 0 ? "red" : "black" }}> <span className='solde'>{el.ancienPrix}</span> ${el.prix}</span>
                                </div>)
                        }
                    })}
                </div>

            </section>



        </>



    );
};

export default Cards;