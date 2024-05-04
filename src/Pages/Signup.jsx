import React, { useState } from 'react';
import './CSS/Signup.css';
import { useAuth } from '../Context/AuthContext';
import { Navigate, Link, useNavigate } from 'react-router-dom';
import { doCreateUserWithEmailAndPassword } from '../firebase/auth';

const Signup = () => {
   const navigate = useNavigate();
   const { userLoggedIn } = useAuth();
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [confirmPassword, setConfirmPassword] = useState('');
   const [isRegistering, setIsRegistering] = useState(false);
   const [errorMessage, setErrorMessage] = useState('');
   const [isAgreed, setIsAgreed] = useState(false);

   const onSubmit = async (e) => {
      e.preventDefault();
      if (!isAgreed) {
         setErrorMessage('Musisz zaznaczyć zgody.');
         return;
      }
      if (password !== confirmPassword) {
         setErrorMessage('Hasła nie są identyczne.');
         return;
      }

      setIsRegistering(true);
      setErrorMessage('');
      try {
         await doCreateUserWithEmailAndPassword(email, password);
         navigate('/');
      } catch (error) {
         setIsRegistering(false);
         setErrorMessage(
            error.message || 'Wystąpił błąd podczas rejestracji.'
         );
      }
   };

   return (
      <div className="signup">
         {userLoggedIn && <Navigate to="/" replace={true} />}
         <div className="signup-container">
            <h1>Rejestracja</h1>
            <form className="signup-fields" onSubmit={onSubmit}>
               <input
                  type="email"
                  placeholder="Podaj swój adres e-mail"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isRegistering}
               />
               <input
                  type="password"
                  autoComplete="new-password"
                  placeholder="Podaj swoje hasło"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={isRegistering}
               />
               <input
                  type="password"
                  autoComplete="off"
                  placeholder="Potwierdź hasło"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  disabled={isRegistering}
               />
               <div className="signup-agree">
                  <input
                     type="checkbox"
                     checked={isAgreed}
                     onChange={(e) => setIsAgreed(e.target.checked)}
                     required
                  />
                  Potwierdź zapoznanie się z Regulaminem oraz Zasadami
                  Świadczenia Usług
               </div>
               <button type="submit" disabled={isRegistering}>
                  {isRegistering
                     ? 'Rejestracja...'
                     : 'Zarejestruj się'}
               </button>
            </form>
            {errorMessage && (
               <div className="error-message">{errorMessage}</div>
            )}
            <p className="signup-link">
               Masz już konto?
               <Link
                  style={{
                     color: '#5b1b0c',
                  }}
                  to="/login">
                  {' '}
                  Zaloguj się
               </Link>
            </p>
         </div>
      </div>
   );
};

export default Signup;
