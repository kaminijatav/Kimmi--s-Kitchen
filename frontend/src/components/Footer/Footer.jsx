import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo}  alt="" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quisquam illum beatae accusamus distinctio inventore dolores iusto illo omnis laudantium, laborum ipsum amet, aliquid eos soluta sed nisi, dignissimos veniam?</p>
              <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
                </div>  
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
                
            </div>
            <div className="footer-content-right">
              <h2>GET IN TOUCH</h2>
               <ul>
                <li> + 91919191919</li>
                <li>contact@kimmiskitchen.com
                   
                </li>
                </ul> 
            </div>
        </div>
        <hr />
        <p className='footer-copyright'> Copyright 2024  Kimmi's Kitchen -All rights reserved.</p>
    </div>
  )
}

export default Footer