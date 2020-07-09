// #region Local Imports
import { ActionConsts } from "@Definitions";
// #endregion Local Imports

// #region Interface Imports
import { IAction, IProductCategory } from "@Interfaces";
// #endregion Interface Imports

const INITIAL_STATE: IProductCategory.IStateProps = { 
    data: [],
    content: [],
    loading: false,
    modal: false
};

type IMapPayload = IProductCategory.Actions.IMapPayload;

export const ProductCategoryReducer = (state = INITIAL_STATE, action: IAction<IMapPayload>) => {
    switch (action.type) {
        case ActionConsts.ProductCategory.SetReducer:
            return {
                ...state,
                ...action.payload
            };

        case ActionConsts.ProductCategory.ResetReducer:
            return INITIAL_STATE;

        default:
            return state;
    }
};
