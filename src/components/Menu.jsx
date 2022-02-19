import style from './style.css'
import {Get} from './Get'
import {Get2} from './Get2'
import {Get3} from './Get3'
import { Get4 } from './Get4'

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
           <Get3/>
          <Get2/>
          <Get/>
          <Get4/>
          </div>
    </div>
    
    )
    
    
    }