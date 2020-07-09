// #region Local Imports
import { ActionConsts } from "@Definitions";
// #endregion Local Imports

// #region Interface Imports
import { IAction, ILoading } from "@Interfaces";
// #endregion Interface Imports

const INITIAL_STATE: ILoading.IStateProps = { 
    status: true
};

type IMapPayload = ILoading.Actions.IMapPayload;

export const LoadingReducer = (state = INITIAL_STATE, action: IAction<IMapPayload>) => {
    switch (action.type) {
        case ActionConsts.Loading.SetReducer:
            return {
                ...state,
                ...action.payload
            };

        case ActionConsts.Loading.ResetReducer:
            return INITIAL_STATE;

        default:
            return state;
    }
};
