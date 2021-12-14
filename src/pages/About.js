import React from 'react';
import Footer from '../component/Footer';
import Navbar from '../component/Navbar';
import { useState } from 'react';

const About = () => {
    const [title, setTitle] = useState('ABOUT US');

    return (
        <div>
            <Navbar />
            <div className="banniere">
                <h1 className='text-light'>{title}</h1>
            </div>

            <div className='d-flex p-5'>
                    <img src="https://media.istockphoto.com/photos/computer-keyboard-about-us-picture-id496280806?k=20&m=496280806&s=612x612&w=0&h=5TXqE4cyyNxarkVnMrM5Qh_Djz1DQqcbqffz30GHOds=" alt="" />        
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem repellendus nobis, odio labore ea vitae, quae inventore dignissimos libero dolores quia magnam voluptates quibusdam! Corrupti, neque quaerat in hic, quam dolorem voluptatibus illum maiores repudiandae veniam velit libero amet? Cupiditate quas neque molestias minima veniam. Magni, qui odio dolore porro dolor excepturi, deserunt debitis saepe repellendus, vitae harum facilis quos eveniet dolorum iusto? Commodi, dignissimos, cupiditate corporis minus ipsam labore fugiat aliquid quo beatae tempora illo assumenda totam in deleniti doloribus, asperiores iure! Culpa quibusdam, sit ex officiis exercitationem earum, nisi animi sed magni numquam sequi distinctio eaque enim illo eum consequatur voluptate magnam. At magni non eos labore ratione sed, reiciendis eligendi a earum odit deserunt pariatur laboriosam quod asperiores accusantium quos, minima quisquam sequi dicta suscipit quae amet perspiciatis! Doloribus vel itaque possimus suscipit veritatis nobis libero dignissimos ullam, iste, nemo dolor. Voluptate asperiores, assumenda provident qui, inventore laudantium amet fuga consectetur atque voluptatum praesentium perferendis sint voluptas nesciunt vero rerum velit, dicta architecto esse facere! Sunt reiciendis accusantium eaque eum, velit, magni, assumenda ut veniam laboriosam aperiam unde! Odit tempora obcaecati sed? Libero nisi voluptatibus esse quaerat possimus dolorem magnam quisquam. Voluptatum impedit ducimus eligendi itaque eos qui nobis labore molestias officia nemo? A quo praesentium laborum eum, dolorem fuga expedita, non dolores suscipit labore illo, maxime dignissimos esse. Asperiores eveniet dolores, veritatis facere iste recusandae fugiat quam magnam, voluptate modi ducimus voluptatibus possimus deleniti. Eveniet pariatur id accusamus facere mollitia, beatae voluptates. Nulla quidem veniam odio debitis sapiente deleniti maxime assumenda doloremque excepturi blanditiis obcaecati voluptas inventore iste, cumque consequatur minus repellendus totam libero quaerat iusto voluptate praesentium impedit mollitia neque. Placeat eos odio molestiae accusamus corrupti fugiat assumenda blanditiis dolorum esse repudiandae modi consequuntur, sunt neque delectus? Deleniti ratione molestiae perferendis explicabo similique magnam enim.</p>

            </div>
          
        <Footer />
        </div>
        
    );
};

export default About;