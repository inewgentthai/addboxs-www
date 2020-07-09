// #region Global Imports
import * as React from "react";
// #endregion Global Imports

// #region Local Imports
import { ICartBar } from "./CartBar";
// #endregion Local Imports

const CartBar: React.FunctionComponent<ICartBar.IProps> = (): JSX.Element => {
    return (
      <section className="cart-bar fixed-bottom">
        <div className="container">
          <a href="cart.html">
            <div className="row no-gutters justify-content-between align-items-center">
              <div className="col-4"><div className="item-in-cart badge">3</div></div>
              <div className="col go-to-cart">Go to Cart</div>
              <div className="col-4 total">
                <div>Total</div>
                <div>฿9,999.00</div>
              </div>
            </div>
          </a>
        </div>
      </section>
    );
};

export { CartBar };
