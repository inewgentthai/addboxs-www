// #region Local Imports
import { ActionConsts } from "@Definitions";
// #endregion Local Imports

export const LoadingActions = {
    Map: (payload: any) => ({
            payload,
            type: ActionConsts.Loading.SetReducer
    }),

    Reset: () => ({
        type: ActionConsts.Loading.ResetReducer
    })
};
