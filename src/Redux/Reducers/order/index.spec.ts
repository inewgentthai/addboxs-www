// #region Local Imports
import { IAction, IOrder } from "@Interfaces";
import { ActionConsts } from "@Definitions";
import { OrderReducer } from ".";
// #endregion Local Imports

describe("Order reducer", () => {
    it("should return the initial state", () => {
        expect(OrderReducer(
            undefined,
            {} as IAction<IOrder.IStateProps>)
        ).toEqual({});
    });
});
