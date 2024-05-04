import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './Context/AuthContext';
import ShopCategory from './Pages/ShopCategory';
import Shop from './Pages/Shop';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Footer from './Components/Footer/Footer';
import pizze_baner from './Components/Assets/pizze_baner.png';
import dania_baner from './Components/Assets/dania_baner.png';
import przystawki_baner from './Components/Assets/przystawki_baner.png';
import salatki_baner from './Components/Assets/salatki_baner.png';
import desery_baner from './Components/Assets/desery_baner.png';
import dodatki_baner from './Components/Assets/dodatki_baner.png';

function App() {
   return (
      <AuthProvider>
         <div>
            <BrowserRouter>
               <Navbar />
               <Routes>
                  <Route path="/" element={<Shop />} />
                  <Route
                     path="/przystawki"
                     element={
                        <ShopCategory
                           category="przystawki"
                           banner={przystawki_baner}
                        />
                     }
                  />
                  <Route
                     path="/pizze"
                     element={
                        <ShopCategory
                           category="pizze"
                           banner={pizze_baner}
                        />
                     }
                  />
                  <Route
                     path="/dania"
                     element={
                        <ShopCategory
                           category="dania"
                           banner={dania_baner}
                        />
                     }
                  />
                  <Route
                     path="/salatki"
                     element={
                        <ShopCategory
                           category="salatki"
                           banner={salatki_baner}
                        />
                     }
                  />
                  <Route
                     path="/desery"
                     element={
                        <ShopCategory
                           category="desery"
                           banner={desery_baner}
                        />
                     }
                  />
                  <Route
                     path="/dodatki"
                     element={
                        <ShopCategory
                           category="dodatki"
                           banner={dodatki_baner}
                        />
                     }
                  />
                  <Route path="/product" element={<Product />}>
                     <Route path=":productId" element={<Product />} />
                  </Route>
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<Signup />} />
               </Routes>
               <Footer />
            </BrowserRouter>
         </div>
      </AuthProvider>
   );
}

export default App;
