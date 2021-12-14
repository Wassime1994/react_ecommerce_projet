import React from 'react';
import Footer from '../component/Footer';
import Navbar from '../component/Navbar';
import { NavLink } from 'react-router-dom';
const Zoom = (props) => {
    console.log(props)
    const revenir = () =>{
        setInterval(() => {
            window.location.reload()
        }, 1500);
    }
    return (
        <div>
            <Navbar />
            {props.tableau.map(el=>{
                return (
                    <div className='zoom'>
                    <h1>{el.nom}</h1>
                    <img src={el.liens} alt="" />
                    <span>{el.prix} euros </span>
                    <p className="container">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur incidunt vel natus corporis sunt aliquid necessitatibus cumque ea libero deserunt, sint maxime blanditiis magnam omnis quisquam deleniti asperiores temporibus facilis harum dolorum alias! Ipsam, ea aliquid tempora expedita, quas nemo corrupti nihil eum veniam modi dolorum tenetur. Harum quaerat eveniet id commodi dignissimos enim, omnis adipisci vel ipsa modi nisi impedit molestiae, ad sit vitae odio voluptas qui. Omnis aperiam eligendi a ea, debitis facilis, delectus consectetur non vitae voluptate eius itaque sequi possimus explicabo minus temporibus quidem architecto nostrum totam nesciunt voluptatem? Asperiores error delectus ab repudiandae laudantium mollitia reprehenderit consectetur, non nam recusandae doloribus saepe id voluptate beatae aliquid itaque quibusdam, incidunt earum vel hic maxime. Corporis obcaecati debitis blanditiis soluta! Eos omnis, distinctio sapiente ipsam commodi repellat vitae? Architecto blanditiis ratione dignissimos molestiae esse aliquam, nobis dolor quis, itaque dolores aliquid quam sunt, ipsum atque dolore voluptatem libero ducimus accusamus voluptatum modi magnam saepe consectetur odit nihil. Quidem at rem iusto. Praesentium ipsum magnam maxime quod vero accusamus odit sed debitis maiores distinctio mollitia vel velit repellat a fugiat libero, fuga veniam omnis, sint perferendis provident? Culpa sequi aperiam incidunt voluptatibus officiis debitis dolore cum vel asperiores?</p>
                    <button onClick={revenir}>
                    <NavLink className="navlink" exact to="/" > Revenir</NavLink>
                    
                    </button>
                    </div>
                )
            })}
            <Footer/>
        </div>
    );
};

export default Zoom;