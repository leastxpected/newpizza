import React from 'react';
import './Popular.css';
import data_product from '../Assets/data';
import Item from '../Item/Item';

const Popular = () => {
   return (
      <div className="popular">
         <h1>Popularne u Nas</h1>
         <hr />
         <div className="popular-item">
            {data_product.map((item, i) => {
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
            })}
         </div>
      </div>
   );
};

export default Popular;
