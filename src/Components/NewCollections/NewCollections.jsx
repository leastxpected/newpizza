import React from 'react';
import './NewCollections.css';
import new_collections from '../Assets/new_collections';
import Item from '../Item/Item';

const NewCollections = () => {
   return (
      <div className="new-collections">
         <h1>Nowości</h1>
         <hr />
         <div className="collections">
            {new_collections.map((item, i) => {
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

export default NewCollections;
