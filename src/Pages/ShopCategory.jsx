import React, { useContext } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../Components/Assets/dropdown_icon.png';
import Item from '../Components/Item/Item';

const ShopCategory = (props) => {
   const { all_product } = useContext(ShopContext);
   return (
      <div className="shopcategory">
         <img
            className="shopcategory-banner"
            src={props.banner}
            alt="banner"
         />
         <div className="shopcategory-indexSort">
            <p>
               <span>Pokazuje 1-12</span> z 36 produktów
            </p>
            <div className="shopcategory-sort">
               Sortuj <img src={dropdown_icon} alt="" />
            </div>
         </div>
         <div className="shopcategory-products">
            {all_product.map((item, i) => {
               if (props.category === item.category) {
                  return (
                     <React.Fragment key={i}>
                        <Item
                           id={item.id}
                           name={item.name}
                           description={item.desc}
                           image={item.image}
                           priceM={item.priceM}
                           priceL={item.priceL}
                        />
                        <hr />
                     </React.Fragment>
                  );
               } else {
                  return null;
               }
            })}
         </div>
         <div className="shopcategory-loadmore">Pokaż więcej</div>
      </div>
   );
};

export default ShopCategory;
