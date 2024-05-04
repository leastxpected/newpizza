import React from 'react';
import './Offers.css';
import { Link } from 'react-router-dom';
import dania from '../Assets/dania_deals.png';

const Offers = () => {
   return (
      <div className="offers">
         <div className="offers-left">
            <h1>Kęs Włoch</h1>
            <h1>w każdym daniu</h1>
            <Link to="/dania">
               <button>Zobacz dania</button>
            </Link>
         </div>
         <div className="offers-right">
            <img src={dania} alt="" />
         </div>
      </div>
   );
};

export default Offers;
