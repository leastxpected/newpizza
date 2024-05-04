import React, { useContext, useState } from 'react';
import './ProductDisplay.css';
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
   const { product } = props;
   const { addToCart } = useContext(ShopContext);
   const [star, setStar] = useState(false);
   const [selectedPrice, setSelectedPrice] = useState(null);

   function toggleStar() {
      setStar((prevStar) => !prevStar);
   }

   function handleAddToCart() {
      if (selectedPrice) {
         addToCart(product.id, selectedPrice); // Przekazywanie ID produktu i wybranej ceny
      }
   }

   return (
      <div className="productdisplay">
         <div className="productdisplay-left">
            <img
               className="productdisplay-main-img"
               src={product.image}
               alt={product.name}
            />
            <div
               onClick={toggleStar}
               className="productdisplay-badge">
               {star ? (
                  <img src={star_icon} alt="Star" />
               ) : (
                  <img src={star_dull_icon} alt="Dull Star" />
               )}
            </div>
         </div>
         <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-description">
               {product.desc}
            </div>
            <div className="productdisplay-right-size">
               <h2>Rozmiar:</h2>
               <div className="productdisplay-right-box">
                  <div className="productdisplay-right-sizes">
                     <label htmlFor="priceM">
                        <input
                           type="radio"
                           value={product.priceM}
                           id="priceM"
                           name="price"
                           onChange={(e) =>
                              setSelectedPrice(e.target.value)
                           }
                        />
                        M {product.priceM} ZŁ
                     </label>

                     <label htmlFor="priceL">
                        <input
                           type="radio"
                           value={product.priceL}
                           id="priceL"
                           name="price"
                           onChange={(e) =>
                              setSelectedPrice(e.target.value)
                           }
                        />
                        L {product.priceL} ZŁ
                     </label>
                  </div>
                  <button
                     className="productdisplay-right-button"
                     onClick={handleAddToCart}
                     disabled={!selectedPrice}>
                     Dodaj do koszyka
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ProductDisplay;
