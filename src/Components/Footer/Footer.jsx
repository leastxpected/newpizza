import React from 'react';
import './Footer.css';
import footer_logo from '../Assets/logo_tavola.png';
import instagram_icon from '../Assets/instagram_icon.png';
import pintrest_icon from '../Assets/pintrest_icon.png';
import whatsapp_icon from '../Assets/whatsapp_icon.png';

const Footer = () => {
   return (
      <div className="footer">
         <div
            className="footer-logo"
            onClick={() => window.scrollTo(0, 0)}>
            <img src={footer_logo} alt="footer logo" />
            <p>Bella Tavola</p>
         </div>
         <ul className="footer-links">
            <li>Firma</li>
            <li>Produkty</li>
            <li>Lokalizacje</li>
            <li>O nas</li>
            <li>Kontakt</li>
         </ul>
         <div className="footer-social-icons">
            <div className="footer-icons-container">
               <img src={instagram_icon} alt="instagram" />
            </div>
            <div className="footer-icons-container">
               <img src={pintrest_icon} alt="pintrest" />
            </div>
            <div className="footer-icons-container">
               <img src={whatsapp_icon} alt="whatsapp" />
            </div>
         </div>
         <div className="footer-copyright">
            <hr />
            <p>© Bella Tavola 2024 - Wszystkie prawa zastrzeżone.</p>
         </div>
      </div>
   );
};

export default Footer;
