import React from "react";
import "./Productslist.css";
import Products from '../Products/Products'
import {Product} from "../../data"

function Productslist() {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Products</h1>
        <p className="pl-desc">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum,
          tempore, perferendis laudantium quisquam id, magnam aspernatur
          veritatis voluptates natus velit optio.
        </p>

      </div>
      <div className="pl-list">
       
         {Product.map((item) =>(
         <Products  key={item.id} img={item.img}vlink={item.link}/>
         )
           )}
        
        
      </div>
    </div>
  );
}

export default Productslist;
