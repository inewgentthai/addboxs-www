// #region Local Imports
import { ActionConsts } from "@Definitions";
// #endregion Local Imports

// #region Interface Imports
import { IAction, IMenu } from "@Interfaces";
// #endregion Interface Imports

const INITIAL_STATE: IMenu.IStateProps = { 
    data: [],
    content: [],
    loading: false,
    modal: false
};

type IMapPayload = IMenu.Actions.IMapPayload;

export const MenuReducer = (state = INITIAL_STATE, action: IAction<IMapPayload>) => {
    switch (action.type) {
        case ActionConsts.Menu.SetReducer:
            return {
                ...state,
                ...action.payload
            };

        case ActionConsts.Menu.ResetReducer:
            return INITIAL_STATE;

        default:
            return state;
    }
};
