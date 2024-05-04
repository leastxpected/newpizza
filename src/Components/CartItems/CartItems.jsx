import React, { useContext } from 'react';
import './CartItems.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png';

const CartItems = () => {
   const {
      getTotalCartAmount,
      all_product,
      cartItems,
      removeFromCart,
   } = useContext(ShopContext);

   let deliveryFee = getTotalCartAmount() > 100 ? 0 : 10;

   return (
      <div className="cartitems">
         <div className="cartitems-format-main">
            <p>Produkty</p>
            <p>Tytuł</p>
            <p>Cena</p>
            <p>Ilość</p>
            <p>Razem</p>
            <p>Usuń</p>
         </div>
         <hr />
         {all_product.map((e) => {
            if (cartItems[e.id] > 0) {
               return (
                  <div>
                     <div className="cartitems-format cartitems-format-main">
                        <img
                           className="cartitems-product-icon"
                           src={e.image}
                           alt=""
                        />
                        <p>{e.name}</p>
                        <p>{e.priceM} ZŁ</p>
                        <button className="cartitems-quantity">
                           {cartItems[e.id]}
                        </button>
                        <p>{e.priceM * cartItems[e.id]} ZŁ</p>
                        <img
                           className="cartitems-remove-icon"
                           onClick={() => {
                              removeFromCart(e.id);
                           }}
                           src={remove_icon}
                           alt=""
                        />
                     </div>
                     <hr />
                  </div>
               );
            }
            return null;
         })}
         <div className="cartitems-down">
            <div className="cartitems-total">
               <h1>Podsumowanie</h1>
               <div className="cartitems-total-item">
                  <p>Suma częściowa:</p>
                  <p>{getTotalCartAmount()} zł</p>
               </div>
               <hr />
               <div className="cartitems-total-item">
                  <p>Dostawa:</p>
                  <p>{deliveryFee} zł</p>
               </div>
               <hr />
               <div className="cartitems-total-item">
                  <h3>SUMA:</h3>
                  <h3>{getTotalCartAmount() + deliveryFee} zł</h3>
               </div>
               <button>Przejdź do płatności</button>
               <p>
                  Dostawa jest bezpłatna dla zamówień powyżej 100zł
               </p>
            </div>
            <div className="cartitems-promocode">
               <p>Jeśli masz kod zniżkowy, wpisz poniżej</p>
               <div className="cartitems-promobox">
                  <input type="text" placeholder="Wpisz kod" />
                  <button>Użyj kodu</button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default CartItems;
