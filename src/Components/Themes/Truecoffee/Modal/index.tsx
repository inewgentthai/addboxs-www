// #region Global Imports
import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
// #endregion Global Imports

// #region Local Imports
import { IStore } from "@Redux/IStore";
import { IModal } from "./Modal";
import { MenuActions } from "@Actions";
// #endregion Local Imports

const Modal: React.FunctionComponent<IModal.IProps> = (
): JSX.Element => {
  const state = useSelector((state: IStore) => state);
  const { modal, content } = useSelector((state: IStore) => state.menu);
  const dispatch = useDispatch();

  const handleShow = (show) => {
    document.body.classList.remove('modal-open')
    dispatch(
      MenuActions.Map({
        modal: show
      })
    );
  }

  return (
    <div>
      { modal &&
      <div
        className="modal fade show"
        id="itemModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="itemModal"
        style={{ display: "block" }}
      >
        <div className="item-modal modal-dialog" role="document">
          <div className="modal-content">
            <div className="paper">
              <div className="product-thumb-box">
                <div className="icn-close" data-dismiss="modal" aria-label="Close" onClick={() => { handleShow(false) }}/>
                <img
                  src={ `${content.image_name}` }
                  srcSet={ `${content.image_name} 2x, ${content.image_name} 3x` }
                  className="product-thumb"
                />
              </div>
              <div className="product-info">
                <div className="product-type">Coffee</div>
                <div className="product-name">{`${content.name.th} - ${content.inventories[0].name.th}`}</div>
                <div className="product-desc">
                { `${content.description.th}` }
                </div>
                <div className="product-price">฿{ parseFloat(content.inventories[0].price).toFixed(2) }</div>
                <div className="product-quantity d-flex justify-content-center">
                  <a className="icn-minus disable" data-original-title />
                  <input
                    type="tel"
                    className="form-control"
                    id="itemquantity"
                    min={1}
                    max={99}
                    maxLength={2}
                    defaultValue={'1'}
                  />
                  <a className="icn-plus" data-original-title />
                </div>
                <div className="product-note d-flex justify-content-center">
                  <div className="form-group text-center">
                    <label htmlFor="itemnote">Additional Information</label>
                    <input
                      type="text"
                      className="form-control"
                      id="itemnote"
                      placeholder="เช่น ระดับความหวาน,น้ำแข็ง ฯลฯ"
                    />
                  </div>
                </div>
              </div>
              <div className="btn-set">
                <button
                  className="btn btn-red btn-block"
                >
                  Add item to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    }
    </div>
  )
};

export { Modal };
