// #region Global Imports
import * as React from "react";
import { useDispatch } from "react-redux";
// #endregion Global Imports

// #region Local Imports
import { ISingleMenu } from "./SingleMenu";
import { MenuActions } from "@Actions";
// #endregion Local Imports

const SingleMenu: React.FunctionComponent<ISingleMenu.IProps> = (
  menu
): JSX.Element => {
    const { menu: { id, image_name, name, inventories} } = menu;
    const dispatch = useDispatch();

    const handleShow = (show, menu) => {
      document.body.classList.add('modal-open')
      dispatch(
        MenuActions.Map({
          modal: show,
          content: menu.menu
        })
      );
    }

    return (
      <div className="item" key={ id }>
        <div className="paper">
          <a href="#" data-toggle="modal" data-target="#itemModal" data-backdrop="static" onClick={() => { handleShow(true, menu) }}>
            <div className="product-thumb">
              <div className="product-size">{ inventories[0].name.th }</div>
              <img 
                src={ image_name }
                srcSet={ `${ image_name } 2x, ${ image_name } 3x` } 
                className="product-thumb" />
            </div>
            <div className="product-info">
              <div className="product-type">Coffee</div>
              <div className="product-name">{ name.th } - { inventories[0].name.th }</div>
              <div className="product-price-add">
                <div className="product-price">฿{ parseFloat(inventories[0].price).toFixed(2) }</div>
                <div className="product-add icn-add-cart" onClick={() => { handleShow(true, menu) }}/>
              </div>
            </div>
          </a>
        </div>
      </div>
    );
};

export { SingleMenu };
