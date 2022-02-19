import style  from "./style.css";
import { Get } from "./Get";
import { Get2 } from "./Get2";
import { Get3 } from "./Get3";
import { Get4 } from "./Get4";

export const Menu = ({cart, setCart}) => {
 
  return (
    <div className="row1">
      <div className="col1">
        <div className="card mb-4">
          <div className="card-body">
            <form action="{{url('/')}}">
              <div className="input-group">
                <input
                  type="text"
                  name="q"
                  className="form-control search"
                  value="search"
                />
              </div>
            </form>
          </div>
        </div>

        {/* <Filter /> */}
      </div>
      <div className="container2 ">
        <Get3 cart={cart}  setCart={setCart} />
        <Get2 cart={cart}  setCart={setCart} />
        <Get cart={cart}   setCart={setCart} />
        <Get4 cart={cart}  setCart={setCart} />
      </div>
    </div>
  );
};
