// #region Global Imports
import { Dispatch } from "redux";
// #endregion Global Imports

// #region Local Imports
import { ActionConsts } from "@Definitions";
import { MenuService } from "@Services";
// #endregion Local Imports

// #region Interface Imports
import { IMenu } from "@Interfaces";
// #endregion Interface Imports

export const MenuActions = {
    Map: (payload: any) => ({
        payload,
        type: ActionConsts.Menu.SetReducer
    }),

    Reset: () => ({
        type: ActionConsts.Menu.ResetReducer
    }),

    GetMenu: (payload: IMenu.Actions.IGetMenuPayload) => async (
        dispatch: Dispatch
    ) => {
        const result = await MenuService.GetMenu({
            params: payload.params,
        });
        
        dispatch({
            payload: {
                data: result.data,
                loading: true,
            },
            type: ActionConsts.Menu.SetReducer,
        });
    },
};
