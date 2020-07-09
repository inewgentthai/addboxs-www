// #region Local Imports
import { IAction, IProductCategory } from "@Interfaces";
import { ActionConsts } from "@Definitions";
import { ProductCategoryReducer } from ".";
// #endregion Local Imports

describe("ProductCategory reducer", () => {
    it("should return the initial state", () => {
        expect(ProductCategoryReducer(
            undefined,
            {} as IAction<IProductCategory.IStateProps>)
        ).toEqual({ 
            data: [],
            content: [],
            loading: false,
            modal: false
        });
    });
});
