// #region Local Imports
import { IAction, ILoading } from "@Interfaces";
import { ActionConsts } from "@Definitions";
import { LoadingReducer } from ".";
// #endregion Local Imports

describe("Loading reducer", () => {
    it("should return the initial state", () => {
        expect(LoadingReducer(
            undefined,
            {} as IAction<ILoading.IStateProps>)
        ).toEqual({
            "status": true,
        });
    });
});
