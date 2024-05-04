import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
   apiKey: 'AIzaSyCwtGaAyWFsYEXpTe_19M5DF9f_R08n9eQ',
   authDomain: 'pizzasite-16281.firebaseapp.com',
   projectId: 'pizzasite-16281',
   storageBucket: 'pizzasite-16281.appspot.com',
   messagingSenderId: '348250595788',
   appId: '1:348250595788:web:c37664f5d970c32847bd69',
   measurementId: 'G-124VGECKTN',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
