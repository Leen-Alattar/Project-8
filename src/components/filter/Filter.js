import React from 'react';
import Buttons from '../../Buttons';
import Card from '../../Card';
import Data from "../../Data";
const Filter = ({item ,setItem}) => {
    const menuItems = [...new Set(Data.map((Val) => Val.category))];

  const filterItem = (curcat) => {
    const newItem = Data.filter((newVal) => {
      return newVal.category === curcat;
    });
    setItem(newItem);
  };
    return ( <>
     {/* filter  */}
     <div className="container3">
        <div className="row3">
          <h1 className="col-12 text-center my-3 fw-bold head">Our Menu</h1>
          <Buttons
            filterItem={filterItem}
            setItem={setItem}
            menuItems={menuItems}
          />
          <Card item={item} />
        </div>
      </div>
    
    </> );
}
 
export default Filter;