import React from 'react';
import './RelatedProducts.css';
import data_product from '../Assets/data';
import Item from '../Item/Item';

const RelatedProducts = () => {
   return (
      <div className="relatedproducts">
         <h1>Spróbuj także</h1>
         <hr />
         <div className="relatedproducts-item">
            {data_product.map((item, i) => {
               return (
                  <Item
                     key={i}
                     id={item.id}
                     name={item.name}
                     description={item.desc}
                     image={item.image}
                     priceM={item.priceM}
                     priceL={item.priceL}
                  />
               );
            })}
         </div>
      </div>
   );
};

export default RelatedProducts;
