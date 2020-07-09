// #region Local Imports
import { ActionConsts } from "@Definitions";
// #endregion Local Imports

// #region Interface Imports
import { IAction, IOrder } from "@Interfaces";
// #endregion Interface Imports

const INITIAL_STATE: IOrder.IStateProps = { };

type IMapPayload = IOrder.Actions.IMapPayload;

export const OrderReducer = (state = INITIAL_STATE, action: IAction<IMapPayload>) => {
    switch (action.type) {
        case ActionConsts.Order.SetReducer:
            return {
                ...state,
                ...action.payload
            };

        case ActionConsts.Order.ResetReducer:
            return INITIAL_STATE;

        default:
            return state;
    }
};
