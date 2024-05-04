import React from 'react';
import './Newsletter.css';

const Newsletter = () => {
   return (
      <div className="newsletter">
         <h1>Otrzymuj ekskluzywne oferty - Zapisz się</h1>
         <p>Zapisz się do naszego newslettera i bądź na bieżąco</p>
         <div>
            <input
               type="email"
               placeholder="Twój Email"
               className="email"
            />
            <button>Zapisz Się!</button>
         </div>
      </div>
   );
};

export default Newsletter;
