import React from 'react';
import './Hero.css';
import arrow_icon from '../Assets/arrow.png';
import { Link } from 'react-router-dom';

const Hero = () => {
   return (
      <div className="hero">
         <div className="hero-left">
            <div>
               <p>Autentyczne smaki,</p>
               <p>nowoczesne podejście</p>
            </div>
            <div className="hero-latest-btn">
               <Link
                  style={{
                     textDecoration: 'none',
                     display: 'flex',
                     gap: '10px',
                  }}
                  to="/pizze">
                  <div>Nasze Pizze</div>
                  <img src={arrow_icon} alt="" />
               </Link>
            </div>
         </div>
      </div>
   );
};

export default Hero;
