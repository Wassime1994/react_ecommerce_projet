import React from 'react';
import Cards from './Cards';
import Footer from './Footer';
import Navbar from './Navbar';
import gif from "../accents/images/gif.gif"

const Home = (props) => {
    // console.log(props)
    return (
        <div > 

            <Navbar 
            test ="yo"
            likelen={props.likelen}
            panierlen={props.panierlen}
             />
            <Cards 
             mini = {props.tableau}
            filter = {props.filter}
            func = {props.func}
            supprime ={props.click}
            like = {props.like}
            zoom = {props.zoom}
            old = {props.old}
            nouveau ={props.nouveau}
            sale={props.sale}
            bestSeller = {props.bestSeller}
            
            
            />
            <section className="section"> 
            <h3> The Beauty</h3>
            <h1> LOOKBOOK</h1>
            <div>
            <i class="fas fa-play"></i> PLAY VIDEO
            </div>


            </section>
            {/* <section className="anime">
                <img src={gif} alt="" />
            </section> */}




            <Footer/>

        
        
        </div>
    );
};

export default Home;