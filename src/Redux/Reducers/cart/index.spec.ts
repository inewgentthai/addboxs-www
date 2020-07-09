// #region Local Imports
import { IAction, ICart } from "@Interfaces";
import { ActionConsts } from "@Definitions";
import { CartReducer } from ".";
// #endregion Local Imports

describe("Cart reducer", () => {
    it("should return the initial state", () => {
        expect(CartReducer(
            undefined,
            {} as IAction<ICart.IStateProps>)
        ).toEqual({});
    });
});
