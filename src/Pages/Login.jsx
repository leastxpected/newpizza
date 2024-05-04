import React, { useState } from 'react';
import './CSS/Login.css';
import { useAuth } from '../Context/AuthContext';
import { Navigate, Link } from 'react-router-dom';
import { doSignInWithEmailAndPassword } from '../firebase/auth';

const Login = () => {
   const { userLoggedIn } = useAuth();
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [isSigningIn, setIsSigningIn] = useState(false);
   const [errorMessage, setErrorMessage] = useState('');

   const onSubmit = async (e) => {
      e.preventDefault();
      if (!isSigningIn) {
         setIsSigningIn(true);
         setErrorMessage('');
         try {
            await doSignInWithEmailAndPassword(email, password);
         } catch (error) {
            console.error('Login error:', error);
            setErrorMessage(error.message);
            setIsSigningIn(false);
         }
      }
   };

   return (
      <div className="login">
         {userLoggedIn && <Navigate to="/" replace={true} />}
         <div className="login-container">
            <h1>Logowanie</h1>
            <form className="login-fields" onSubmit={onSubmit}>
               <input
                  type="email"
                  placeholder="Podaj swój adres e-mail"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => {
                     setEmail(e.target.value);
                  }}
               />
               <input
                  type="password"
                  autoComplete="current-password"
                  placeholder="Podaj swoje hasło"
                  required
                  value={password}
                  onChange={(e) => {
                     setPassword(e.target.value);
                  }}
                  disabled={isSigningIn}
               />
               <button type="submit" disabled={isSigningIn}>
                  {isSigningIn ? 'Logowanie...' : 'Zaloguj Się'}
               </button>
            </form>
            {errorMessage && (
               <div className="error-message">{errorMessage}</div>
            )}
            <p className="login-link">
               Nie masz konta?
               <Link to={'/signup'} class>
                  <span> Zarejestruj Się!</span>
               </Link>
            </p>
         </div>
      </div>
   );
};

export default Login;
