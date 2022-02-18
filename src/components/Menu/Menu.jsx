import menu from '../Menu/menu.css'

export const  Menu=()=>{

    return(


        <div className='row1' >
    
   <div className='col1'>
				<div class="card mb-4">
					<div class="card-body">
						<form action="{{url('/')}}">
							<div class="input-group">
							  <input type="text" name="q" class="form-control search" value='search' />
						
							</div>
						</form>
					</div>
				</div>

{/* <Filter /> */}
     </div>

    <div class="container2 ">
    <div class="menu">
      <h2 class="menu-group-heading">
        Entrée
      </h2>
      <div class="menu-group">
        <div class="menu-item">
          <img class="menu-item-image" src="/images/food.jpg" alt="Bruschetta"/>
          <div class="menu-item-text">
            <h3 class="menu-item-heading">
            <span class="menu-item-name"> Bruschetta</span>
              <span class="menu-item-price"><a href="kk">$12.90  <i class="fa fa-shopping-basket" aria-hidden="true" style={{ marginLeft:'10px' }}></i></a> </span>
            </h3>
            <p class="menu-item-description">
              Nunc efficitur felis vel mi efficitur, sed molestie sem scelerisque. Fusce orci risus,
              congue eu mauris nec, pretium tincidunt nulla.
            </p>
          </div>
        </div>
        <div class="menu-item">
          <img class="menu-item-image" src="/images/food.jpg" alt="Bruschetta"/>
          <div class="menu-item-text">
            <h3 class="menu-item-heading">
            <span class="menu-item-name">Bruschetta</span>
              <span class="menu-item-price"><a href="kk">$12.90  <i class="fa fa-shopping-basket" aria-hidden="true" style={{ marginLeft:'10px' }}></i></a> </span>
            </h3>
            <p class="menu-item-description">
              Nunc efficitur felis vel mi efficitur, sed molestie sem scelerisque. Fusce orci risus,
              congue eu mauris nec, pretium tincidunt nulla.
            </p>
          </div>
        </div>
      </div>
      <h2 class="menu-group-heading">
        Dessert
      </h2>
      <div class="menu-group">
        <div class="menu-item">
          <img class="menu-item-image" src="/images/food.jpg" alt="Bruschetta"/>
          <div class="menu-item-text">
            <h3 class="menu-item-heading">
              <span class="menu-item-name">Bruschetta</span>
              <span class="menu-item-price"><a href="kk">$12.90  <i class="fa fa-shopping-basket" aria-hidden="true" style={{ marginLeft:'10px' }}></i></a> </span>
            </h3>
            <p class="menu-item-description">
              Nunc efficitur felis vel mi efficitur, sed molestie sem scelerisque. Fusce orci risus,
              congue eu mauris nec, pretium tincidunt nulla.
            </p>
          </div>
        </div>
        <div class="menu-item">
          <img class="menu-item-image" src="/images/food.jpg" alt="Bruschetta"/>
          <div class="menu-item-text">
            <h3 class="menu-item-heading">
            <span class="menu-item-name">Bruschetta</span>
              <span class="menu-item-price"><a href="kk">$12.90  <i class="fa fa-shopping-basket" aria-hidden="true" style={{ marginLeft:'10px' }}>  </i></a> </span>
            </h3>
            <p class="menu-item-description">
              Nunc efficitur felis vel mi efficitur, sed molestie sem scelerisque. Fusce orci risus,
              congue eu mauris nec, pretium tincidunt nulla.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
    </div>
      
    
    
    )
    
    
    }