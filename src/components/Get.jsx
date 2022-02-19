import React, { Component } from 'react';
import sweet from "../sweet.json"; 
import style from './style.css'

export const Get =()=> {
  fetch('./data.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    console.log(json);
  });

  
		 return (
       <>
    
    <div class="menu">
    <h2 class="menu-group-heading">
        Deserts
      </h2>
    <div class="menu-group">
  
       
{
sweet.map(post=>{

return(

<>
<div class="menu-item">
<img class="menu-item-image" src={post.img} alt="Bruschetta"/>

<div class="menu-item-text">
<h3 class="menu-item-heading">
  <span class="menu-item-name"> {post.name}</span>
  <span class="menu-item-price"><a href="kk">{post.price}  <i class="fa fa-shopping-basket" aria-hidden="true" style={{ marginLeft:'10px' }}></i></a> </span></h3>
  <p class="menu-item-description">
  {post.description}
    </p>
</div>
</div>


</>


)


})

}
</div>

</div>


         
        

      </>
      ) }
      
       
  

