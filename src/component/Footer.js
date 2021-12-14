import React from 'react';

const Footer = () => {
    return (
        <div className="footer_all">
            <div className="row">
                <div className="col-xs-12 col-lg-4 Footer">
                    <h4> Get in touch</h4>
                        <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus est laudantium quod possimus quasi voluptatum nam ipsum iste aliquid nisi.</p>
                            <ul>
                                <li><a href=""><i class="fab fa-facebook-f"></i></a> </li>
                                <li><a href=""><i class="fab fa-instagram"></i></a> </li>
                                <li><a href=""><i class="fab fa-pinterest-p"></i></a> </li>
                                <li><a href=""><i class="fab fa-snapchat"></i></a> </li>
                                <li><a href=""><i class="fab fa-youtube"></i></a> </li>
                            </ul>                 
                </div>
                <div className="col-xs-12 col-lg-4 Footer">
                <h4> Link</h4>
                <ul className=" d-block text-center">
                                <li><a href="">Search</a> </li>
                                <li><a href="">AboutUs</a> </li>
                                <li><a href="">Contactus</a> </li>
                                <li><a href="">Returns</a> </li>
                            </ul>

                </div>
                <div className="col-xs-12 col-lg-4 Footer">
                <h4> Link</h4>
                <ul className="footerliste d-block text-center">
                                <li><a href="">Search</a> </li>
                                <li><a href="">AboutUs</a> </li>
                                <li><a href="">Contactus</a> </li>
                                <li><a href="">Returns</a> </li>
                            </ul>

                </div>
            </div>
            
            <div className='text-center'>
                <div className="imgfont">
             <a href=""><img src="https://www.mastercard.be/content/dam/mccom/global/logos/logo-mastercard-mobile.svg" alt="" /></a>       
             <a href=""> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Old_Visa_Logo.svg/1280px-Old_Visa_Logo.svg.png" alt="" /></a>      
             <a href=""><img src="https://img.favpng.com/23/1/16/logo-paypal-x-com-image-brand-png-favpng-W8rZ0i6YCFWBRzeeqxHVrh465.jpg" alt="" /></a>       
             <a href="">   <img src="https://toppng.com/uploads/preview/discover-network-vector-logo-11573928406dvkynbthvp.png" alt="" /></a>    
             <a href=""><img src="https://w7.pngwing.com/pngs/726/177/png-transparent-payment-card-debit-card-credit-card-bank-card-credit-card-logo-internet-bank.png" alt="" /></a>       

                </div>
                <span className="footer_copyright">
                Copyright @2021 All right reserverd.  

                </span>
            </div>
        </div>
    );
};

export default Footer;