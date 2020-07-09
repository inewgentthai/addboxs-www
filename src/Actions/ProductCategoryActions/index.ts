// #region Global Imports
import { Dispatch } from "redux";
// #endregion Global Imports

// #region Local Imports
import { ActionConsts } from "@Definitions";
import { ProductCategoryService } from "@Services";
// #endregion Local Imports

// #region Interface Imports
import { IProductCategory } from "@Interfaces";
// #endregion Interface Imports

export const ProductCategoryActions = {
    Map: (payload: any) => ({
        payload,
        type: ActionConsts.ProductCategory.SetReducer
    }),

    Reset: () => ({
        type: ActionConsts.ProductCategory.ResetReducer
    }),

    GetProductCategory: (payload: IProductCategory.Actions.IGetProductCategoryPayload) => async (
        dispatch: Dispatch
    ) => {
        const result = await ProductCategoryService.GetProductCategory({
            params: payload.params,
        });
        
        dispatch({
            payload: {
                data: result.data,
                loading: true,
            },
            type: ActionConsts.ProductCategory.SetReducer,
        });
    },
};
