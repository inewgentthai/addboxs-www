// #region Local Imports
import { ActionConsts } from "@Definitions";
// #endregion Local Imports

// #region Interface Imports
import { IAction, ICart } from "@Interfaces";
// #endregion Interface Imports

const INITIAL_STATE: ICart.IStateProps = { };

type IMapPayload = ICart.Actions.IMapPayload;

export const CartReducer = (state = INITIAL_STATE, action: IAction<IMapPayload>) => {
    switch (action.type) {
        case ActionConsts.Cart.SetReducer:
            return {
                ...state,
                ...action.payload
            };

        case ActionConsts.Cart.ResetReducer:
            return INITIAL_STATE;

        default:
            return state;
    }
};
