// #region Local Imports
import { ActionConsts } from "@Definitions";
// #endregion Local Imports

export const CartActions = {
    Map: (payload: any) => ({
            payload,
            type: ActionConsts.Cart.SetReducer
    }),

    Reset: () => ({
        type: ActionConsts.Cart.ResetReducer
    })
};
