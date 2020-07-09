// #region Local Imports
import { ActionConsts } from "@Definitions";
// #endregion Local Imports

export const OrderActions = {
    Map: (payload: any) => ({
            payload,
            type: ActionConsts.Order.SetReducer
    }),

    Reset: () => ({
        type: ActionConsts.Order.ResetReducer
    })
};
