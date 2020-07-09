// #region Local Imports
import { IAction, IMenu } from "@Interfaces";
import { ActionConsts } from "@Definitions";
import { MenuReducer } from ".";
// #endregion Local Imports

describe("Menu reducer", () => {
    it("should return the initial state", () => {
        expect(MenuReducer(
            undefined,
            {} as IAction<IMenu.IStateProps>)
        ).toEqual({ 
            data: [],
            content: [],
            loading: false,
            modal: false
        });
    });
});
