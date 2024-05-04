import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

const Item = (props) => {
   return (
      <Link
         style={{ textDecoration: 'none' }}
         to={`/product/${props.id}`}>
         <div className="item">
            <img
               onClick={window.scrollTo(0, 0)}
               src={props.image}
               alt=""
            />
            <div className="item-description">
               <h4>{props.name}</h4>
               <p>{props.description}</p>
            </div>
            <div className="item-prices">
               <div>M {props.priceM} ZŁ</div>
               <div>L {props.priceL} ZŁ</div>
            </div>
         </div>
      </Link>
   );
};

export default Item;
