import React, { useState, useContext, useEffect } from 'react';
import './Navbar.css';
import logo from '../Assets/logo_tavola.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import { useAuth } from '../../Context/AuthContext';
import { doSignOut } from '../../firebase/auth';

const Navbar = () => {
   const [menu, setMenu] = useState('shop');
   const { getTotalCartItems } = useContext(ShopContext);
   const location = useLocation();
   const navigate = useNavigate();
   const { userLoggedIn } = useAuth();

   useEffect(() => {
      const path = location.pathname;
      if (path.includes('/przystawki')) {
         setMenu('przystawki');
      } else if (path.includes('/pizze')) {
         setMenu('pizze');
      } else if (path.includes('/dania')) {
         setMenu('dania');
      } else if (path.includes('/salatki')) {
         setMenu('salatki');
      } else if (path.includes('/desery')) {
         setMenu('desery');
      } else if (path.includes('/dodatki')) {
         setMenu('dodatki');
      } else {
         setMenu('shop');
      }
   }, [location]);

   return (
      <div className="navbar">
         <div className="nav-logo">
            <Link
               style={{
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
               }}
               to="/">
               <img src={logo} alt="logo" />
               <p>Bella Tavola</p>
            </Link>
         </div>
         <ul className="nav-menu">
            <li
               onClick={() => {
                  setMenu('shop');
               }}>
               <Link style={{ textDecoration: 'none' }} to="/">
                  Strona Główna
               </Link>
               {menu === 'shop' ? <hr /> : <></>}
            </li>
            <li
               onClick={() => {
                  setMenu('przystawki');
               }}>
               <Link
                  style={{ textDecoration: 'none' }}
                  to="/przystawki">
                  Przystawki
               </Link>
               {menu === 'przystawki' ? <hr /> : <></>}
            </li>
            <li
               onClick={() => {
                  setMenu('pizze');
               }}>
               <Link style={{ textDecoration: 'none' }} to="/pizze">
                  Pizze
               </Link>
               {menu === 'pizze' ? <hr /> : <></>}
            </li>
            <li
               onClick={() => {
                  setMenu('dania');
               }}>
               <Link style={{ textDecoration: 'none' }} to="/dania">
                  Dania
               </Link>
               {menu === 'dania' ? <hr /> : <></>}
            </li>
            <li
               onClick={() => {
                  setMenu('salatki');
               }}>
               <Link style={{ textDecoration: 'none' }} to="/salatki">
                  Sałatki
               </Link>
               {menu === 'salatki' ? <hr /> : <></>}
            </li>
            <li
               onClick={() => {
                  setMenu('desery');
               }}>
               <Link style={{ textDecoration: 'none' }} to="/desery">
                  Desery
               </Link>
               {menu === 'desery' ? <hr /> : <></>}
            </li>
            <li
               onClick={() => {
                  setMenu('dodatki');
               }}>
               <Link style={{ textDecoration: 'none' }} to="/dodatki">
                  Dodatki
               </Link>
               {menu === 'dodatki' ? <hr /> : <></>}
            </li>
         </ul>
         <div className="nav-login-cart">
            {userLoggedIn ? (
               <>
                  <button
                     onClick={() => {
                        doSignOut().then(() => {
                           navigate('/login');
                        });
                     }}>
                     Wyloguj
                  </button>
               </>
            ) : (
               <>
                  <button>
                     <Link
                        style={{ textDecoration: 'none' }}
                        to="/login">
                        Logowanie
                     </Link>
                  </button>
                  <button>
                     <Link
                        style={{ textDecoration: 'none' }}
                        to="/signup">
                        Rejestracja
                     </Link>
                  </button>
               </>
            )}
            <div className="nav-cart">
               <Link to="/cart">
                  <img src={cart_icon} alt="koszyk" />
               </Link>
               <div className="nav-cart-count">
                  {getTotalCartItems()}
               </div>
            </div>
         </div>
      </div>
   );
};

export default Navbar;
