import React from "react";
import style from './style.css'

const Card = ({ item }) => {
  return (


          
              <>
              <div class="container2 ">
          <div class="menu">
          <h2 class="menu-group-heading">
            </h2>
          <div class="menu-group">

              
          {
          item.map(Val=>{

          return(

          <>
          <div class="menu-item">
          <img class="menu-item-image" src={Val.img} alt="Bruschetta"/>

          <div class="menu-item-text">
          <h3 class="menu-item-heading">
          <span class="menu-item-name"> {Val.name}</span>
          <span class="menu-item-price"><a href="kk">{Val.price}  <i class="fa fa-shopping-basket" aria-hidden="true" style={{ marginLeft:'10px' }}></i></a> </span></h3>
          <p class="menu-item-description">
          {Val.description}
          </p>
        <hr />
          </div>
       
          </div>
        

          </>


          )

          }
    
      
      
      )

      }
      </div>

      </div>
      </div>


        </>
      

          ) }
          export default Card ;